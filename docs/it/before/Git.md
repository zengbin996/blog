# Git 常用指令

## 基本命令

**`git init`**
初始化一个本地 Git 仓库。

**`git add <fileName>`**
将文件添加到暂存区（staging area）。使用 `git add .` 可添加所有修改文件。

**`git rm <fileName>`**
从暂存区和工作区删除文件。若只想从暂存区移除（保留本地文件），使用 `git rm --cached <fileName>`。

**`git commit -m "提交的备注信息"`**
将暂存区的内容提交到本地 Git 仓库。

**`git status`**
查看工作区和暂存区的状态。

**`git diff <fileName>`**
比较工作区与暂存区文件的差异。

**`git log`**
查看提交历史日志。加 `--oneline` 参数可简洁显示。

**`git reset <版本号>`**
回退到指定版本（默认 `--mixed` 模式，保留工作区改动）。

**`git reset HEAD^`**
回退到上一个版本，`^` 表示上一个，`^^` 表示上上个，也可用 `HEAD~n` 表示回退 n 个版本。

**`git reflog`**
查看仓库所有历史操作记录，包括已回退的提交，可用于找回误删的版本。

## 远程仓库指令

**`git clone <仓库地址>`**
克隆远程仓库到本地。

**`git remote add origin <仓库地址>`**
将本地仓库与远程仓库关联。

**`git push origin <分支名>`**
将本地分支推送到远程仓库。首次推送可加 `-u` 参数建立追踪关系：`git push -u origin main`。

**`git pull`**
拉取远程仓库的最新内容并合并到当前分支（等同于 `git fetch` + `git merge`）。

## 分支管理

**`git branch`**
查看本地所有分支，当前分支前有 `*` 标记。

**`git branch <分支名>`**
创建新分支。

**`git checkout <分支名>`** 或 **`git switch <分支名>`**
切换到指定分支。

**`git merge <分支名>`**
将指定分支合并到当前分支。

**`git branch -d <分支名>`**
删除已合并的分支。若要强制删除未合并的分支，使用 `-D`。

**`git checkout -b <分支名>`** 或 **`git switch -c <分支名>`**
创建并切换到新分支（相当于 `git branch` + `git checkout` 两步合一）。

## 暂存工作区

**`git stash`**
将当前工作区的未提交改动临时保存（入栈），让工作区回到干净状态，便于切换分支。

**`git stash pop`**
恢复最近一次 stash 的内容并从栈中删除。

**`git stash list`**
查看所有暂存记录。

## 标签管理

**`git tag <标签名>`**
在当前提交上打轻量标签。

**`git tag -a <标签名> -m "说明"`**
打附注标签（推荐），包含标签信息。

**`git push origin <标签名>`**
将标签推送到远程仓库。
