-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: public-vultr-prod-3652be11-3bae-440f-a0d1-2a3a32ea3d7f-vultr-pr.vultrdb.com    Database: steering_columnsg
-- ------------------------------------------------------
-- Server version	8.0.30

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '20e5a20e-fc3b-11ee-96a1-560004dda858:1-64,
809667d6-fdc2-11ee-a142-560004de8d44:1-113';

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalog`
--

LOCK TABLES `catalog` WRITE;
/*!40000 ALTER TABLE `catalog` DISABLE KEYS */;
INSERT INTO `catalog` VALUES ('SCG1092A','Chevrolet Cars','Camaro','84-88','Floor','Automatic','Tilt','Delay Wipers','/images/SCG1092A.JPG',575,400,10,2,1),('SCG1127A-Buick','Buick','Regal','84-88','Floor','Automatic','Tilt','Delay Wipers','/images/SCG1127A.jpg',575,350,1,2,1),('SCG1127A-Chevy','Chevrolet Cars','Monte Carlo','84-88','Floor','Automatic','Tilt','Delay Wipers','/images/SCG1127A.jpg',575,350,1,2,1),('SCG1127A-Olds','Oldsmobile','Cutlass Supreme','84-88','Floor','Automatic','Tilt','Delay Wipers','/images/SCG1127A.jpg',575,350,1,2,1),('SCG1127A-Pontiac','Pontiac','Grand Prix','84-88','Floor','Automatic','Tilt','Delay Wipers, Without Cornering Lights','/images/SCG1127A.jpg',575,350,1,2,1),('SCG1127B-Buick','Buick','Regal','84-88','Floor','Automatic','Tilt','Delay Wipers, With Cornering Lights','/images/SCG1127A.jpg',575,350,1,2,1),('SCG1127B-Pontiac','Pontiac','Grand Prix','84-88','Floor','Automatic','Tilt','Delay Wipers, With Cornering Lights','/images/SCG1127A.jpg',575,350,1,2,1),('SCG1127C-Buick','Buick','Regal','84-88','Floor','Automatic','Tilt','2 Speed Wipers','/images/SCG1127A.jpg',575,350,1,2,1),('SCG1127C-Chevy','Chevrolet Cars','Monte Carlo','84-88','Floor','Automatic','Tilt','2 Speed Wipers','/images/SCG1127A.jpg',575,350,1,2,1),('SCG1127C-Olds','Oldsmobile','Cutlass Supreme','84-88','Floor','Automatic','Tilt','2 Speed Wipers','/images/SCG1127A.jpg',575,350,1,2,1),('SCG1127C-Pontiac','Pontiac','Grand Prix','84-88','Floor','Automatic','Tilt','2 Speed Wipers','/images/SCG1127A.jpg',575,350,1,2,1),('SCG1127D-Buick','Buick','Regal','84-88','Floor','Automatic','Fixed','2 Speed Wipers','/images/SCG1127A.jpg',575,350,12,2,1),('SCG1127D-Chevy','Chevrolet Cars','Monte Carlo','84-88','Floor','Automatic','Fixed','2 Speed Wipers','/images/SCG1127A.jpg',575,350,12,2,1),('SCG1127D-Olds','Oldsmobile','Cutlass Supreme','84-88','Floor','Automatic','Fixed','2 Speed Wipers','/images/SCG1127A.jpg',575,350,12,2,1),('SCG1127D-Pontiac','Pontiac','Grand Prix','84-88','Floor','Automatic','Fixed','2 Speed Wipers','/images/SCG1127A.jpg',575,350,12,2,1),('SCG1129A-Buick','Buick','Regal','84-88','Column','Automatic','Tilt','Delay Wipers, With Cornering Lights','/images/SCG1129A.jpg',575,350,5,2,1),('SCG1129A-Chevy','Chevrolet Cars','Monte Carlo','84-88','Column','Automatic','Tilt','Delay Wipers, With Cornering Lights','/images/SCG1129A.jpg',575,350,5,2,1),('SCG1129A-Olds','Oldsmobile','Cutlass Supreme','84-88','Column','Automatic','Tilt','Delay Wipers, With Cornering Lights','/images/SCG1129A.jpg',575,350,5,2,1),('SCG1129A-Pontiac','Pontiac','Grand Prix','84-88','Column','Automatic','Tilt','Delay Wipers, With Cornering Lights','/images/SCG1129A.jpg',575,350,5,2,1),('SCG1129B-Buick','Buick','Regal','84-88','Column','Automatic','Tilt','Delay Wipers, Without Cornering Lights','/images/SCG1129A.jpg',575,350,5,2,1),('SCG1129B-Chevy','Chevrolet Cars','Monte Carlo','84-88','Column','Automatic','Tilt','Delay Wipers, Without Cornering Lights','/images/SCG1129A.jpg',575,350,5,2,1),('SCG1129B-Olds','Oldsmobile','Cutlass Supreme','84-88','Column','Automatic','Tilt','Delay Wipers, Without Cornering Lights','/images/SCG1129A.jpg',575,350,5,2,1),('SCG1129B-Pontiac','Pontiac','Grand Prix','84-88','Column','Automatic','Tilt','Delay Wipers, Without Cornering Lights','/images/SCG1129A.jpg',575,350,5,2,1),('SCG1129C-Buick','Buick','Regal','84-88','Column','Automatic','Tilt','2 Speed Wipers, Without Cornering lights','/images/SCG1129A.jpg',575,350,5,2,1),('SCG1129C-Chevy','Chevrolet Cars','Monte Carlo','84-88','Column','Automatic','Tilt','2 Speed Wipers, Without Cornering lights','/images/SCG1129A.jpg',575,350,5,2,1),('SCG1129C-Olds','Oldsmobile','Cutlass Supreme','84-88','Column','Automatic','Tilt','2 Speed Wipers, Without Cornering lights','/images/SCG1129A.jpg',575,350,5,2,1),('SCG1129C-Pontiac','Pontiac','Grand Prix','84-88','Column','Automatic','Tilt','2 Speed Wipers, Without Cornering lights','/images/SCG1129A.jpg',575,350,5,2,1),('SCG1129D-Buick','Buick','Regal','84-88','Column','Automatic','Tilt','2 Speed Wipers, With Cornering lights','/images/SCG1129A.jpg',575,350,5,2,1),('SCG1129D-Chevy','Chevrolet Cars','Monte Carlo','84-88','Column','Automatic','Tilt','2 Speed Wipers, With Cornering lights','/images/SCG1129A.jpg',575,350,5,2,1),('SCG1129D-Olds','Oldsmobile','Cutlass Supreme','84-88','Column','Automatic','Tilt','2 Speed Wipers, With Cornering lights','/images/SCG1129A.jpg',575,350,5,2,1),('SCG1129E-Buick','Buick','Regal','84-88','Column','Automatic','Fixed','Delay Wipers, With Cornering Lights','/images/SCG1129A.jpg',575,350,17,2,1),('SCG1129E-Chevy','Chevrolet Cars','Monte Carlo','84-88','Column','Automatic','Fixed','Delay Wipers, With Cornering Lights','/images/SCG1129A.jpg',575,350,17,2,1),('SCG1129E-Olds','Oldsmobile','Cutlass Supreme','84-88','Column','Automatic','Fixed','Delay Wipers, With Cornering Lights','/images/SCG1129A.jpg',575,350,17,2,1),('SCG1129F-Buick','Buick','Regal','84-88','Column','Automatic','Fixed','Delay Wipers, Without Cornering Lights','/images/SCG1129A.jpg',575,350,17,2,1),('SCG1129F-Chevy','Chevrolet Cars','Monte Carlo','84-88','Column','Automatic','Fixed','Delay Wipers, Without Cornering Lights','/images/SCG1129A.jpg',575,350,17,2,1),('SCG1129F-Olds','Oldsmobile','Cutlass Supreme','84-88','Column','Automatic','Fixed','Delay Wipers, Without Cornering Lights','/images/SCG1129A.jpg',575,350,17,2,1),('SCG1129G-Buick','Buick','Regal','84-88','Column','Automatic','Fixed','2 Speed Wipers, With Cornering Lights','/images/SCG1129A.jpg',575,350,17,2,1),('SCG1129G-Chevy','Chevrolet Cars','Monte Carlo','84-88','Column','Automatic','Fixed','2 Speed Wipers, With Cornering Lights','/images/SCG1129A.jpg',575,350,17,2,1),('SCG1129G-Olds','Oldsmobile','Cutlass Supreme','84-88','Column','Automatic','Fixed','2 Speed Wipers, With Cornering Lights','/images/SCG1129A.jpg',575,350,17,2,1),('SCG1129H-Buick','Buick','Regal','84-88','Column','Automatic','Fixed','2 Speed Wipers, Without Cornering Lights','/images/SCG1129A.jpg',575,350,17,2,1),('SCG1129H-Chevy','Chevrolet Cars','Monte Carlo','84-88','Column','Automatic','Fixed','2 Speed Wipers, Without Cornering Lights','/images/SCG1129A.jpg',575,350,17,2,1),('SCG1129H-Olds','Oldsmobile','Cutlass Supreme','84-88','Column','Automatic','Fixed','2 Speed Wipers, Without Cornering Lights','/images/SCG1129A.jpg',575,350,17,2,1),('SCG1129H-Pontiac','Pontiac','Grand Prix','84-88','Column','Automatic','Fixed','2 Speed Wipers, Without Cornering Lights','/images/SCG1129A.jpg',575,350,17,2,1),('SCG1138A','Chevy & GMC Trucks','Full Size Pick Up Truck, C and K Series','84-87','Column','Automatic','Tilt','Delay Wipers','/images/SCG1138A.jpg',575,350,5,2,1),('SCG1147A','Chevy & GMC Vans','G Series Vans, Vandura','84-91','Column','Automatic','Tilt','Delay Wipers, Without Overdrive','/images/SCG1147A.JPG',525,350,15,2,1),('SCG1147B','Chevy & GMC Vans','G Series Vans, Vandura','84-91','Column','Automatic','Tilt','2 Speed Wipers, Without Overdrive','/images/SCG1147A.JPG',525,350,15,2,1),('SCG1147C','Chevy & GMC Vans','G Series Vans, Vandura','84-91','Column','Automatic','Fixed','Delay Wipers, Without Overdrive','/images/SCG1147A.JPG',525,350,16,2,1),('SCG1147D','Chevy & GMC Vans','G Series Vans, Vandura','84-91','Column','Automatic','Fixed','2 Speed Wipers, Without Overdrive','/images/SCG1147A.JPG',525,350,16,2,1),('SCG1147E','Chevy & GMC Vans','G Series Vans, Vandura','84-91','Column','Automatic','Tilt','Delay Wipers, With Overdrive','/images/SCG1147A.JPG',525,350,15,2,1),('SCG1147F','Chevy & GMC Vans','G Series Vans, Vandura','84-91','Column','Automatic','Tilt','2 Speed Wipers, With Overdrive','/images/SCG1147A.JPG',525,350,15,2,1),('SCG1147G','Chevy & GMC Vans','G Series Vans, Vandura','84-91','Column','Automatic','Fixed','Delay Wipers, With Overdrive','/images/SCG1147A.JPG',525,350,16,2,1),('SCG1147H','Chevy & GMC Vans','G Series Vans, Vandura','84-91','Column','Automatic','Fixed','2 Speed Wipers, With Overdrive','/images/SCG1147A.JPG',525,350,16,2,1),('SCG119','Chevrolet Cars','Chevelle','69-72','Column','Automatic','Tilt',NULL,'/images/SCG119.jpg',575,250,8,1,1),('SCG1236','Jeep','Cherokee','85-90','Floor','Automatic','Tilt','Delay Wipers','/images/SCG1236.jpg',425,150,10,2,1),('SCG1237','Jeep','Cherokee','85-90','Floor','Manual','Tilt','Delay Wipers','/images/SCG1237.jpg',425,150,10,2,1),('SCG124','Chevrolet Cars','Chevelle','69-72','Floor','Automatic','Tilt',NULL,'/images/SCG124.jpg',575,250,12,1,1),('SCG1387','Jeep','Wrangler & YJ','87-93','Column','Automatic','Tilt',NULL,'/images/SCG1387.jpg',575,400,9,1,1),('SCG1391','Jeep','Wrangler & YJ','87-93','Floor','Manual','Tilt',NULL,'/images/SCG1391.jpg',575,400,10,1,1),('SCG1413A','Ford Trucks','F-Series, F150 F250 F350','80-91','Column','Automatic','Fixed',NULL,'/images/SCG1413A.JPG',575,400,13,1,1),('SCG1413B','Ford Trucks','F-Series, F150 F250 F350','80-91','Column','Automatic','Tilt',NULL,'/images/SCG1413B.jpg',675,400,11,8,1),('SCG1472A','Chevy & GMC Trucks','Full Size Pick Up Truck, C and K Series','88-91','Column','Automatic','Tilt','Delay Wipers','/images/SCG1472A.JPG',575,350,5,2,1),('SCG1545A','Chevrolet Cars','Camaro','89','Floor','Automatic','Tilt','Delay Wipers','/images/SCG1092A.JPG',575,400,19,10,1),('SCG1754A','Ford Vans','E-Series, E150, E250, E350 Econoline Vans','92-96','Column','Automatic','Fixed',NULL,'/images/SCG1941B.JPG',475,150,14,9,2),('SCG1754B','Ford Vans','E-Series, E150, E250, E350 Econoline Vans','92-96','Column','Automatic','Tilt',NULL,'/images/SCG1941B.JPG',475,150,14,9,2),('SCG176','Chevrolet Cars','Camaro','70-74','Floor','Automatic','Tilt',NULL,'/images/SCG176.jpg',575,400,12,1,1),('SCG1808A','Chevrolet Cars','Camaro','90-92','Floor','Automatic','Tilt','Delay Wipers, With Cruise','/images/SCG1808A.JPG',575,400,19,10,1),('SCG1808B','Chevrolet Cars','Camaro','90-92','Floor','Automatic','Tilt','Delay Wipers, Without Cruise','/images/SCG1808A.JPG',575,400,19,10,1),('SCG1809','Chevrolet Cars','Camaro','90-92','Floor','Manual','Tilt','Delay Wipers','/images/SCG1808A.JPG',575,400,19,10,1),('SCG1842','Chevy & GMC Vans','G Series Vans, Vandura','92','Column','Automatic','Tilt','','/images/SCG1846.jpg',525,350,16,2,1),('SCG1843','Chevy & GMC Vans','G Series Vans, Vandura','92','Column','Automatic','Fixed','','/images/SCG1846.jpg',525,350,16,2,1),('SCG1846','Chevy & GMC Vans','G Series Vans, Vandura','93','Column','Automatic','Tilt','','/images/SCG1846.jpg',525,350,15,2,1),('SCG1846-94-95','Chevy & GMC Vans','G Series Vans, Vandura','94-95','Column','Automatic','Tilt','Without Airbag','/images/SCG1846.jpg',525,350,15,2,1),('SCG1847','Chevy & GMC Vans','G Series Vans, Vandura','93','Column','Automatic','Fixed','','/images/SCG1846.jpg',525,350,16,2,1),('SCG1847-94-95','Chevy & GMC Vans','G Series Vans, Vandura','94-95','Column','Automatic','Fixed','Without Airbag','/images/SCG1846.jpg',525,350,16,2,1),('SCG1941B','Ford Trucks','F-Series, F150 F250 F350','92-97','Column','Automatic','Tilt',NULL,'/images/SCG1941B.JPG',475,150,14,9,2),('SCG1964','Jeep','Wrangler & YJ','94-95','Column','Automatic','Tilt',NULL,'/images/SCG1964.jpg',575,400,9,1,1),('SCG1965','Jeep','Wrangler & YJ','94-95','Floor','Manual','Tilt',NULL,'/images/SCG1965.jpg',575,400,10,1,1),('SCG2086A','Chevy & GMC Trucks','Full Size Pick Up Truck, C and K Series','92-93','Column','Automatic','Tilt','Delay Wipers','/images/SCG1472A.JPG',575,350,5,2,1),('SCG2086B','Chevy & GMC Trucks','Full Size Pick Up Truck, C and K Series','94','Column','Automatic','Tilt','Delay Wipers','/images/SCG1472A.JPG',575,350,5,2,1),('SCG2091','Chevy & GMC Vans','G Series Vans, Vandura','94-95','Column','Automatic','Tilt','With Airbag','/images/SCG1846.jpg',525,350,15,2,1),('SCG2092','Chevy & GMC Vans','G Series Vans, Vandura','94-95','Column','Automatic','Fixed','With Airbag','/images/SCG1846.jpg',525,350,16,2,1),('SCG236','Chevy & GMC Trucks','Full Size Pick Up Truck, C and K Series','73-74','Column','Automatic','Fixed',NULL,'/images/SCG642.jpg',575,350,7,1,1),('SCG237','Chevy & GMC Trucks','Full Size Pick Up Truck, C and K Series','73-74','Column','Automatic','Tilt',NULL,'/images/SCG642.jpg',575,350,8,1,1),('SCG2418B','Ford Vans','E-Series, E150, E250, E350 Econoline Vans','82-91','Column','Automatic','Tilt','W/ Overdrive','/images/SCG2418B.JPG',675,400,11,8,1),('SCG281','Chevrolet Cars','Camaro','75','Floor','Automatic','Tilt',NULL,'/images/SCG176.jpg',575,400,12,1,1),('SCG289','Chevy & GMC Trucks','Full Size Pick Up Truck, C and K Series','75-76','Column','Automatic','Tilt',NULL,'/images/SCG642.jpg',575,350,8,1,1),('SCG290','Chevy & GMC Trucks','Full Size Pick Up Truck, C and K Series','75-76','Column','Automatic','Fixed',NULL,'/images/SCG642.jpg',575,350,7,1,1),('SCG312','Chevrolet Cars','Camaro','76','Floor','Automatic','Tilt',NULL,'/images/SCG176.jpg',575,400,12,1,1),('SCG313','Chevrolet Cars','Camaro','77','Floor','Automatic','Tilt',NULL,'/images/SCG176.jpg',575,400,12,1,1),('SCG339','Chevy & GMC Trucks','Full Size Pick Up Truck, C and K Series','77','Column','Automatic','Tilt',NULL,'/images/SCG642.jpg',575,350,8,1,1),('SCG340','Chevy & GMC Trucks','Full Size Pick Up Truck, C and K Series','77','Column','Automatic','Fixed',NULL,'/images/SCG642.jpg',575,350,7,1,1),('SCG375','Chevy & GMC Trucks','Full Size Pick Up Truck, C and K Series','78','Column','Automatic','Tilt',NULL,'/images/SCG642.jpg',575,350,8,1,1),('SCG376','Chevy & GMC Trucks','Full Size Pick Up Truck, C and K Series','78','Column','Automatic','Fixed',NULL,'/images/SCG642.jpg',575,350,7,1,1),('SCG388','Chevrolet Cars','Camaro','78','Floor','Automatic','Tilt',NULL,'/images/SCG176.jpg',575,400,12,1,1),('SCG454','Chevrolet Cars','Camaro','79-81','Floor','Automatic','Tilt',NULL,'/images/SCG176.jpg',575,400,12,1,1),('SCG540','Jeep','CJ Series (Includes Scrambler)','77-86','Floor','Manual','Fixed',NULL,'/images/SCG540.jpg',575,400,2,1,1),('SCG540A','Jeep','CJ Series (Includes Scrambler)','76','Floor','Manual','Fixed',NULL,'/images/SCG540.jpg',575,400,2,1,1),('SCG542AC','Jeep','CJ Series (Includes Scrambler)','76','Column','Automatic','Tilt','Transmission Linkage Lever is Curved','/images/SCG542.jpg',575,400,3,1,1),('SCG542AS','Jeep','CJ Series (Includes Scrambler)','76','Column','Automatic','Tilt','Transmission Linkage Lever is Straight','/images/SCG542.jpg',575,400,3,1,1),('SCG542C','Jeep','CJ Series (Includes Scrambler)','77-86','Column','Automatic','Tilt','Transmission Linkage Lever is Curved','/images/SCG542.jpg',575,400,3,1,1),('SCG542S','Jeep','CJ Series (Includes Scrambler)','77-86','Column','Automatic','Tilt','Transmission Linkage Lever is Straight','/images/SCG542.jpg',575,400,3,1,1),('SCG543AC','Jeep','CJ Series (Includes Scrambler)','76','Column','Automatic','Fixed','Transmission Linkage Lever is Curved','/images/SCG542.jpg',575,400,6,1,1),('SCG543AS','Jeep','CJ Series (Includes Scrambler)','76','Column','Automatic','Fixed','Transmission Linkage Lever is Straight','/images/SCG542.jpg',575,400,6,1,1),('SCG543C','Jeep','CJ Series (Includes Scrambler)','77-86','Column','Automatic','Fixed','Transmission Linkage Lever is Curved','/images/SCG542.jpg',575,400,6,1,1),('SCG543S','Jeep','CJ Series (Includes Scrambler)','77-86','Column','Automatic','Fixed','Transmission Linkage Lever is Straight','/images/SCG542.jpg',575,400,6,1,1),('SCG544','Jeep','CJ Series (Includes Scrambler)','77-86','Floor','Manual','Tilt',NULL,'/images/SCG544.jpg',575,400,4,1,1),('SCG544A','Jeep','CJ Series (Includes Scrambler)','76','Floor','Manual','Tilt',NULL,'/images/SCG544.jpg',575,400,4,1,1),('SCG642','Chevy & GMC Trucks','Full Size Pick Up Truck, C and K Series','79-83','Column','Automatic','Tilt',NULL,'/images/SCG642.jpg',575,350,8,1,1),('SCG643','Chevy & GMC Trucks','Full Size Pick Up Truck, C and K Series','79-83','Column','Automatic','Fixed',NULL,'/images/SCG642.jpg',575,350,7,1,1),('SCGKT101','Chevy & GMC Trucks','Kodiak, Topkick, C6500 Medium Duty Truck','90-2003','Floor','Automatic','Tilt','Delay Wipers','/images/SCGKT101.jpg',975,450,10,1,1),('SCGKT102','Chevy & GMC Trucks','Kodiak, Topkick, C6500 Medium Duty Truck','90-2003','Floor','Automatic','Tilt','2 Speed Wipers','/images/SCGKT101.jpg',975,450,10,1,1),('SCGKT103','Chevy & GMC Trucks','Kodiak, Topkick, C6500 Medium Duty Truck','90-2003','Floor','Automatic','Fixed','Delay Wipers','/images/SCGKT104.jpg',975,450,18,1,1),('SCGKT104','Chevy & GMC Trucks','Kodiak, Topkick, C6500 Medium Duty Truck','90-2003','Floor','Automatic','Fixed','2 Speed Wipers','/images/SCGKT104.jpg',975,450,18,1,1),('SCGKT105','Chevy & GMC Trucks','Kodiak, Topkick, C6500 Medium Duty Truck','90-2003','Column','Automatic','Tilt','Delay Wipers','/images/SCGKT101.jpg',975,450,10,1,1),('SCGKT106','Chevy & GMC Trucks','Kodiak, Topkick, C6500 Medium Duty Truck','90-2003','Column','Automatic','Tilt','2 Speed Wipers','/images/SCGKT101.jpg',975,450,10,1,1),('SCGKT107','Chevy & GMC Trucks','Kodiak, Topkick, C6500 Medium Duty Truck','90-2003','Column','Automatic','Fixed','Delay Wipers','/images/SCGKT104.jpg',975,450,10,1,1),('SCGKT108','Chevy & GMC Trucks','Kodiak, Topkick, C6500 Medium Duty Truck','90-2003','Column','Automatic','Fixed','2 Speed Wipers','/images/SCGKT104.jpg',975,450,10,1,1),('SCGP3091','Chevy & GMC P30 & P42 Step Vans','P30 & P42 Step Van, Workhorse','91-93','Column','Automatic','Tilt',NULL,'/images/SCGP3091.jpg',975,450,9,1,1),('SCGP3091F','Chevy & GMC P30 & P42 Step Vans','P30 & P42 Step Van, Workhorse','91-93','Floor','Automatic','Tilt','','/images/SCGP3091.jpg',975,450,4,1,1),('SCGP3091MH','Chevy & GMC Motor Home & RV','P30 Motor Home','91-93','Column','Automatic','Tilt',NULL,'/images/SCGP3091MH.jpg',975,450,9,1,1),('SCGP3094','Chevy & GMC P30 & P42 Step Vans','P30 & P42 Step Van, Workhorse','94-01','Column','Automatic','Tilt','2 Speed Wipers','/images/SCGP3091.jpg',975,450,9,1,1),('SCGP30942S','Chevy & GMC P30 & P42 Step Vans','P30 & P42 Step Van, Workhorse','02-05','Column','Automatic','Tilt','2 Speed Wipers','/images/SCGP3091.jpg',975,450,9,1,1),('SCGP3094D','Chevy & GMC P30 & P42 Step Vans','P30 & P42 Step Van, Workhorse','02-05','Column','Automatic','Tilt','Delay Wipers','/images/SCGP3091.jpg',975,450,9,1,1),('SCGP3094F','Chevy & GMC P30 & P42 Step Vans','P30 & P42 Step Van, Workhorse','94-01','Floor','Automatic','Tilt','','/images/SCGP3091.jpg',975,450,10,1,1);
/*!40000 ALTER TABLE `catalog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `info_excludes`
--

DROP TABLE IF EXISTS `info_excludes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `info_excludes` (
  `ExcludesInfoId` int NOT NULL,
  `ExcludesHTML` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`ExcludesInfoId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info_excludes`
--

LOCK TABLES `info_excludes` WRITE;
/*!40000 ALTER TABLE `info_excludes` DISABLE KEYS */;
INSERT INTO `info_excludes` VALUES (1,'<p>Steering wheel, signal lever, tilt lever and hazard button, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(2,'<p>Steering wheel, signal lever, hazard button, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(3,'<p>Steering wheel, signal lever, tilt lever, shift lever, hazard button, reverse light switch, transmission indicator and pointer, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(4,'<p>Steering wheel, signal lever, tilt lever and hazard button, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(5,'<p>Steering wheel, signal/wiper lever (If you don\'t have Cruise Control), tilt lever, shift lever, hazard button, reverse light switch, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(6,'<p>Steering wheel, signal lever, shift lever, hazard button, reverse light switch, transmission indicator, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(7,'<p>Steering wheel, signal lever, shift lever, hazard button, reverse light switch, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(8,'<p>Steering wheel, tilt lever, shift lever, hazard button, reverse light switch, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(9,'<p>Steering wheel, signal/wiper lever, tilt lever, shift lever, hazard button, reverse light switch, transmission indicator and pointer, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(10,'<p>Steering wheel, signal/wiper lever, tilt lever, hazard button, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(11,'<p>Steering Wheel, signal/tilt lever, shift lever, these parts may be available if needed. The customer can remove these items from their broken column and install the on the rebuilt column.</p>'),(12,'<p>Steering wheel, signal lever, tilt lever, hazard button, reverse light switch, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(13,'<p>Steering Wheel, signal lever, shift lever, these parts may be available if needed. The customer can remove these items from their broken column and install the on the rebuilt column.</p>'),(14,'<p>Steering Wheel, shift lever, tilt lever, plastic covers, horn brush assembly or clock spring. These parts may be available if needed. The customer can remove these items from their broken column and install the on the rebuilt column.</p>'),(15,'<p>Steering wheel, signal/wiper lever if you don\'t have cruise control, tilt lever, shift lever, hazard button, reverse light switch, transmission indicator and pointer, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(16,'<p>Steering wheel, signal/wiper lever if you don\'t have cruise control, shift lever, hazard button, reverse light switch, transmission indicator and pointer, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(17,'<p>Steering wheel, signal/wiper lever (If you don\'t have Cruise Control), shift lever, hazard button, reverse light switch, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>'),(18,'\'<p>Steering wheel, signal/wiper lever (If you don\'\'t have Cruise Control), hazard button, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>\''),(19,'<p>Steering wheel, wiper/cruise control lever, tilt lever, hazard button, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>');
/*!40000 ALTER TABLE `info_excludes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `info_includes`
--

DROP TABLE IF EXISTS `info_includes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `info_includes` (
  `IncludesInfoId` int NOT NULL,
  `IncludesHTML` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`IncludesInfoId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info_includes`
--

LOCK TABLES `info_includes` WRITE;
/*!40000 ALTER TABLE `info_includes` DISABLE KEYS */;
INSERT INTO `info_includes` VALUES (1,'<p>New signal switch, new ignition switch and a new lock with 2 keys.</p>'),(2,'<p>New signal switch, new ignition switch and a new lock with 2 keys, new cruise control lever if equiped with cruise control.</p>'),(3,'<p>New signal switch, new ignition switch and a new lock with 2 keys.</p>'),(4,'<p>Multifunction switch, ignition switch, new lock with 2 keys, plastic covers and new upper bearings</p>'),(5,'<p>Both multifunction switches, ignition switch, new lock with 2 keys, plastic covers and new upper bearings.</p>'),(6,'<p>Column assembly, both multifunction switches, ignition switch.</p>\''),(7,'<p>New signal switch, new bearings.</p>'),(8,'<p>New signal switch, new lock with 2 keys, new upper bearing. Most parts for this column are discontinued so we have many of the parts made exclusively for us. We also have the bearing housing and support machined so that the column has no play.'),(9,'<p>New bearings, new multifunction switch, new lock with 2 keys and ignition switch, .</p>'),(10,'<p>New signal switch, new ignition switch and a new lock with 1 new VATS Key. This vehicle is equiped with the VATS antitheft system. Your car won\'t start without the correct key. You need to tell us which key your car takes. Bring your key to a locksmith or dealership and ask them to read your key. When you place the order we will ask for the key number, a number 1-15. We will cut a key to match your original key so that the car will start.</p>');
/*!40000 ALTER TABLE `info_includes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `info_process`
--

DROP TABLE IF EXISTS `info_process`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `info_process` (
  `ProcessInfoId` int NOT NULL,
  `ProcessHTML` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`ProcessInfoId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info_process`
--

LOCK TABLES `info_process` WRITE;
/*!40000 ALTER TABLE `info_process` DISABLE KEYS */;
INSERT INTO `info_process` VALUES (1,'<p>Complete disassembly, sand blast to remove rust & paint, clean and degrease, inspect components, repack or replace bearings, grease moving parts, replace broken & worn parts, twelve point test, paint to match interior.</p>'),(2,'<p>Complete disassembly, sand blast to remove rust & paint, clean and degrease, inspect components, replace bearings, grease moving parts, replace broken & worn parts, twelve point test.</p>');
/*!40000 ALTER TABLE `info_process` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `run_on` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'/20240417001920-version-0','2024-04-17 00:07:30');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-30 20:38:25
