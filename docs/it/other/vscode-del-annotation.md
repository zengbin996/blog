# VSCode 删除日志

VSCode 一键删除项目中的打印日志语句

按下 `ctrl + shift + f` 或 `ctrl + f` 打开搜索框，输入一下代码，注意需要打开正则匹配功能，一键替换为空字符即可

1. console.log()加了分号

```
console\.log\(.*?\);
```

2. console.log()没加分号

```
console\.log\(.*?\)
```
