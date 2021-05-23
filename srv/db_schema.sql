-- MySQL dump 10.13  Distrib 8.0.20, for macos10.15 (x86_64)
--
-- Host: steeringcolumnsgalore.com    Database: steering_columnsg
-- ------------------------------------------------------
-- Server version	5.7.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `catalog`
--

DROP TABLE IF EXISTS `catalog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
  `Price` int(11) DEFAULT NULL,
  `CoreCharge` int(11) DEFAULT NULL,
  `ExcludesInfoId` int(11) DEFAULT NULL,
  `IncludesInfoId` int(11) DEFAULT NULL,
  `ProcessInfoId` int(11) DEFAULT NULL,
  PRIMARY KEY (`CatalogId`),
  KEY `ExcludesInfoId_idx` (`ExcludesInfoId`),
  KEY `ProcessInfoId_idx` (`ProcessInfoId`),
  KEY `IncludesInfoId_idx` (`IncludesInfoId`),
  CONSTRAINT `ExcludesInfoId` FOREIGN KEY (`ExcludesInfoId`) REFERENCES `info_excludes` (`ExcludesInfoId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `IncludesInfoId` FOREIGN KEY (`IncludesInfoId`) REFERENCES `info_includes` (`IncludesInfoId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `ProcessInfoId` FOREIGN KEY (`ProcessInfoId`) REFERENCES `info_process` (`ProcessInfoId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalog`
--

LOCK TABLES `catalog` WRITE;
/*!40000 ALTER TABLE `catalog` DISABLE KEYS */;
INSERT INTO `catalog` VALUES ('SCG1138A','Chevy & GMC Trucks','Pick Up Truck','84-87','Column','Automatic','Tilt','Delay Wipers','/images/SCG1138A.jpg',475,250,8,2,1),('SCG1387','Jeep','Wrangler & YJ','86-93','Column','Automatic','Tilt',NULL,'/images/SCG1387.jpg',475,250,9,1,1),('SCG1391','Jeep','Wrangler & YJ','86-93','Floor','Manual','Tilt',NULL,'/images/SCG1391.jpg',475,250,10,1,1),('SCG1472A','Chevy & GMC Trucks','Pick Up Truck','88-91','Column','Automatic','Tilt','Delay Wipers','/images/SCG1472A.JPG',475,250,8,2,1),('SCG1964','Jeep','Wrangler & YJ','94-95','Column','Automatic','Tilt',NULL,'/images/SCG1964.jpg',475,250,9,1,1),('SCG1965','Jeep','Wrangler & YJ','94-95','Floor','Manual','Tilt',NULL,'/images/SCG1965.jpg',475,250,10,1,1),('SCG2086A','Chevy & GMC Trucks','Pick Up Truck','92-93','Column','Automatic','Tilt','Delay Wipers','/images/SCG1472A.JPG',475,250,8,2,1),('SCG2086B','Chevy & GMC Trucks','Pick Up Truck','94','Column','Automatic','Tilt','Delay Wipers','/images/SCG1472A.JPG',475,250,8,2,1),('SCG236','Chevy & GMC Trucks','Pick Up Truck','73-74','Column','Automatic','Fixed',NULL,'/images/SCG642.jpg',475,250,7,1,1),('SCG237','Chevy & GMC Trucks','Pick Up Truck','73-74','Column','Automatic','Tilt',NULL,'/images/SCG642.jpg',475,250,6,1,1),('SCG289','Chevy & GMC Trucks','Pick Up Truck','75-76','Column','Automatic','Tilt',NULL,'/images/SCG642.jpg',475,250,6,1,1),('SCG290','Chevy & GMC Trucks','Pick Up Truck','75-76','Column','Automatic','Fixed',NULL,'/images/SCG642.jpg',475,250,7,1,1),('SCG339','Chevy & GMC Trucks','Pick Up Truck','77','Column','Automatic','Tilt',NULL,'/images/SCG642.jpg',475,250,6,1,1),('SCG340','Chevy & GMC Trucks','Pick Up Truck','77','Column','Automatic','Fixed',NULL,'/images/SCG642.jpg',475,250,7,1,1),('SCG375','Chevy & GMC Trucks','Pick Up Truck','78','Column','Automatic','Tilt',NULL,'/images/SCG642.jpg',475,250,6,1,1),('SCG376','Chevy & GMC Trucks','Pick Up Truck','78','Column','Automatic','Fixed',NULL,'/images/SCG642.jpg',475,250,7,1,1),('SCG540','Jeep','CJ Series (Includes Scrambler)','77-86','Floor','Manual','Fixed',NULL,'/images/SCG540.jpg',475,400,2,1,1),('SCG540A','Jeep','CJ Series (Includes Scrambler)','76','Floor','Manual','Fixed',NULL,'/images/SCG540.jpg',475,400,2,1,1),('SCG542AC','Jeep','CJ Series (Includes Scrambler)','76','Column','Automatic','Tilt','Transmission Linkage Lever is Curved','/images/SCG542.jpg',475,400,3,1,1),('SCG542AS','Jeep','CJ Series (Includes Scrambler)','76','Column','Automatic','Tilt','Transmission Linkage Lever is Straight','/images/SCG542.jpg',475,400,3,1,1),('SCG542C','Jeep','CJ Series (Includes Scrambler)','77-86','Column','Automatic','Tilt','Transmission Linkage Lever is Curved','/images/SCG542.jpg',475,400,3,1,1),('SCG542S','Jeep','CJ Series (Includes Scrambler)','77-86','Column','Automatic','Tilt','Transmission Linkage Lever is Straight','/images/SCG542.jpg',475,400,3,1,1),('SCG543AC','Jeep','CJ Series (Includes Scrambler)','76','Column','Automatic','Fixed','Transmission Linkage Lever is Curved','/images/SCG542.jpg',475,400,6,1,1),('SCG543AS','Jeep','CJ Series (Includes Scrambler)','76','Column','Automatic','Fixed','Transmission Linkage Lever is Straight','/images/SCG542.jpg',475,400,6,1,1),('SCG543C','Jeep','CJ Series (Includes Scrambler)','77-86','Column','Automatic','Fixed','Transmission Linkage Lever is Curved','/images/SCG542.jpg',475,400,6,1,1),('SCG543S','Jeep','CJ Series (Includes Scrambler)','77-86','Column','Automatic','Fixed','Transmission Linkage Lever is Straight','/images/SCG542.jpg',475,400,6,1,1),('SCG544','Jeep','CJ Series (Includes Scrambler)','77-86','Floor','Manual','Tilt',NULL,'/images/SCG544.jpg',475,400,4,1,1),('SCG544A','Jeep','CJ Series (Includes Scrambler)','76','Floor','Manual','Tilt',NULL,'/images/SCG544.jpg',475,400,4,1,1),('SCG642','Chevy & GMC Trucks','Pick Up Truck','79-83','Column','Automatic','Tilt',NULL,'/images/SCG642.jpg',475,250,6,1,1),('SCG643','Chevy & GMC Trucks','Pick Up Truck','79-83','Column','Automatic','Fixed',NULL,'/images/SCG642.jpg',475,250,7,1,1),('SCGP3091','Chevy & GMC Trucks','P30 Step Van, Workhorse','91-93','Column','Automatic','Tilt',NULL,'/images/SCGP3091.jpg',875,350,9,1,1),('SCGP3091MH','Chevy & GMC Trucks','P30 Motor Home','91-93','Column','Automatic','Tilt',NULL,'/images/SCGP3091MH.jpg',875,350,9,1,1),('SCGP3094','Chevy & GMC Trucks','P30 Step Van, Workhorse','02-05','Column','Automatic','Tilt','2 Speed Wipers','/images/SCGP3091.jpg',875,350,9,1,1),('SCGP3094D','Chevy & GMC Trucks','P30 Step Van, Workhorse','02-05','Column','Automatic','Tilt','Delay Wipers','/images/SCGP3091.jpg',875,350,9,1,1);
/*!40000 ALTER TABLE `catalog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `info_excludes`
--

DROP TABLE IF EXISTS `info_excludes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `info_excludes` (
  `ExcludesInfoId` int(11) NOT NULL,
  `ExcludesHTML` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`ExcludesInfoId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info_excludes`
--

LOCK TABLES `info_excludes` WRITE;
/*!40000 ALTER TABLE `info_excludes` DISABLE KEYS */;
INSERT INTO `info_excludes` VALUES (1,'<p>Steering wheel, signal lever, tilt lever and hazard button, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(2,'<p>Steering wheel, signal lever, hazard button, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(3,'<p>Steering wheel, signal lever, tilt lever, shift lever, hazard button, reverse light switch, transmission indicator and pointer, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(4,'<p>Steering wheel, signal lever, tilt lever and hazard button, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(5,'<p>Steering wheel, signal lever, tilt lever, shift lever, hazard button, reverse light switch, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(6,'<p>Steering wheel, signal lever, shift lever, hazard button, reverse light switch, transmission indicator, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(7,'<p>Steering wheel, signal lever, shift lever, hazard button, reverse light switch, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(8,'<p>Steering wheel, tilt lever, shift lever, hazard button, reverse light switch, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(9,'<p>Steering wheel, signal/wiper lever, tilt lever, shift lever, hazard button, reverse light switch, transmission indicator and pointer, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(10,'<p>Steering wheel, signal/wiper lever, tilt lever, hazard button, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>');
/*!40000 ALTER TABLE `info_excludes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `info_includes`
--

DROP TABLE IF EXISTS `info_includes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `info_includes` (
  `IncludesInfoId` int(11) NOT NULL,
  `IncludesHTML` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`IncludesInfoId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info_includes`
--

LOCK TABLES `info_includes` WRITE;
/*!40000 ALTER TABLE `info_includes` DISABLE KEYS */;
INSERT INTO `info_includes` VALUES (1,'<p>New signal switch, new ignition switch and a new lock with 2 keys.</p>'),(2,'<p>New signal switch, new ignition switch and a new lock with 2 keys, new cruise control lever if equiped with cruise control.</p>'),(3,'<p>New signal switch, new ignition switch and a new lock with 2 keys.</p>'),(4,'<p>Multifunction switch, ignition switch, new lock with 2 keys, plastic covers and new upper bearings</p>'),(5,'<p>Both multifunction switches, ignition switch, new lock with 2 keys, plastic covers and new upper bearings.</p>'),(6,'<p>Column assembly, both multifunction switches, ignition switch.</p>\''),(7,'<p>New signal switch, new bearings.</p>');
/*!40000 ALTER TABLE `info_includes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `info_process`
--

DROP TABLE IF EXISTS `info_process`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `info_process` (
  `ProcessInfoId` int(11) NOT NULL,
  `ProcessHTML` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`ProcessInfoId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info_process`
--

LOCK TABLES `info_process` WRITE;
/*!40000 ALTER TABLE `info_process` DISABLE KEYS */;
INSERT INTO `info_process` VALUES (1,'<p>Complete disassembly, sand blast to remove rust & paint, clean and degrease, inspect components, repack or replace bearings, grease moving parts, replace broken & worn parts, twelve point test, paint to match interior.</p>');
/*!40000 ALTER TABLE `info_process` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-23 16:50:14
