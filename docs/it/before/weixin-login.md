# 微信授权登录

微信授权登录分为多种模式，常见的有 APP 授权登录、小程序登录、pc 网页扫码登录、微信内部授权登录。我们这里讲前端最常用的两种情况：微信扫码登录和微信内部授权登录。

## 微信扫码登录

这种情况一般用于 pc 端网页需要用到微信，使用微信扫一扫功能扫码二维码授权登录。请注意，这种方式方式所生成的二维码必须要使用手机当面扫码，不能识别相册图片这种方式。

[官方文档](https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html)

## 微信内部网页登录

这种方式类似于小程序，直接调起用户授权，用户同意即可。

[官方文档](https://docs.authing.cn/v2/guides/connections/social/wechat-mp/#%E5%9C%BA%E6%99%AF%E4%BB%8B%E7%BB%8D)
