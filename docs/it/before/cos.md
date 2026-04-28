# 前端腾讯云 COS 上传文件

**腾讯云 COS**（Cloud Object Storage，对象存储）是腾讯云提供的分布式存储服务，适合存储图片、视频、文档等静态资源。

## 前期准备

1. 申请开通 [腾讯云 COS](https://console.cloud.tencent.com/cos)，并创建一个存储桶（Bucket）。
2. 进入存储桶，找到 **安全管理 → 跨域访问 CORS 设置**，新建规则，来源 Origin 填写 `*`（或限定为你的域名），以允许前端跨域上传。
3. 在 [API 密钥管理](https://console.cloud.tencent.com/cam/capi) 中获取 `SecretId` 和 `SecretKey`。

> **安全提示**：在生产环境中，`SecretId` 和 `SecretKey` 不应直接硬编码在前端代码中，建议通过后端接口临时签发上传凭证（STS 临时密钥），以避免密钥泄露风险。

## 安装 SDK

```bash
npm install cos-js-sdk-v5 uuid
```

## React 项目示例

以下示例展示了在 React 项目中使用腾讯云 COS JS SDK 上传文件的基本用法：

```jsx
import React from 'react';
import COS from 'cos-js-sdk-v5';
import { v4 as uuidv4 } from 'uuid';

// 初始化 COS 实例
const cos = new COS({
  SecretId: 'YOUR_SECRET_ID',   // 替换为你的 SecretId
  SecretKey: 'YOUR_SECRET_KEY', // 替换为你的 SecretKey
});

const BUCKET = 'your-bucket-name-1258070316'; // 存储桶名称
const REGION = 'ap-chengdu';                  // 存储桶所在地域

export default function UploadDemo() {
  const inputRef = React.useRef();

  // 上传文件
  const uploadFile = () => {
    const file = inputRef.current.files[0];
    if (!file) return;

    // 生成唯一文件名，保留原始扩展名
    const ext = file.name.split('.').pop();
    const key = `images/${uuidv4()}.${ext}`;

    cos.putObject(
      {
        Bucket: BUCKET,  // 存储桶名称，必填
        Region: REGION,  // 存储桶地域，必填
        Key: key,        // 对象键（存储路径），必填
        Body: file,      // 上传的文件对象，必填
        onProgress: (progressData) => {
          console.log('上传进度：', Math.round(progressData.percent * 100) + '%');
        },
      },
      (err, data) => {
        if (err) {
          console.error('上传失败：', err);
          return;
        }

        // 上传成功后获取文件访问 URL
        cos.getObjectUrl(
          {
            Bucket: BUCKET,
            Region: REGION,
            Key: key,
            Expires: 3600, // URL 有效期，单位秒（1 小时）
          },
          (err, urlData) => {
            if (err) {
              console.error('获取 URL 失败：', err);
              return;
            }
            console.log('文件访问地址：', urlData.Url);
          }
        );
      }
    );
  };

  return (
    <div>
      <input type="file" ref={inputRef} onChange={uploadFile} />
    </div>
  );
}
```

## 说明

- `Bucket`：存储桶名称，格式为 `BucketName-APPID`，如 `my-bucket-1258070316`。
- `Region`：存储桶所在地域，如 `ap-chengdu`（成都）、`ap-guangzhou`（广州）。
- `Key`：对象在存储桶中的路径，相当于文件在桶内的"文件名"。
- 使用 `uuidv4()` 生成唯一文件名，可避免同名文件互相覆盖。
