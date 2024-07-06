CREATE DATABASE IF NOT EXISTS `company`;
USE `company`;

DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees` (
  `EID` varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `nation` varchar(255) NOT NULL,
  PRIMARY KEY (`EID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `UID` varchar(10) NOT NULL,
  `password` varchar(255) NOT NULL,
  `access` varchar(255) NOT NULL,
  PRIMARY KEY (`UID`)
  FOREIGN KEY (`UID`) REFERENCES `employees` (`EID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `employees` WRITE;
INSERT INTO `employees` VALUES (1,'Test1',1,'test1@mail.com','0911111111','TW');
INSERT INTO `employees` VALUES (2,'Test2',1,'test2@mail.com','0922222222','USA');
UNLOCK TABLES;

DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
  `PID` varchar(10) NOT NULL,
  `pname` varchar(255) NOT NULL,
  `flow` varchar(255) NOT NULL,
  `UID` varchar(10) NOT NULL,
  PRIMARY KEY (`PID`)
  FOREIGN KEY (`UID`) REFERENCES `users` (`UID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `works_on`;
CREATE TABLE `works_on` (
  `EID` varchar(10) NOT NULL,
  `PID` varchar(10) NOT NULL,
  `position` varchar(255) NOT NULL,
  PRIMARY KEY (`EID`)
  PRIMARY KEY (`PID`)
  FOREIGN KEY (`EID`) REFERENCES `employees` (`EID`)
  FOREIGN KEY (`PID`) REFERENCES `projects` (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `materials`;
CREATE TABLE `materials` (
  `MID` varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `amount` int NOT NULL,
  `unit` varchar(10) NOT NULL,
  `coefficient` float,
  `purchase_date` date NOT NULL,
  PRIMARY KEY (`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `equipments`;
CREATE TABLE `materials` (
  `EQID` varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `amount` int NOT NULL,
  `unit` varchar(10) NOT NULL,
  `coefficient` float,
  `purchase_date` date NOT NULL,
  `disposal_date` date NOT NULL,
  `age` int NOT NULL,
  PRIMARY KEY (`EQID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `suppliers`;
CREATE TABLE `materials` (
  `SID` varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `nation` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`SID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `usage_e`;
CREATE TABLE `materials` (
  `PID` varchar(10) NOT NULL,
  `EQID` varchar(10) NOT NULL,
  PRIMARY KEY (`PID`)
  PRIMARY KEY (`EQID`)
  FOREIGN KEY (`PID`) REFERENCES `projects` (`PID`)
  FOREIGN KEY (`EQID`) REFERENCES `equipments` (`EQID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `usage_m`;
CREATE TABLE `materials` (
  `PID` varchar(10) NOT NULL,
  `MID` varchar(10) NOT NULL,
  PRIMARY KEY (`PID`)
  PRIMARY KEY (`MID`)
  FOREIGN KEY (`PID`) REFERENCES `projects` (`PID`)
  FOREIGN KEY (`MID`) REFERENCES `materials` (`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `supply_e`;
CREATE TABLE `materials` (
  `SID` varchar(10) NOT NULL,
  `EQID` varchar(10) NOT NULL,
  PRIMARY KEY (`SID`)
  PRIMARY KEY (`EQID`)
  FOREIGN KEY (`SID`) REFERENCES `suppliers` (`SID`)
  FOREIGN KEY (`EQID`) REFERENCES `equipments` (`EQID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `supply_m`;
CREATE TABLE `materials` (
  `SID` varchar(10) NOT NULL,
  `MID` varchar(10) NOT NULL,
  PRIMARY KEY (`SID`)
  PRIMARY KEY (`MID`)
  FOREIGN KEY (`SID`) REFERENCES `suppliers` (`SID`)
  FOREIGN KEY (`MID`) REFERENCES `materials` (`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
