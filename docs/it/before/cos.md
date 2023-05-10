# 前端腾讯云 OSS 上传文件

申请开通 [OSS](https://console.cloud.tencent.com/cos)，并创建一个储存桶。点击储存桶名词进入，找到安全管理，跨域访问设置，新建规则填写“\*”即可。

一下介绍 React 项目上传方法

```jsx
import React from 'react';
import COS from 'cos-js-sdk-v5';
const { v4: uuidv4 } = require('uuid');

export default function App() {
  const input = React.useRef();

  //新建oss对象
  const cos = new COS({
    SecretId: 'SecretId', //你的SecretId  https://console.cloud.tencent.com/cam/capi
    SecretKey: 'SecretKey', //你的SecretKey
  });

  //上次文件
  const uploadFile = () => {
    const file = input.current.files[0];
    const key = `/images/${uuidv4()}.${file.name.split('.').pop()}`; //文件目录及文件名称

    cos.putObject(
      {
        Bucket: 'blog-zengbin-1258070316', //填入您自己的存储桶，必须字段
        Region: 'ap-chengdu', //存储桶所在地域，必须字段
        Key: key, //存储在桶里的对象键，必须字段
        Body: file, //上传文件对象，必须字段
        onProgress: (progressData) => {
          console.log('上传进度', progressData);
        },
      },
      (err, data) => {
        if (err) return console.log('上传失败');

        console.log(data);

        cos.getObjectUrl(
          {
            Bucket: 'blog-zengbin-1258070316',
            Region: 'ap-chengdu',
            Key: key,
            Expires: 3600, // 过期时间为 1 小时
          },
          function (err, data) {
            console.log(data.Url); //访问地址
          }
        );
      }
    );
  };

  return (
    <div>
      <input type="file" ref={input} onChange={uploadFile} />
    </div>
  );
}
```
