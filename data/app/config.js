var config = {};

/*----- 产品密钥 -----*/
config.productKey = "xxxxxxxx";

config.db = {
    host: "mariadb", // docker-compose 内部 service 名可以作为 hostname
    port: 3306,
    user: "root",
    password: "wPzEy+vFQUlZpA",
    database: "upload",
    timezone: "+00:00" // 设置时区,这里的意思是 mysql 里面的时间戳是以什么时区保存的。所以填UTC时区
};

config.redis= {
    host: "redis", // docker-compose 内部 service 名可以作为 hostname
    port: 6379
};

config.web = {
    port: 80,
    sslPort: 443
}

config.app = {
    uploadMode: 'HOST', // 可以有 'HOST' 保存在当前服务器上， 'OSS' 先保存在当前服务器上，再上传到 OSS
    ossVendor: 'tencent-cos', // OSS 对象存储服务器提供商 'tencent-cos' 表示 腾讯云COS。如果uploadMode 为 HOST 则会忽略这条。
    sliceUpload: true, // 是否启用分片上传 true 或 false
    chunkSize: 1024 * 1024 * 190 , // 分片上传 chunk size (单位 Byte)
                                   //   腾讯云CDN POST size 最大值是 200M。
                                   //   注意！他200M 不能顶着 200M 设置，还有http header 那些加上纯文件200M就超了。
    chunkUploadMaxTasks: 3, // 分片上传最多同时几个任务并行执行（不影响每个完整的文件上传顺序，只适用于分片的上传任务） TODO：还没实现
    hashChunkSize: 2097152, // 计算 md5 每次分片的大小。2097152 即 1024 * 1024 * 2  2MB
    quicHashSize: 1024 * 1024 * 5, // 当文件大于这个尺寸时，使用快速 MD5 算法（只计算头尾两个分片的 hash）
}

// 腾讯云 COS 配置
config.cos = {
    SecretId: 'xxxxxxxxx',        // 腾讯云API SecretId 。在这里可以找到：https://console.cloud.tencent.com/cam/capi
    SecretKey: 'xxxxxxxxx',       // 腾讯云API SecretKey
    Bucket: 'xxx-xxxxxxx',        // Bucket 格式：test-1250000000
    Region: 'ap-xxxxxxx',         // 所在区域
    LocalFolderBucketFolderMap: { // 本地文件夹名对应的 OSS 对象存储桶上的文件夹名
        upload: 'upload',
        smallimg: 'smallimg'
    }
}

module.exports = config;
