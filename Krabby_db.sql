-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: krabby_db
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id_category` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `descripcion` varchar(45) NOT NULL,
  PRIMARY KEY (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Auriculares ','Auriculares'),(2,'Celular','Celular'),(3,'Reloj Inteligente','Reloj Inteligente'),(4,'Televisor','Televisor'),(5,'Impresora','Impresora'),(6,'Tarjetas Inteligentes','Tarjetas Inteligentes'),(7,'Mouse','Mouse'),(8,'Video','Video'),(9,'Vr','Realidad Virtual'),(10,'Camara','Camara'),(11,'Dron','Dron'),(12,'Tablet','Tablet'),(13,'Procesador','Procesador'),(14,'Aspiradora','Aspiradora'),(15,'Cargador ','Cargador Portatil'),(16,'Audio','Audio'),(17,'Otros','otros');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id_product` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `caracteristicas` varchar(150) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `imagen` varchar(150) NOT NULL,
  `id_category` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Asistente de Voz','Máquina de inteligencia artificial y reconocimiento de voz capaz de realizar procesos t6ales como reproducción y pausa de video, encendido y apagado d',57.50,'asistentedevoz.jpg',1),(2,'Celular','Dispositivo móvil el cual permite la realización de diversas tareas como administración de documentos, reproducción de audio y video entre otros.',237.50,'aspiradorainteligente.jpg',2),(3,'Reloj Inteligente  11','Dispositivo el cual permite conectarse a varios dispositivos móviles para realizar funciones como recepción de notificaciones además de contar con sen',57.50,'relojinteligente.jpg',3),(4,'Televisor','televisor 4k',1000.00,'1665098286784-60783fe81a124_360_480!.jpg',4),(5,'Impresora','Herramienta inalámbrica la cual se encarga de la impresión de documentos de distintos formatos.',75.00,'impresora.jpg',5),(21,'Tarjetas Inteligentes','Tarjeta integrada con un micro chip el cual permite realizar transacciones de manera más ágil',2.50,'tarejtasinteligentes.jpg',6),(22,'Mouse','Dispositivo ergonómico el cual se adapta de mejor manera al usuario permitiendo un mejor desarrollo de las actividades a realizar',13.50,'mouse.jpg',7),(23,'Videobeam','Dispositivo que permite la ilustración a gran escala de archivos multimedia tales como videos, fotografías entre otros',299.99,'videobeam.jpg',8),(24,'Gafas realidad virtual','Herramienta la cual permite la visualización en mejor escala de objetos que se encuentran en entornos virtuales',49.99,'gafasrealidadaumentada.jpg',9),(25,'Televisores','Dispositivo electrónico cuya función principal es la reproducción de archivos multimedia',630.00,'tv.jpg',4),(26,'Cámaras','Dispositivo de seguridad encargado de captar las imágenes de la zona donde se ubique',62.75,'camara.jpg',10),(27,'Drone','Máquina de inteligencia artificial y reconocimiento de voz capaz de realizar procesos t6ales como reproducción y pausa de video, encendido y apagado d',150.00,'drone.jpg',11),(28,'Ipad','Dispositivo móvil con la capacidad de realizar varias tareas como diseño web ilustraciones entre otras',1500.00,'ipad.jpg',12),(29,'Procesador','Componente encargado de procesar toda información existente en un dispositivo',446.00,'procesador.jpg',13),(30,'Tarjeta Grafica','Componente encargado de la ilustración visual de los datos que está procesando el dispositivo',475.00,'tarjetagrafica.jpg',6),(31,'Cerraduras Inteligentes','Dispositivo de seguridad diseñado para restringir el acceso a distintos lugares',500.00,'cerradurasinteligentes.jpg',17),(32,'Aspiradora Inteligente','Dispositivo de limpieza inalámbrico el cual facilita el aseo del entorno',247.50,'aspiradorainteligente.jpg',14),(33,'Cargador Portátil','Unidad de carga móvil que permite carga nuestro dispositivo sin necesidad de puerto estático',49.99,'cargadorportatil.jpg',15),(34,'Bolígrafo Inteligente','Herramienta que se utiliza en dispositivos móviles enfocado especiales en el área de diseño digital',115.00,'boligrafointeligente',17),(35,'Parlante portatil JBL Go 2  !!!!','El JBL GO 2 es un altavoz Bluetooth completísimo resistente al agua para llevar contigo a todas partes. Reproduce música de forma inalámbrica a través',900.00,'1663020582504-JBL_Go2_Hero_Midnight_Black-1605x1605px.png',16),(36,'CELULAR SAMSUNG A32 AZUL','Similar a la vista humana, la Cámara Ultra Gran Angular de 8MP muestra el mundo con un ángulo de visión de 123 grados. Añadiendo más perspectiva a tod',76.00,'default-image.png',1),(37,'CELULAR APPLE IPHONE 13 MINI - MLK43LE/A AZUL','Celular de 5.4\" OLED. Procesador Chip A15 Bionic. Almacenamiento 128Gb / RAM 4 Gb. Camara frontal 12Mp / trasera 12Mp. NFC. USB-C. Bluetooth 5.0. Sist',479999.00,'1666927332121-00538049-145944-145944-01-145944-01.jpg',1),(38,'CELULAR APPLE IPHONE 13 - MLQ93LE/A ROJO','Celular de 6.1\" OLED. Procesador Chip A15 Bionic. Almacenamiento 256Gb / RAM 4 Gb. Camara frontal 12Mp / trasera 12Mp. NFC. USB-C. Bluetooth 5.0. Sist',617279.00,'1666927885691-00482033-145025-145025-01-145025-01.jpg',1),(39,'MATIAS','ñam ñam',777777.00,'default-image.png',1),(40,'GUILLE','1234',1234.00,'1666972826610-ABBEY_ROAD.jpg',NULL),(41,'GUILLE22','1234',1234.00,'1666972889048-avatar-logueo.jpg',NULL),(42,'GUILLE22','1234',1234.00,'1666972929518-avatar-logueo.jpg',NULL),(43,'GUILLE22','1234',1234.00,'1666972958414-avatar-logueo.jpg',NULL),(44,'MATIAS','Disco Abbey Road',19999.00,'1666973240461-20210424_135821.jpg',NULL),(45,'MATIAS ultimooo !!!!!!!!!!!!!!!!!!!!!!!!!!!!!','adadas',19999.00,'1666973533149-00482033-145025-145025-01-145025-01.jpg',NULL),(46,'MATIAS','El JBL GO 2 es un altavoz Bluetooth completísimo resistente al agua para llevar contigo a todas partes. Reproduce música de forma inalámbrica a través',13949.00,'1666973696593-00482033-145025-145025-01-145025-01.jpg',NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roll_user`
--

DROP TABLE IF EXISTS `roll_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roll_user` (
  `id_roll` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id_roll`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roll_user`
--

LOCK TABLES `roll_user` WRITE;
/*!40000 ALTER TABLE `roll_user` DISABLE KEYS */;
INSERT INTO `roll_user` VALUES (1,'Invitado'),(2,'Administrado'),(3,'Usuario');
/*!40000 ALTER TABLE `roll_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_product`
--

DROP TABLE IF EXISTS `user_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_product` (
  `id_user_product` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  PRIMARY KEY (`id_user_product`),
  KEY `id_product_idx` (`id_product`),
  KEY `id_user_idx` (`id_user`),
  CONSTRAINT `id_product` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_product`
--

LOCK TABLES `user_product` WRITE;
/*!40000 ALTER TABLE `user_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `apellido` varchar(150) NOT NULL,
  `telefono` int(11) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(50) NOT NULL,
  `imagen` varchar(150) NOT NULL,
  `roll_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Matias','Ferreyra',351333333,'matias@matias.com','1234','default-image.png',1),(2,'Paula','briceno',1139292910,'pola23paula@gmail.com','$2a$15$d1PXiLj7PLlOY/TPTEiKz.tBRWB8/3bwsfiGvJWxrNL','default-image.png',1),(3,'arturo armando','Ascanio sanchez',1130425711,'ugodigitalltdcompany@gmail.com','$2a$15$phrR0hEqhhRmJIJ/nTUFQ.YQwGW5RytU1diQ28I/15y','default-image.png',1),(4,'Matias','Ferreyra',1127374740,'mathiasferreyra@gmail.com','$2a$15$MnzflLu65eDXhkIUjOACSe8lCi3YNZDtKsuNGWCDtfk','default-image.png',1),(5,'Roberto','Carlos',12343445,'uma.union7@gmail.com','$2a$15$kSdPCR1oy5H/sLZnh4kZuOzhGI/xdmFHYoZpylfbjN2','default-image.png',1),(6,'leonel','messi',1125301850,'leomessi@gmail.com','$2a$15$GKaSCDegJNsbr4iZ.EactOAWXcIwfkA.BFW7WgCCbvL','default-image.png',1),(7,'cristiano','ronaldo',2147483647,'cristiano@gmail.com','$2a$15$OYFgy3RkJ.THll8Hn1Pute/Ux2Anh.SbM25uWhBiun3','default-image.png',1),(8,'neymar','el brazileiro',1282838248,'neymar@gmail.com','$2a$15$C4e5553XNl5p9p030VBXnOa.bBYhG2N./i9OIjgJpTD','1665096426906-descarga (12).jpg',1),(9,'leonel','messi',123848484,'leomessi1@gmail.com','1665096883061-58c1c9d0-43ff-11ed-b3f2-2b3086abdfcf','$2a$15$h6OtU0kk2RJLiRx8nZ40VuYhTGtskNUtT4FGl6v8/GI5sny22p.pK',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-28 14:23:26
