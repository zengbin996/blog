chcp 65001
@echo off

echo ===========================
echo VuePress GitHub Pages 一键发布脚本
echo ===========================


echo 正在生成静态文件...
call yarn run build

echo 正在初始化git仓库...
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'


echo 正在发布...
git push -f https://github.com/zengbin996/blog.git master:deploy

cd -
echo 发布完成！
pause
