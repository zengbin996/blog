chcp 65001
@echo off

echo ===========================
echo VuePress GitHub Pages 一键发布脚本
echo ===========================


echo 正在生成静态文件...
yarn run build

echo 正在切换到 deploy 分支...
git checkout -B deploy

echo 正在删除旧文件...
git rm -rf .

echo 正在复制静态文件...
xcopy /E /Y .\docs\.vuepress\dist\* .

echo 正在提交更改...
git add .
git commit -m "Update GitHub Pages"

echo 正在推送到 deploy 分支...
git push origin deploy --force

echo 发布完成！
pause
