# Node.js 和 NPM

阿里镜像站地址: [https://npmmirror.com](https://npmmirror.com/)

Node.js 是能够在服务器端运行 JavaScript 的开放源代码、跨平台执行环境。 它采用 Google 开发的 V8 执行代码，使用事件驱动、非阻塞和异步输入输出模型等技术来提高性能。NPM 是 Node.js 默认的软件包管理系统，一般情况下，我们在安装 Node.js 会默认安装上 NPM。

[Node.js 下载地址](https://nodejs.org/)

## Node.js 的常用命令

1. `node`：启动 Node.js，进入交互式命令行模式。
2. `node app.js`：运行一个 Node.js 应用程序，其中 `app.js` 是应用程序的主文件名。
3. `npm`：Node.js 的包管理工具，用于安装、更新、卸载、搜索和管理 Node.js 包文件。
4. `npm install package-name`：安装一个 Node.js 模块（包）。
5. `npm remove package-name`：卸载一个 Node.js 模块（包）。
6. `npm update package-name`：更新一个 Node.js 模块（包）。
7. `npm init`：创建一个新的 Node.js 应用程序，并生成一个 `package.json` 文件。
8. `npm start`：启动一个 Node.js 应用程序的入口点 `server.js`。
9. `npm test`：运行 Node.js 应用程序的测试脚本。
10. `npm run-script script-name`：运行 Node.js 应用程序 `package.json` 文件中的自定义脚本。

## nvm

NVM 是 Node.js 版本管理器的缩写。它使您可以轻松地在同一台计算机上安装和管理多个 Node.js 版本。您可以通过 NVM 随时切换 Node.js 版本，而不会影响系统中其他应用程序的运行。

[NVM Windows 下载地址 ](https://github.com/coreybutler/nvm-windows/releases)

常用的 NVM 命令：

1. `nvm install <version>`：安装指定版本的 Node.js。例如，nvm install 12.18.2 将安装 Node.js 版本 12.18.2。
2. `nvm use <version>`：切换到指定版本的 Node.js。例如，nvm use 12.18.2 将切换到 Node.js 版本 12.18.2。
3. `nvm ls`：列出所有已经安装的 Node.js 版本。
4. `nvm current`：查看当前正在使用的 Node.js 版本。
5. `nvm alias <name> <version>`：为特定版本的 Node.js 创建别名。例如，nvm alias default 12.18.2 将为 Node.js 版本 12.18.2 创建别名"default"，以便以后可以通过 nvm use default 命令轻松切换到这个版本。
6. `nvm uninstall <version>`：删除指定版本的 Node.js。
7. `nvm version`：查看 NVM 的版本号。

## 修改 NPM 源

NPM 的默认源为官方源，对于国内用户来说，下载速度可能较慢。可以切换为国内的源来加快下载速度

1. 查看当前使用的地址

```shell
npm config get registry
```

2. 使用阿里源

```bash
npm config set registry https://registry.npmmirror.com/
```

3. 恢复官方源

```bash
npm config set registry https://registry.npmjs.org/
```

### nrm

nrm 是一个 Node.js 的包管理工具，用于切换和管理不同的 NPM 注册源。nrm 可以帮助我们切换到国内的源，提高下载速度。

可以用命令直接安装 nrm `npm install -g nrm`

常用的 nrm 命令：

1. `nrm ls`：列出可用的 NPM 源列表。
2. `nrm use registry-name`：切换到指定的 NPM 源。
3. `nrm add registry-name registry-url`：添加一个新的 NPM 源。
4. `nrm del registry-name`：删除指定的 NPM 源。
5. `nrm test registry-name`：测试指定 NPM 源的响应时间。
6. `nrm current`：显示当前正在使用的 NPM 源。
