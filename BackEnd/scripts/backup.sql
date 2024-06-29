DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees` (
  `EID` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `nation` varchar(255) NOT NULL,
  PRIMARY KEY (`EID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `UID` int NOT NULL,
  `password` varchar(255) NOT NULL,
  `access` varchar(255) NOT NULL,
  PRIMARY KEY (`UID`)
  FOREIGN KEY (`UID`) REFERENCES `employees` (`EID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `employees` WRITE;
INSERT INTO `employees` VALUES (1,'Test1',1,'test1@mail.com','0911111111','TW');
INSERT INTO `employees` VALUES (2,'Test2',1,'test2@mail.com','0922222222','USA');
UNLOCK TABLES;
