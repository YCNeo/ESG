USE ESG_db;

CREATE TABLE IF NOT EXISTS `employees` (
  `EID` varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender` int NOT NULL check (gender=1 or gender=2),
  `email` varchar(255) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `nation` varchar(255) NOT NULL,
  PRIMARY KEY (`EID`),
  CONSTRAINT `check_email_format` CHECK (email REGEXP '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'),
  CONSTRAINT `check_phone_format` CHECK (phone REGEXP '^[0-9]+$')
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `users` (
  `UID` varchar(10) NOT NULL,
  `password` varchar(255) NOT NULL,
  `access` varchar(255) NOT NULL,
  PRIMARY KEY (`UID`),
  CONSTRAINT FOREIGN KEY (`UID`) REFERENCES `employees` (`EID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `employees` WRITE;
INSERT INTO `employees` VALUES (1,'Test1',1,'test1@mail.com','0911111111','TW');
INSERT INTO `employees` VALUES (2,'Test2',1,'test2@mail.com','0922222222','USA');
UNLOCK TABLES;

CREATE TABLE IF NOT EXISTS `projects` (
  `PID` varchar(10) NOT NULL,
  `pname` varchar(255) NOT NULL,
  `flow` varchar(255) NOT NULL,
  `UID` varchar(10) NOT NULL,
  PRIMARY KEY (`PID`),
  CONSTRAINT FOREIGN KEY (`UID`) REFERENCES `users` (`UID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `works_on` (
  `EID` varchar(10) NOT NULL,
  `PID` varchar(10) NOT NULL,
  `position` varchar(255) NOT NULL,
  PRIMARY KEY (EID, PID),
  CONSTRAINT FOREIGN KEY (`EID`) REFERENCES `employees` (`EID`),
  CONSTRAINT FOREIGN KEY (`PID`) REFERENCES `projects` (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `materials` (
  `MID` varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `amount` int NOT NULL,
  `unit` varchar(10) NOT NULL,
  `coefficient` float,
  `purchase_date` date NOT NULL,
  PRIMARY KEY (`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `equipments` (
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

CREATE TABLE IF NOT EXISTS `suppliers` (
  `SID` varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `nation` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`SID`),
  CONSTRAINT `check_sphone_format` CHECK (phone REGEXP '^[0-9]+$')
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `usage_e` (
  `PID` varchar(10) NOT NULL,
  `EQID` varchar(10) NOT NULL,
  PRIMARY KEY (EQID, PID),
  CONSTRAINT FOREIGN KEY (`PID`) REFERENCES `projects` (`PID`),
  CONSTRAINT FOREIGN KEY (`EQID`) REFERENCES `equipments` (`EQID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `usage_m` (
  `PID` varchar(10) NOT NULL,
  `MID` varchar(10) NOT NULL,
  PRIMARY KEY (MID, PID),
  CONSTRAINT FOREIGN KEY (`PID`) REFERENCES `projects` (`PID`),
  CONSTRAINT FOREIGN KEY (`MID`) REFERENCES `materials` (`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `supply_e` (
  `SID` varchar(10) NOT NULL,
  `EQID` varchar(10) NOT NULL,
  PRIMARY KEY (EQID, SID),
  CONSTRAINT FOREIGN KEY (`SID`) REFERENCES `suppliers` (`SID`),
  CONSTRAINT FOREIGN KEY (`EQID`) REFERENCES `equipments` (`EQID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `supply_m` (
  `SID` varchar(10) NOT NULL,
  `MID` varchar(10) NOT NULL,
  PRIMARY KEY (MID, SID),
  CONSTRAINT FOREIGN KEY (`SID`) REFERENCES `suppliers` (`SID`),
  CONSTRAINT FOREIGN KEY (`MID`) REFERENCES `materials` (`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
