/*
-- 创建数据库
*/
CREATE DATABASE `upload`;

/*
-- 使用数据库
*/
USE `upload`;

/*
-- 创建表
*/
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(200) NOT NULL UNIQUE,
  `password` varchar(200) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

/*
-- 插入数据
*/
INSERT INTO `users` (`id`,`username`,`password`,`name`,`email`) VALUES (1,'aaa','123',NULL,NULL);
INSERT INTO `users` (`id`,`username`,`password`,`name`,`email`) VALUES (2,'bbb','123',NULL,NULL);
