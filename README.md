# express-upload-dist-docker

express-upload-dist docker 镜像启动文件 docker-compose.yml 


#### 使用说明
docker-compose 启动应用
```
docker-compose up -d
```

docker-compose 删除应用
```
docker-compose down
```

删除应用同时删除所有 attached volumes  
（这样 `/docker-entrypoint-initdb.d` 里的 `.sql` 文件就可以再次被执行）
``` 
docker-compose down -v
```
#### 注意
1. 如果启动时 `docker-compose up -d` 出现 `mount path must be absolute` 错误，要全部 down 了，在启动就可以了。  
2. 如果登录时出现 `Connection lost: The server closed the connection.` 错误，说明数据库容器还没有完全启动，等待 10 秒左右即可。

#### 如何修改用户名密码（进入数据库 Docker 容器，使用 `mysql` 命令修改）
```
docker exec -it express-upload-dist-docker-compose_mariadb_1 bash
mysql -D upload -u root -p
// 输入 mariadb 容器设置的 root 密码
update users set password = '12345' where username = 'aaa';
```

#### 系统介绍
1. 默认初始登录用户名密码：`aaa` `123`、 `bbb` `123`。
1. 共使用了 3 个 Docker 容器：`应用程序 node 容器`、 `mariadb 容器`、 `redis 容器`。
2. 默认使用了 3 个端口：node 应用程序： `18080`、mariadb： `13306`、redis： `16379`。可以根据需要修改。详见 `配置说明`。
#### 目录结构
```
.
├── README.md  -------------------  [当前文件]
├── data  ------------------------  [数据目录]
│   ├── app  ---------------------  [应用程序 数据目录]
│   │   ├── certificate  ---------  [SSL证书目录]
│   │   │   ├── csr.pem  ---------  [证书请求]
│   │   │   ├── file.crt  --------  [SSL证书]
│   │   │   └── private.pem  -----  [SSL私钥]
│   │   ├── config.example.js  ---  [示例配置文件]
│   │   ├── config.js  -----------  [实际配置文件]
│   │   ├── smallimg  ------------  [略缩图目录]
│   │   └── upload  --------------  [上传文件保存目录]
│   └── db  ----------------------  [数据库 数据目录]
│       ├── initdb  --------------  [数据库容器初次启动执行 SQL 目录]
│       │   └── initfile.sql  ----  [数据库初始化 SQL]
│       └── mysql  ---------------  [数据库文件目录]
└── docker-compose.yml  ----------  [docker compose file]
```

#### 配置说明
|  配置名称   | 配置文件  | 修改位置  | 备注 |
|  ----  | ----  | ----  | ----  |
|  产品密钥  | data/app/config.js  |  设置 config.productKey  |   |
|  数据库密码  | data/app/config.js  |  config.db 里面的 password  |   |
| 应用程序端口  | docker-compose.yml | service app ports 的 80 映射端口 |   |
| 数据库端口  | docker-compose.yml | service mariadb ports 的 3306 映射端口 |   |
|   | data/app/config.js | 同时要修改 config.db 里面的 port |   |
| redis 端口  | docker-compose.yml | service redis ports 的 6379 映射端口 |   |
|   | data/app/config.js | 同时要修改 config.redis 里面的 port |   |
|  初始用户名密码   | data/db/initdb/initfile.sql  | "插入数据" 处，修改 aaa 123、bbb 123 为自己想要的用户名密码  |  请注意：须在 docker-compose up -d 前修改 |


