# 微信授权登录

微信授权登录分为多种模式，常见的有 APP 授权登录、小程序登录、PC 网页扫码登录、微信内网页授权登录。本文介绍前端最常用的两种场景：**微信扫码登录**和**微信内部网页授权登录**。

## 微信扫码登录（PC 端）

此方式适用于 PC 端网页接入微信登录，用户使用微信"扫一扫"扫描页面上生成的二维码来完成授权。

**注意事项**：
- 必须使用手机当面扫码，不支持识别相册中保存的二维码图片。
- 需要在微信开放平台注册并申请**网站应用**，完成资质认证后方可使用。
- 扫码完成后，后端通过 `code` 换取用户的 `access_token` 和 `openid`，前端无需直接处理鉴权逻辑。

[官方文档 — 网站应用微信登录](https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html)

### 接入流程

1. 前端页面嵌入微信提供的 JS SDK，生成扫码二维码。
2. 用户扫码并在手机端确认授权。
3. 微信服务器回调预设的 `redirect_uri`，携带临时 `code` 参数。
4. 后端用 `code` 换取 `access_token`，再获取用户信息，完成登录。

## 微信内部网页授权登录（公众号 H5）

此方式适用于在**微信浏览器内**打开的 H5 页面，类似于小程序授权，用户点击同意后即可获取微信用户信息，无需扫码。

**注意事项**：
- 必须在微信公众平台配置授权回调域名。
- 分为**静默授权**（`snsapi_base`，只获取 `openid`，用户无感知）和**用户信息授权**（`snsapi_userinfo`，会弹出授权弹窗）两种 scope。
- 此接口仅在微信客户端内置浏览器中有效，普通浏览器无法使用。

[官方文档 — 微信网页授权](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)

### 接入流程

1. 引导用户访问微信 OAuth2 授权 URL，携带 `appid`、`redirect_uri`、`scope` 等参数。
2. 用户同意授权后，微信重定向到 `redirect_uri`，携带 `code` 参数。
3. 后端用 `code` 换取 `access_token` 和 `openid`，再获取用户信息，完成登录。
