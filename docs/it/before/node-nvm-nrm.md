# Node.js、NVM 与 NRM

## Node.js 简介

**Node.js** 是能够在服务器端运行 JavaScript 的开源、跨平台运行环境。它采用 Google 开发的 **V8** 引擎执行代码，使用事件驱动、非阻塞 I/O 模型来提高性能，非常适合构建高并发的网络应用。

**NPM**（Node Package Manager）是 Node.js 默认的包管理工具，安装 Node.js 时会同步安装 NPM。

[Node.js 官网下载](https://nodejs.org/)

## Node.js 常用命令

| 命令 | 说明 |
|---|---|
| `node` | 进入 Node.js 交互式命令行（REPL）模式 |
| `node app.js` | 运行指定的 Node.js 脚本文件 |
| `npm init` | 初始化项目，生成 `package.json` 文件 |
| `npm install <package-name>` | 安装指定包（缩写：`npm i <package-name>`） |
| `npm install` | 根据 `package.json` 安装所有依赖 |
| `npm uninstall <package-name>` | 卸载指定包 |
| `npm update <package-name>` | 更新指定包 |
| `npm start` | 运行 `package.json` 中定义的 `start` 脚本 |
| `npm test` | 运行 `package.json` 中定义的测试脚本 |
| `npm run <script-name>` | 运行 `package.json` 中定义的自定义脚本 |
| `npm list` | 查看已安装的包列表 |

## NVM — Node.js 版本管理器

**NVM**（Node Version Manager）是 Node.js 的版本管理工具，可在同一台计算机上安装和切换多个 Node.js 版本，方便在不同项目中使用不同版本的 Node.js。

- [NVM（Linux/macOS）GitHub 地址](https://github.com/nvm-sh/nvm)
- [NVM-Windows 下载地址](https://github.com/coreybutler/nvm-windows/releases)

### 常用 NVM 命令

| 命令 | 说明 |
|---|---|
| `nvm install <version>` | 安装指定版本，如 `nvm install 18.16.0` |
| `nvm install --lts` | 安装最新的 LTS（长期支持）版本 |
| `nvm use <version>` | 切换到指定版本 |
| `nvm ls` | 列出本地已安装的所有版本 |
| `nvm ls-remote` | 列出远程可用的所有版本 |
| `nvm current` | 查看当前正在使用的版本 |
| `nvm alias default <version>` | 设置默认版本（新终端窗口生效） |
| `nvm uninstall <version>` | 删除指定版本 |
| `nvm version` | 查看 NVM 自身的版本号 |

## 修改 NPM 源

NPM 默认使用官方源，国内访问速度可能较慢，可切换为国内镜像源加速下载。

阿里镜像站：[https://npmmirror.com](https://npmmirror.com/)

### 查看当前源

```shell
npm config get registry
```

### 切换为阿里源

```bash
npm config set registry https://registry.npmmirror.com/
```

### 恢复官方源

```bash
npm config set registry https://registry.npmjs.org/
```

## NRM — NPM 源管理工具

**nrm**（NPM Registry Manager）是专门用于管理 NPM 源的工具，可以快速切换不同的镜像源，无需手动输入完整的源地址。

### 安装 nrm

```bash
npm install -g nrm
```

### 常用 nrm 命令

| 命令 | 说明 |
|---|---|
| `nrm ls` | 列出所有可用的 NPM 源 |
| `nrm use <registry-name>` | 切换到指定源，如 `nrm use taobao` |
| `nrm current` | 显示当前正在使用的源 |
| `nrm add <name> <url>` | 添加自定义源 |
| `nrm del <name>` | 删除指定源 |
| `nrm test <name>` | 测试指定源的响应速度 |
