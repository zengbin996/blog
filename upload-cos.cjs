require('dotenv').config();
const COS = require('cos-nodejs-sdk-v5');
const fs = require('fs');
const path = require('path');

// 创建 COS 实例
const cos = new COS({
  SecretId: process.env.SECRET_ID,
  SecretKey: process.env.SECRET_KEY,
});

// 上传文件的函数
// 上传文件的函数
function uploadFile(bucket, region, localFilePath, cosPath) {
  return new Promise((resolve, reject) => {
    // 检查是否为文件
    const stat = fs.statSync(localFilePath);
    if (stat.isFile()) {
      cos.sliceUploadFile(
        {
          Bucket: bucket,
          Region: region,
          Key: cosPath,
          FilePath: localFilePath,
        },
        function (err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
            console.log('success', data.Key);
          }
        }
      );
    } else {
      resolve(null);
    }
  });
}

// 遍历目录并上传所有文件的函数
async function uploadDirectory(bucket, region, localDirectory, cosDirectory) {
  const files = fs.readdirSync(localDirectory);
  for (const file of files) {
    const localFilePath = path.join(localDirectory, file);
    const cosPath = path.posix.join(cosDirectory, file); // 使用 posix 风格的路径

    const stat = fs.statSync(localFilePath);
    if (stat.isDirectory()) {
      // 如果是目录，递归调用 uploadDirectory
      await uploadDirectory(bucket, region, localFilePath, cosPath);
    } else if (stat.isFile()) {
      // 如果是文件，上传到 COS
      await uploadFile(bucket, region, localFilePath, cosPath);
    }
  }
}

// 使用你的 COS 存储桶名称和地域，以及要上传的本地目录和 COS 目录
uploadDirectory(
  'blog-zengbin-1258070316',
  'ap-chengdu',
  path.resolve(__dirname, './dist'),
  '/'
).catch(console.error);
