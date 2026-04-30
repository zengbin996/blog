# 修改 NPM 源

阿里镜像站地址：[https://npmmirror.com](https://npmmirror.com/)

## 修改 npm 源

### 1. 查看当前使用的源地址

```shell
npm config get registry
```

### 2. 切换为阿里源

```bash
npm config set registry https://registry.npmmirror.com/
```

### 3. 恢复官方源

```bash
npm config set registry https://registry.npmjs.org/
```

## 使用 nrm 管理多个源

**nrm**（NPM Registry Manager）是一个 npm 源管理工具，可以快速切换不同的 npm 镜像源。

官方仓库地址：[https://github.com/Pana/nrm](https://github.com/Pana/nrm)

### 安装 nrm

```bash
npm install -g nrm
```

### 查看可用源列表

```bash
nrm ls
```

输出示例：

```
* npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
```

### 切换源

```bash
nrm use taobao
```

## 修改 yarn 源

### 1. 查看当前使用的源地址

```bash
yarn config get registry
```

### 2. 切换为阿里源

```bash
yarn config set registry https://registry.npmmirror.com/
```

### 3. 恢复官方源

```bash
yarn config set registry https://registry.npmjs.org/
```
