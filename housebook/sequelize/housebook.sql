-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: housebook
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.11-MariaDB

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
-- Table structure for table `autors`
--

DROP TABLE IF EXISTS `autors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autors`
--

LOCK TABLES `autors` WRITE;
/*!40000 ALTER TABLE `autors` DISABLE KEYS */;
INSERT INTO `autors` VALUES (1,'Luisito Comunica','2020-07-24 08:37:37','2020-07-24 08:37:37'),(2,'Herman Melville','2020-07-24 08:37:37','2020-07-24 08:37:37'),(3,'Robin Diangelo','2020-07-24 08:37:37','2020-07-24 08:37:37'),(4,'Celeste Ng','2020-07-24 08:37:37','2020-07-24 08:37:37'),(5,'Mario Luna','2020-07-24 08:37:37','2020-07-24 08:37:37'),(6,'Dross Dross','2020-07-24 08:37:37','2020-07-24 08:37:37'),(7,' Bernardine Evaristo','2020-07-24 08:37:37','2020-07-24 08:37:37');
/*!40000 ALTER TABLE `autors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'informacion','2020-07-23 07:32:22','2020-07-23 07:32:22'),(2,'terror','2020-07-23 07:32:22','2020-07-23 07:32:22'),(3,'novedades','2020-07-23 07:32:22','2020-07-23 07:32:22'),(4,'ofertas','2020-07-23 07:32:22','2020-07-23 07:32:22'),(5,'mas-vendidos','2020-07-23 07:32:22','2020-07-23 07:32:22'),(6,'arte','2020-07-23 07:32:22','2020-07-23 07:32:22'),(7,'biografia','2020-07-23 07:32:22','2020-07-23 07:32:22'),(8,'libro-chicos','2020-07-23 07:32:22','2020-07-23 07:32:22'),(9,'crimen','2020-07-23 07:32:22','2020-07-23 07:32:22'),(10,'thriller','2020-07-23 07:32:22','2020-07-23 07:32:22'),(11,'ficcion','2020-07-23 07:32:22','2020-07-23 07:32:22'),(12,'novelas-visuales','2020-07-23 07:32:22','2020-07-23 07:32:22'),(13,'manga','2020-07-23 07:32:22','2020-07-23 07:32:22'),(14,'historia','2020-07-23 07:32:22','2020-07-23 07:32:22'),(15,'fantasia','2020-07-23 07:32:22','2020-07-23 07:32:22'),(16,'negocio','2020-07-23 07:32:22','2020-07-23 07:32:22'),(17,'leyes-finanzas','2020-07-23 07:32:22','2020-07-23 07:32:22'),(18,'computacion','2020-07-23 07:32:22','2020-07-23 07:32:22'),(19,'diccionario-lenguaje','2020-07-23 07:32:22','2020-07-23 07:32:22'),(20,'entretenimiento','2020-07-23 07:32:22','2020-07-23 07:32:22'),(21,'salud','2020-07-23 07:32:22','2020-07-23 07:32:22'),(22,'hogar-jadin','2020-07-23 07:32:22','2020-07-23 07:32:22'),(23,'humor','2020-07-23 07:32:22','2020-07-23 07:32:22'),(24,'medicina','2020-07-23 07:32:22','2020-07-23 07:32:22'),(25,'historia-naturaleza','2020-07-23 07:32:22','2020-07-23 07:32:22'),(26,'autoayuda','2020-07-23 07:32:22','2020-07-23 07:32:22'),(27,'poesia-drama','2020-07-23 07:32:22','2020-07-23 07:32:22'),(28,'religion','2020-07-23 07:32:22','2020-07-23 07:32:22'),(29,'romance','2020-07-23 07:32:22','2020-07-23 07:32:22'),(30,'ciencia-greografia','2020-07-23 07:32:22','2020-07-23 07:32:22'),(31,'ciencias-sociales','2020-07-23 07:32:22','2020-07-23 07:32:22'),(32,'deportes','2020-07-23 07:32:22','2020-07-23 07:32:22'),(33,'eduacion','2020-07-23 07:32:22','2020-07-23 07:32:22'),(34,'teconologia-ingenieria','2020-07-23 07:32:22','2020-07-23 07:32:22'),(35,'transporte','2020-07-23 07:32:22','2020-07-23 07:32:22'),(36,'viajes-vacaciones','2020-07-23 07:32:22','2020-07-23 07:32:22'),(37,'adultos','2020-07-23 07:32:22','2020-07-23 07:32:22'),(38,'jovenes','2020-07-23 07:32:22','2020-07-23 07:32:22'),(40,'psicologia','2020-07-24 07:00:02','2020-07-24 07:00:02'),(41,'novela','2020-07-24 07:29:04','2020-07-24 07:29:04');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles`
--

DROP TABLE IF EXISTS `detalles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalles` (
  `isbn` decimal(13,0) NOT NULL,
  `dimensiones` varchar(255) DEFAULT NULL,
  `fecha_publicacion` varchar(255) DEFAULT NULL,
  `editorial` varchar(255) DEFAULT NULL,
  `idioma_id` varchar(255) NOT NULL,
  `formato_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`isbn`),
  UNIQUE KEY `isbn` (`isbn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles`
--

LOCK TABLES `detalles` WRITE;
/*!40000 ALTER TABLE `detalles` DISABLE KEYS */;
INSERT INTO `detalles` VALUES (9780141990569,'129 x 198 x 11mm | 145g','07 Feb 2019','Penguin Books Ltd','English',2,'2020-07-24 13:52:39','2020-07-24 13:52:39'),(9780241984994,'129 x 198 x 28mm | 321g','05 Mar 2020','Penguin Books Ltd','English',2,'2020-07-24 13:51:49','2020-07-24 13:51:49'),(9780349142920,'131 x 200 x 25mm | 331g','22 May 2018','Little, Brown Book Group.','English',2,'2020-07-24 13:47:25','2020-07-24 13:47:25'),(9786070762628,'150 x 229 x 15mm | 249g','10 Dec 2019','Planeta Publishing','Spanish',2,'2020-07-24 13:54:31','2020-07-24 13:54:31'),(9786073184458,'147 x 229 x 15mm | 499g','19 May 2020','ALFAGUARA INFANTIL','Spanish',2,'2020-07-24 12:22:13','2020-07-24 12:35:43'),(9788460681670,'154 x 233 x 60mm | 1,537g','03 Jun 2015','Corre la Voz S.L.','Spanish',2,'2020-07-24 13:45:29','2020-07-24 13:45:29'),(9788491050209,'124 x 188 x 36mm | 499g','31 Jan 2017','Penguin Clasicos','Spanish',2,'2020-07-24 13:50:33','2020-07-24 13:50:33');
/*!40000 ALTER TABLE `detalles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formatos`
--

DROP TABLE IF EXISTS `formatos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `formatos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `format` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formatos`
--

LOCK TABLES `formatos` WRITE;
/*!40000 ALTER TABLE `formatos` DISABLE KEYS */;
INSERT INTO `formatos` VALUES (1,'PDF','2020-07-21 04:45:24','2020-07-21 04:45:24'),(2,'Fisico','2020-07-21 04:45:46','2020-07-21 04:45:46');
/*!40000 ALTER TABLE `formatos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `idiomas`
--

DROP TABLE IF EXISTS `idiomas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `idiomas` (
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `idiomas`
--

LOCK TABLES `idiomas` WRITE;
/*!40000 ALTER TABLE `idiomas` DISABLE KEYS */;
INSERT INTO `idiomas` VALUES ('English','2020-07-21 04:16:16','2020-07-21 04:16:16'),('Germany','2020-07-24 08:44:40','2020-07-24 13:43:42'),('Spanish','2020-07-21 04:16:16','2020-07-21 04:16:16');
/*!40000 ALTER TABLE `idiomas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `libro_categoria`
--

DROP TABLE IF EXISTS `libro_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `libro_categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria_id` int(11) NOT NULL,
  `libro_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `libro_categoria`
--

LOCK TABLES `libro_categoria` WRITE;
/*!40000 ALTER TABLE `libro_categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `libro_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `libros`
--

DROP TABLE IF EXISTS `libros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `libros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `valoracion` decimal(3,1) NOT NULL,
  `precio` decimal(9,2) NOT NULL,
  `descuento` decimal(4,2) DEFAULT NULL,
  `autor_id` int(11) NOT NULL,
  `detalle_isbn` decimal(13,0) NOT NULL,
  `idioma_id` varchar(255) NOT NULL,
  `portada` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `categoria` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `libros`
--

LOCK TABLES `libros` WRITE;
/*!40000 ALTER TABLE `libros` DISABLE KEYS */;
INSERT INTO `libros` VALUES (12,'Lugares asombrosos : traves├¡as ins├│litas y otras maneras extra├▒as de conocer el mundo','┬┐Cu├íl es nuestra urgencia por descubrir vida en otros planetas cuando ni siquiera hemos terminado de comprender las complejidades de la vida en nuestro propio mundo? A lo largo de las p├íginas que est├ís por leer te llevar├® de la mano a algunos de los sitio',4.0,500.00,90.00,1,9786073184458,'Spanish','portada-1591648744570.jpg','2020-07-21 04:01:03','2020-07-24 12:25:51',36),(13,'Psicolog├¡a del ├®xito','PSICOLOG├ìA DEL ├ëXITO es otra cosa. Esta dise├▒ado para personas comprometidas a cambiar su vida de verdad y para siempre. Sin esoterismos ni magia. Sin gilipatra├▒as ni autoayudismos.Te servir├í solo si entiendes que, para obtener m├ís, necesitas hacer y ser ',2.0,1000.00,0.00,5,9788460681670,'Spanish','portada-1591649396081.jpg','2020-07-21 04:01:03','2020-07-24 13:45:29',3),(14,'Little Fires Everywhere','\'Just read it...Outstanding\' Matt Haig\r\n\r\n\'To say I love this book is an understatement...It moved me to tears\' Reese Witherspoon\r\n\r\n\'Beautifully written, completely charming, and extremely wise on the subject of adolescence and influence\' Nick Hornby\r\n\r\n',4.0,700.00,50.00,4,9780349142920,'English','portada-1591649494646.jpg','2020-07-21 04:01:03','2020-07-24 13:47:25',27),(15,'Moby Dick / Spanish Edition','Nominada por los estadounidenses como una de las 100 mejores novelas en la serie de PBS The Great American Read. A trav├®s de este cl├ísico, Melville logra convertir la historia de la caza de un cachalote en toda una met├ífora sobre la condici├│n humana y sus',3.0,1500.00,25.00,2,9788491050209,'Spanish','portada-1591649589169.jpg','2020-07-21 04:01:03','2020-07-24 13:50:33',41),(16,'Girl, Woman, Other : WINNER OF THE BOOKER PRIZE 2019','  ***WINNER OF THE BOOKER PRIZE 2019***\r\n\r\n*SHORTLISTED FOR THE WOMEN&#x27;S PRIZE FOR FICTION 2020*\r\n\r\nTHE SUNDAY TIMES BESTSELLER\r\n\r\n&#x27;Exceptional. You have to order it right now&#x27; Stylist\r\n\r\nThis is Britain as you&#x27;ve never read it.\r\nThis i',5.0,500.00,0.00,7,9780241984994,'English','portada-1591649952460.jpg','2020-07-21 04:01:03','2020-07-24 13:51:49',11),(17,'White Fragility : Why It\'s So Hard for White People to Talk About Racism',' The International Bestseller\r\n\r\nAnger. Fear. Guilt. Denial. Silence. These are the ways in which ordinary white people react when it is pointed out to them that they have done or said something that has - unintentionally - caused racial offence or hurt. ',4.0,1100.00,5.00,3,9780141990569,'English','portada-1594234074624.jpg','2020-07-21 04:01:03','2020-07-24 13:52:39',40),(18,'El Libro Negro',' \"La vida puede ser una verdadera mierda para algunas, que no la mayor├¡a de las personas. Sin embargo, por lo menos un par de veces, a lo largo y ancho de esa vida, ├®sta elige un d├¡a para demostrarnos qu├® tanto asco puede dar. Esto les pasa a todos y cada',5.0,2000.00,5.00,6,9786070762628,'Spanish','portada-1594234099624.jpg','2020-07-21 04:01:03','2020-07-24 13:54:31',2);
/*!40000 ALTER TABLE `libros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20200717181443-create-libro.js'),('20200717182525-create-usuario.js'),('20200719012537-create-categoria.js'),('20200719012855-create-detalle.js'),('20200719012910-create-autor.js'),('20200719052930-create-formato.js'),('20200719053018-create-libro-categoria.js'),('20200719053414-create-idioma.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Test','contrase├▒a asdasd123','test@email.com','$2b$10$OBi33Nqe3RXBMdySD6Op.eDxuUcQtx1i5XaXBVt3hekLT6Hsmjen6',1,'2020-07-21 03:45:52','2020-07-21 03:45:52'),(2,'Towel','Thomas','thomas@email.com','$2b$10$TAkfXjWMBS.rNrhghiXPE.KiAzDMzncHW2tKdglM4kLS81QQqAe6q',1,'2020-07-21 03:47:35','2020-07-21 03:47:35'),(3,'todo','hola','peola@man.com','$2b$10$s7zAWmFc4.3aapPBjN13gu.skROubgEjazTn0pah89iv6MeXDZ.ta',NULL,'2020-07-25 09:16:14','2020-07-25 09:16:14');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'housebook'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-26 16:01:52
