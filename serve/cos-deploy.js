const COS = require('cos-nodejs-sdk-v5');
const fs = require('fs');
const path = require('path');

const Bucket = 'blog-dist-1258070316';
const Region = 'ap-chengdu';

function uploadFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const fileStat = fs.statSync(filePath);

    if (fileStat.isDirectory()) {
      uploadFiles(filePath);
    } else {
      const key = filePath
        .replace(__dirname, '')
        .replace(/\\/g, '/')
        .replace(/^.*?\.vuepress\/dist\//, '/');

      cos.putObject(
        {
          Bucket,
          Region,
          Key: key,
          Body: fs.createReadStream(filePath),
        },
        function (err, data) {
          if (err) {
            console.error(`Upload ${key} failed:`, err);
          } else {
            console.log(`Upload ${key} successfully.`);
          }
        }
      );
    }
  });
}

const deleteFiles = function (marker) {
  cos.getBucket(
    {
      Bucket,
      Region,
      MaxKeys: 1000,
    },
    function (listError, listResult) {
      if (listError) return console.log('list error:', listError);
      var nextMarker = listResult.NextMarker;
      var objects = listResult.Contents.map(function (item) {
        return { Key: item.Key };
      });
      cos.deleteMultipleObject(
        {
          Bucket,
          Region,
          Objects: objects,
        },
        function (delError, deleteResult) {
          if (delError) {
            console.log('delete error', delError);
            console.log('delete stop');
          } else {
            console.log('delete result', deleteResult);
            if (listResult.IsTruncated === 'true') deleteFiles(nextMarker);
            else uploadFiles(path.resolve(__dirname, '../docs/.vuepress/dist'));
          }
        }
      );
    }
  );
};

deleteFiles();
