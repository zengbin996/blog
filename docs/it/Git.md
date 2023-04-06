# Git-常用指令

#### git 基本命令

**git init**
初始化一个 git 仓库

**git add fileName**
把文件提交到缓存区

**git rm fileName**
删除缓存区的文件

**git commit -m "提交的备注信息"**
把缓存区的内容提交到 git 仓库

**git status**
查看 git 仓库状态

**git diff fileName**
比较未提交文件差异

**git log**
查看 git 日志

**git reset 版本号**
回退到某一个版本

**git reset HEAD^**
回退到上一个版本，^代表上一个，以此类推

**git reflog**
查看仓库历史操作记录

#### git 线上指令

**git clone 仓库地址**
克隆线上仓库到本地

**git push 仓库地址**
上传本地仓库到线上

**git pull**
拉取线上 仓库到本地
