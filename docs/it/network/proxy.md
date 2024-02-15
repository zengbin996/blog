# 常用开发软件设置本地代理方法

## git

设置代理

```bash
git config --global http.proxy socks5 127.0.0.1:10808
git config --global https.proxy socks5 127.0.0.1:10808
```

查看代理

```bash
git config --global --get http.proxy
git config --global --get https.proxy
```

删除代理

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## npm

1. 修改源地址

查看当前使用的地址

```bash
npm config get registry
```

使用阿里源

```bash
npm config set registry https://registry.npmmirror.com/
```

恢复官方源

```bash
npm config set registry https://registry.npmjs.org/
```

2. 设置代理

查看代理

```bash
npm config get proxy
npm config get https-proxy
```

设置代理

```bash
npm config set proxy socks5://127.0.0.1:10808
npm config set https-proxy socks5://127.0.0.1:10808
```

删除代理

```bash
npm config delete proxy
npm config delete https-proxy
```

## yarn

1. 修改源地址

查看当前使用的地址

```bash
yarn config get registry
```

使用阿里源

```bash
yarn config set registry https://registry.npmmirror.com/
```

恢复官方源

```bash
yarn config set registry https://registry.yarnpkg.com/
```
