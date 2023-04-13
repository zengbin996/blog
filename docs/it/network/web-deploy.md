# 项目上线部署(前端)

### 前期准备

1. 购买一台云服务器(一下操作基于腾讯云轻量级服务器,系统为 CentOS7.6)
2. 设置防火墙，如无特殊寻求，设置为全部开放即可
   ![](https://upload-images.jianshu.io/upload_images/19038988-54b57c27b6523aaa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
3. 重置密码
   ![](https://upload-images.jianshu.io/upload_images/19038988-f31bfdf9c371cade.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
4. 登录(默认基于 root 用户,其他用户可能存在权限问题)
   可以使用 XShell 或者其他的工具进行登录, 考虑到很多前端人员对 linux 操作不够熟悉, 本教程使用 vscod 登录
   首先安装`Remote - SSH`插件, 安装完成后会在左侧工具栏生成一个选项, 点击进入插件, 配置 ssh; 输入 `ssh 用户名@服务器地址 -A`, 例如 `ssh root@192.168.1.1 -A`
   ![](https://upload-images.jianshu.io/upload_images/19038988-c9c4270e454d550c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
   点击回车会让你选择配置文件保存位置, 随便选择一个即可, 接下来就可以连接服务器了, 进去会让你选择主机, 选择 Linux 即可
   ![](https://upload-images.jianshu.io/upload_images/19038988-2c2cb584e3353fd2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
   如果你之前连接过这个服务器,这个时候可能会弹出无法连接的提示, 你需要将本地文件 `.ssh/known_hosts`删除即可, 随后根据提示输入密码, 看到以下界面说明登录成功, 此时在 vscode 打开文件都是访问服务器上的文件
   ![](https://upload-images.jianshu.io/upload_images/19038988-9b781f3da9bad3ca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
5. 配置免密登录(过程中可能需要多次输入登录密码)
   在刚才登录的 vscode 打开终端输入`ssh-keygen`, 此命令可以生成 SSH 秘钥, 免密登录就是基于 SSH 协议的, 在本机也用同样的操作生成一个 SSH 秘钥, 如果生成过 ssh(例如 git 免密拉代码)就不用在生成了
   ![生成SSH秘钥](https://upload-images.jianshu.io/upload_images/19038988-642090de955d5e86.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
   vscode 打开文件夹 `/root/.ssh`,此时你会看见两个文件`id_rsa`和`id_rsa.pub`, `id_rsa.pub`是服务器的公钥可以配置到 GitHub 中实现免密拉代码
   在此文件夹下创建`authorized_keys`文件, 如果有则不用创建了将本机的`C:\Users\admin\.ssh\id_rsa.pub`文件复制到`authorized_keys`文件中保存, 然后退出窗口重新进入, 如果没有提示输入密码, 说明配置免密成功

### 项目部署

提示：任何时候不要使用：`rm -rf /*`(删除全部文件) , 当你使用后，意味着需要重新安装系统。

##### 安装必要的软件

安装软件主要有三种方式, 一下用三种安装方式分别安装一个软件

> NGINX yum 安装

1. 安装
   更新 yum 源 [centos 镜像](https://developer.aliyun.com/mirror/centos?spm=a2c6h.13651102.0.0.3e221b11kCNJFV)

```
yum -y install nginx   //安装Nginx
systemctl start nginx   //启动Nginx
systemctl enable nginx.service //开机自启

service nginx start  //启动nginx
service nginx stop  //停止nginx
service nginx reload  //重载nginx
```

2. 配置
   配置路径 `/etc/nginx/nginx.conf`, 此处列举了最重要的几个配置, 详情配置请参考[Nginx 配置详解 | 菜鸟教程](https://www.runoob.com/w3cnote/nginx-setup-intro.html)
   配置完成后要执行重启 nginx 才可生效, nginx 默认 80 端口, 直接访问服务器 ip 地址即可访问到

```
#  注意该配置只是片段, 请勿复制替换, 你应该找到你服务器的对应代码进行修改
user nginx; #用户权限 改成root或者修改web目录的读写权限, 否则有可能会出现403
http {
    server {
        root /usr/share/nginx/html; #前端页面地址
        location /api {
            proxy_pass https://www.baidu.com/; #  反向代理
        }
    }
}
```

> Nodejs 二进制文件安装

1. 去官网找到对应的版本https://nodejs.org/en/download/, 在下载链接上面右击,然后点击复制链接即可; 国外网站下载有点慢也可以去阿里镜像站下载[CNPM Binaries Mirror (npmmirror.com)](https://registry.npmmirror.com/binary.html?path=node/&spm=a2c6h.24755359.0.0.6d444dccjBItdm)

![](https://upload-images.jianshu.io/upload_images/19038988-0c67c48817330f2f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```bash
wget https://nodejs.org/dist/v18.12.0/node-v18.12.0-linux-x64.tar.xz  #下载
tar -xvf  node-v18.12.0-linux-x64.tar.xz  #解压

mv node-v18.12.0-linux-x64 nodejs #重命名 此步骤非必要
rm -rf node-v18.12.0-linux-x64.tar.xz #删除安装包
```

2. 配置环境变量
   在文件`/etc/profile`末尾添加如下两行代码, 并执行`source /etc/profile`让配置生效

```
export NODE_HOME=/etc/nodejs
export PATH=$PATH:$NODE_HOME/bin
```

看到如下界面说明安装成功
![](https://upload-images.jianshu.io/upload_images/19038988-68481f095455b85e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> Git 源码安装

1. 下载最新源码 https://git-scm.com/download/linux
   ![](https://upload-images.jianshu.io/upload_images/19038988-bbd392dbedf61d6d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```bash
wget https://www.kernel.org/pub/software/scm/git/git-2.38.1.tar.gz
```

2. 解压源码

```base
tar -zxvf git-2.38.1
```

3. 安装编译环境

```base
yum install curl-devel expat-devel openssl-devel zlib-devel gcc-c++
yum install perl-ExtUtils-MakeMaker automake autoconf libtool make
```

4. 编译安装

```base
cd git-2.38.1
make configure
./configure --prefix=/usr/local/git
make profix=/usr/local/git
make install
```

6. 配置环境变量, 在文件`/etc/profile`末尾添加如下两行代码, 并执行`source /etc/profile`让配置生效

```base
export GIT_HOME=/usr/local/git
export PATH=$PATH:$GIT_HOME/bin
```

7.测试
![](https://upload-images.jianshu.io/upload_images/19038988-39a2e3312cc9bc14.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
