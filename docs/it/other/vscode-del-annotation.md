# VSCode 删除日志

VSCode 一键删除项目中的打印日志语句

按下 `Ctrl + Shift + F`（全局搜索）或 `Ctrl + H`（当前文件替换）打开搜索/替换框，输入以下正则表达式，**开启正则匹配模式**，然后将替换框留空，一键替换即可删除所有 console.log 语句。

1. console.log()加了分号

```js
console\.log\(.*?\);
```

2. console.log()没加分号

```js
console\.log\(.*?\)
```
