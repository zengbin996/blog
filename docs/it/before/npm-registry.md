# 修改 NPM 源

阿里镜像站地址: [https://npmmirror.com](https://npmmirror.com/)

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

使用 `nrm`

```sh
$ npm install -g nrm

$ nrm ls

* npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/

$ nrm use cnpm  //switch registry to cnpm

    Registry has been set to: http://r.cnpmjs.org/

```

官网地址 [https://github.com/Pana/nrm](https://github.com/Pana/nrm)

### 修改 yarn 源

1. 查看当前使用的地址

```bash
yarn config get registry
```

2. 使用阿里源

```bash
yarn config set registry https://registry.npmmirror.com/
```

3. 恢复官方源

```bash
yarn config set registry https://registry.npmjs.org/
```
