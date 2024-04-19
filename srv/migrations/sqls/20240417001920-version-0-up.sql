CREATE TABLE `info_excludes` (
  `ExcludesInfoId` int NOT NULL,
  `ExcludesHTML` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`ExcludesInfoId`)
);

CREATE TABLE `info_includes` (
  `IncludesInfoId` int NOT NULL,
  `IncludesHTML` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`IncludesInfoId`)
);

CREATE TABLE `info_process` (
  `ProcessInfoId` int NOT NULL,
  `ProcessHTML` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`ProcessInfoId`)
);

CREATE TABLE `catalog` (
  `CatalogId` varchar(20) NOT NULL,
  `Manufacturer` varchar(50) NOT NULL,
  `Model` varchar(50) NOT NULL,
  `Year` varchar(50) NOT NULL,
  `Shift` enum('Floor','Column') NOT NULL,
  `Transmission` enum('Manual','Automatic') NOT NULL,
  `Tilt` enum('Tilt','Fixed') NOT NULL,
  `AdditionalOptions` varchar(100) DEFAULT NULL,
  `ImagePath` varchar(50) DEFAULT NULL,
  `Price` int DEFAULT NULL,
  `CoreCharge` int DEFAULT NULL,
  `ExcludesInfoId` int DEFAULT NULL,
  `IncludesInfoId` int DEFAULT NULL,
  `ProcessInfoId` int DEFAULT NULL,
  PRIMARY KEY (`CatalogId`),
  KEY `ExcludesInfoId_idx` (`ExcludesInfoId`),
  KEY `ProcessInfoId_idx` (`ProcessInfoId`),
  KEY `IncludesInfoId_idx` (`IncludesInfoId`),
  CONSTRAINT `ExcludesInfoId` FOREIGN KEY (`ExcludesInfoId`) REFERENCES `info_excludes` (`ExcludesInfoId`),
  CONSTRAINT `IncludesInfoId` FOREIGN KEY (`IncludesInfoId`) REFERENCES `info_includes` (`IncludesInfoId`),
  CONSTRAINT `ProcessInfoId` FOREIGN KEY (`ProcessInfoId`) REFERENCES `info_process` (`ProcessInfoId`)
);