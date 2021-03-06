
CREATE DATABASE  IF NOT EXISTS `columnsg_database` ;
USE `columnsg_database`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: columnsg_database
-- ------------------------------------------------------
-- Server version	8.0.18

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
  `CatalogId` int(11) NOT NULL AUTO_INCREMENT,
  `InventoryId` int(11) DEFAULT NULL,
  `ProductInformationId` int(11) DEFAULT NULL,
  `Manufacturer` varchar(50) NOT NULL,
  `Model` varchar(50) NOT NULL,
  `Year` varchar(50) NOT NULL,
  `Shift` enum('Floor','Column') NOT NULL,
  `Transmission` enum('Manual','Automatic') NOT NULL,
  `Tilt` enum('Tilt','Fixed') NOT NULL,
  `AdditionalOptions` varchar(100) DEFAULT NULL,
  `Image` varchar(50) DEFAULT NULL,
  `Price` int(11) DEFAULT NULL,
  `CoreCharge` int(11) DEFAULT NULL,
  PRIMARY KEY (`CatalogId`),
  KEY `InventoryId` (`InventoryId`),
  KEY `ProductInformationId` (`ProductInformationId`),
  CONSTRAINT `catalog_ibfk_1` FOREIGN KEY (`InventoryId`) REFERENCES `inventory` (`InventoryId`),
  CONSTRAINT `catalog_ibfk_2` FOREIGN KEY (`ProductInformationId`) REFERENCES `productinformation` (`ProductInformationId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory` (
  `InventoryId` int(11) NOT NULL AUTO_INCREMENT,
  `Qty` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`InventoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `productinformation`
--

DROP TABLE IF EXISTS `productinformation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productinformation` (
  `ProductInformationId` int(11) NOT NULL,
  `Title` text,
  `DescriptionHTML` text,
  `Notes` text,
  PRIMARY KEY (`ProductInformationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-06 14:09:29
