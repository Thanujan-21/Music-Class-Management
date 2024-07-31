-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 24, 2024 at 05:50 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mms`
--

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
CREATE TABLE IF NOT EXISTS `student` (
  `s_id` bigint NOT NULL AUTO_INCREMENT,
  `course` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) NOT NULL,
  PRIMARY KEY (`s_id`),
  UNIQUE KEY `UK_fe0i52si7ybu0wjedj6motiim` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`s_id`, `course`, `email`, `first_name`, `gender`, `last_name`, `phone_number`) VALUES
(1, 'fvd', 'tharmavathsala15@gmail.com', 'Tharmanandhan', 'Female', 'Vathsala', '0123456789'),
(8, 'jh', 'sa22522474@my.sliit.lk', 'Tharmanandhan', 'Male', 'Thanujan', '0776509668'),
(16, 'ygcdfcerfv', 'dzvcsz@gmail.com', 'john', 'Male', 'Cena', '75466edr3w'),
(17, 'violin', 'thamakavin@gmail.com', 'Tharmanandhan', 'Male', 'Kavin', '0987654322'),
(18, 'violin', 'ummatharsha@gmail.com', 'Tharmanandhan', 'Female', 'Tharshayene', '0776509668');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
CREATE TABLE IF NOT EXISTS `teacher` (
  `t_id` bigint NOT NULL AUTO_INCREMENT,
  `course` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) NOT NULL,
  `qualification` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`t_id`),
  UNIQUE KEY `UK_3kv6k1e64a9gylvkn3gnghc2q` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`t_id`, `course`, `email`, `first_name`, `gender`, `last_name`, `phone_number`, `qualification`) VALUES
(1, 'Violin', 'thamakavin@gmail.com', 'Tharmanandhan', 'Male', 'Kavin', '0770127296', 'guitar'),
(3, 'Guitar', 'thama@gmail.com', 'Tharmanandhan', 'Male', 'Thanujan', '0123456789', 'Bsc. Computer Science');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
