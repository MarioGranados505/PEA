-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: peabd
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `listacursos`
--

DROP TABLE IF EXISTS `listacursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listacursos` (
  `idcurso` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `maestro` varchar(100) NOT NULL,
  `des` tinytext NOT NULL,
  `imagen` varchar(100) NOT NULL,
  PRIMARY KEY (`idcurso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listacursos`
--

LOCK TABLES `listacursos` WRITE;
/*!40000 ALTER TABLE `listacursos` DISABLE KEYS */;
INSERT INTO `listacursos` VALUES (1,'Aprende Visual Basic','Alejandro Gastelum','Bienvenido al curso de visual basic compañero','/assets/images/school.png'),(2,'Aprende Angular','pildorasinformaticas ','Aprende los fundamentos basicos al momento de crear tu pagina usando Angular','/assets/images/school.png'),(3,'Aprende Programacion Orientada a Objetos','Juan Francisco Figueroa','Aprende los fundamentos basicos de la programacion orientada a objetos utilizando Java y Swift','/assets/images/school.png'),(4,'Aprende a desarrollar aplicaciones web','Herman Geovanny','Aprende y comprende el porque el desarrollo de aplicaciones web es tu curso ideal','/assets/images/school.png');
/*!40000 ALTER TABLE `listacursos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-27  1:23:05
