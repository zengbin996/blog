const path = require('path');
const fs = require('fs');

//加载本地环境变量
const envPath = path.resolve(__dirname, './cos.env');
fs.existsSync(envPath) && require('dotenv').config({ path: envPath });

//初始化 COS
const { SecretId, SecretKey } = process.env;
const Bucket = 'blog-dist-1258070316';
const Region = 'ap-chengdu';
const COS = require('cos-nodejs-sdk-v5');
const cos = new COS({ SecretId, SecretKey });

// 执行打包
const vuepressPath = path.resolve(__dirname, '../node_modules', '.bin', 'vuepress.cmd');
const { spawn } = require('child_process');
const child = spawn(vuepressPath, ['build', 'docs']);
child.stdout.on('data', data => {
  console.log(`stdout: ${data}`);
});
child.stderr.on('data', data => {
  console.error(`stderr: ${data}`);
});
child.on('close', code => {
  console.log(`child process exited with code ${code}`);
  //执行完毕
  if (code == 0) {
    console.log('打包完成,准备发布----------');
    onDeploy();
  }
});

onDeploy();

async function onDeploy() {
  await deleteFiles();
  await uploadFiles(path.resolve(__dirname, '../docs/.vuepress/dist/'));
  console.log('已经发布完成----------');
}

//删除文件
async function deleteFiles() {
  return new Promise((resolve, reject) => {
    cos.getBucket(
      {
        Bucket,
        Region,
        MaxKeys: 1000,
      },
      function (listError, listResult) {
        if (listError) return reject(delError);
        if (!listResult.Contents.length) return resolve('暂无文件');
        const fileList = listResult.Contents.map(item => ({ Key: item.Key }));
        cos.deleteMultipleObject({
          Bucket,
          Region,
          Objects: fileList,
          function(delError, deleteResult) {
            if (delError) return reject(delError);
            return resolve(deleteResult);
          },
        });
      }
    );
  });
}

//上传文件
async function uploadFiles(dir) {
  async function getFilesAsync(dir, fileList = []) {
    const files = await fs.promises.readdir(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);

      const stat = await fs.promises.stat(filePath);

      if (stat.isDirectory()) {
        await getFilesAsync(filePath, fileList);
      } else {
        fileList.push({
          filePath,
          key: filePath.replace(/\\/g, '/').replace(/(.*\/dist\/)/, '/'),
        });
      }
    }

    return fileList;
  }
  const fileList = await getFilesAsync(dir);

  return new Promise((resolve, reject) => {
    const promiseList = fileList.map(
      item =>
        new Promise((resolve, reject) => {
          cos.putObject(
            {
              Bucket,
              Region,
              Key: item.key,
              Body: fs.createReadStream(item.filePath),
            },
            function (err, data) {
              if (err) return reject(err);
              console.log(`已上传文件：${item.key}`);
              resolve(data);
            }
          );
        })
    );

    Promise.all(promiseList)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
