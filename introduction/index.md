# 上传-分享 upload & share
 图片、视频、任意文件上传分享系统
 
### 这个有什么用？
1. 有没有遇见过：老板让你传一个 `apk` 文件（安卓 APP 安装包）给客户，但是微信却强行把你的文件改名，后面加上 `.1`。就像这样：`MyApp.apk` --》`MyApp.apk.1`。结果就是客户打不开这个文件安装不了APP，他也不懂怎么去重命名文件。老板问怎么你发的手机 APP 安装文件没用？
2. 想要给女朋友微信传一个视频，但是微信提示这个视频不能超过 100M 或者不能超过 2分钟。即使在限制内可以传，画质却被大大压缩，模糊没法看。（macOS QuickTime 屏幕录像的视频，会被微信压缩的很模糊）。
3. 有没有遇到 UI 设计师给你发一张图，总是担心图片被微信压缩，不是原图了。（微信会压缩图片，除非打包到压缩包，否则无法传原图）
4. 是否受不了微信每次只能传 9 张图片的限制？
5. 是否受不了微信传文件最大 200M 的限制？
6. 论坛发帖想要外链图片。
7. 想要在手机、电脑、Mac、Linux电脑间互传文件。
 
### 有什么优势？
1. 简单、直观。只有需要的功能。  
    一个 `上传` 按钮、一个 `文件列表` 按钮、像手机相册一样的滑屏预览图片、视频功能、用户登录功能。没了。
2. 比图床多了视频、任意文件上传分享的功能。  
    已有的开源图床工具清单：`ZPan`、  `Cloudreve`、 `Chevereto`、 `SM.MS`、`兰空图床 Lsky.pro`
3. 比网盘工具简单，容易配置。默认可以显示视频略缩图，`NextCloud`、`OwnCloud` 不能显示视频略缩图，还有最大上传文件大小 200M 限制。配置起来繁琐。（我就是，一直没找到怎么配置，照网上说的也没有 work）  
    已有的开源网盘工具清单：、`NextCloud`、`OwnCloud`、`Seafile`、`MinIO`
4. 比国内互联网网盘、图床优势：可以获取图片、视频直连链接，可外链，直接在手机微信里看视频，不用买超级会员，不会被限速，不会因合规问题文件被删除。  
    比海外互联网服务的优势：你分享的人不用上外网。  
    已有的互联网图床、网盘服务：`imgur`、 `OneDrive`、 `Google Drive`、 `Google Photos`、`百度网盘`、 `阿里云盘`
5. 使用 `docker-compose` 文件发布，一个 `docker-compose up` 命令完成安装。
6. 手机、电脑浏览器都可以使用。

### 你需要付出
只要 9.9 包邮，获得永久使用权。  
注：每个产品密钥 9.9 元。（产品密钥验证采用纯离线形式验证，不连接远程在线服务器来注册，确保安全，以及内网离线可用。防君子不防...）
 
### 功能介绍
1. 上传功能（上传单个或多个文件，分片上传，断点续传，秒传）
2. 文件列表查看功能
3. 文件删除功能
4. 图片、视频显示略缩图功能，其他格式文件略缩图显示为一个空白的纯色块。
5. 可以像手机相册那样滑屏预览图片和播放视频。
6. 用户登录功能。用户名密码可以自己修改，用户个数默认是 2 个，可以自由添加。（注：不同用户登录后看到的文件是一样的，此处不同用户密码只起到一个自己密码不被别人知道的作用，上传的文件不会用户隔离。）

### 配置文件
可通过配置文件 `config.js` ,进行以下设置（位置 `data/app/config.js`  ）：  
1. 可设置是否启用分片上传（注：启用分片上传可规避 CDN 服务商最大 POST 大小限制问题，比如腾讯云的CDN 限制最大POST尺寸 200M）。上传分片大小也可设置。
2. 可设置是否使用 OSS 对象存储服务（自己服务器和 OSS 上都保存），或者只保存文件到自己的服务器上。对象存储服务目前支持了 `腾讯云 COS`，有需要可以持续添加。
3. 配置文件详细信息请参考： `data/app/config.example.js` 

### 效果预览图
登录页：
![登录页](https://cdn.jsdelivr.net/gh/luobin100/gofly@main/%E7%99%BB%E5%BD%95%E9%A1%B5.png)
  
主页：
![主页](https://cdn.jsdelivr.net/gh/luobin100/gofly@main/%E4%B8%BB%E9%A1%B5.png)
  
上传成功（图片或视频会显示略缩图，其他文件格式只展示公开链接）：
![上传成功](https://cdn.jsdelivr.net/gh/luobin100/gofly@main/%E4%B8%8A%E4%BC%A0%E6%88%90%E5%8A%9F.png)
  
文件列表
![文件列表](https://cdn.jsdelivr.net/gh/luobin100/gofly@main/%E6%96%87%E4%BB%B6%E5%88%97%E8%A1%A8.png)
  
滑屏预览
![滑屏预览](https://cdn.jsdelivr.net/gh/luobin100/gofly@main/%E6%BB%91%E5%B1%8F%E9%A2%84%E8%A7%88720ptake2%20(3).gif)
  
### 视频操作演示
https://youtu.be/xbtRok0olg4

### 如何获得？
1. 下载系统程序文件（腾讯 coding 代码仓库）：[https://luo001.coding.net/p/upload_and_share/d/express-upload-dist-docker-compose-prod/git/archive/master/?download=true](https://luo001.coding.net/p/upload_and_share/d/express-upload-dist-docker-compose-prod/git/archive/master/?download=true)
2. 支付宝扫描下方二维码支付后，请在支付宝的 `账单` --》找到这一笔交易 --》 `联系收款方` 处联系我，获取产品密钥。
![付款码](https://cdn.jsdelivr.net/gh/luobin100/gofly@main/qrcode-alipay.png)
3. 把产品密钥填写到 `data/app/config.js` 里面即可。

### 系统详细使用说明
进一步详细系统说明请参考 `README.md` 文件。

### 推广
欢迎通过我的腾讯云推广链接购买服务器，非常感谢。  

[【腾讯云】云产品限时秒杀，爆款2核4G云服务器首年74元](https://cloud.tencent.com/act/cps/redirect?redirect=1077&cps_key=f4cb43a82f11256f5667ccb165f14ec4&from=console)

目前个人使用的就是这一款腾讯云服务器： 2核4G 8M带宽 的轻量云服务器。74 一年。  

![腾讯轻量云](https://cdn.jsdelivr.net/gh/luobin100/gofly@main/%E8%85%BE%E8%AE%AF%E4%BA%91%E8%BD%BB%E9%87%8F.png)

PS：另外如果有免费额度的话，搭配腾讯云自家的 COS、CDN，组建 `CDN --》 COS --》 轻量云 ` 结构，可体验跑满带宽的用户体验。  
由于腾讯云通过内网 IP 访问，相同区域是不消耗流量的，所以腾讯轻量云内网向 COS 对象存储服务上传是免流量的。CDN 向 COS 的回源流量还是会消耗的。

通过我的推广链接购买成功的用户，将可获得以下免费咨询服务：
1. 腾讯云 CDN 回源设置。
2. COS 内网访问链接设置，存储桶设置。
3. 如何域名备案、域名解析设置。
4. 如何 Nginx 二级域名反向代理设置。（比如你的域名为 `mydomain.com`，可将 `us.mydomain.com` 指向你的 `Upload & Share` 上传分享应用）
5. Nginx HTTPS 证书设置。（有域名和 https，微信里打开分享链接就不会提示不安全，不用再点一次确认按钮。）
6. 安装 docker、docker-compose。