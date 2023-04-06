const fs = require('fs');
const path = require('path');

function getFilesInDir(dirPath) {
  const fileNames = fs.readdirSync(dirPath); // 获取目录下所有文件名的数组
  const files = [];

  fileNames.forEach((fileName) => {
    const fullPath = path.join(dirPath, fileName);
    const stats = fs.statSync(fullPath);

    if (stats.isFile() && fileName !== 'README.md') {
      // 判断是不是文件，且文件名不为 README.md
      files.push(fileName);
    }
  });

  return files;
}

module.exports = getFilesInDir;
