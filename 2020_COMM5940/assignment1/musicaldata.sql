-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 09, 2020 at 11:05 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assignment1`
--

-- --------------------------------------------------------

--
-- Table structure for table `musicaldata`
--

CREATE TABLE `musicaldata` (
  `me` varchar(13) DEFAULT NULL,
  `comments` int(5) DEFAULT NULL,
  `awards` int(2) DEFAULT NULL,
  `feedback` varchar(5) DEFAULT NULL,
  `recommendation` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `musicaldata`
--

INSERT INTO `musicaldata` (`me`, `comments`, `awards`, `feedback`, `recommendation`) VALUES
('《长腿叔叔》', 889, 4, '66.8%', '一般'),
('《我的遗愿清单》', 1392, 0, '66.3%', '一般'),
('《拉赫玛尼诺夫》', 861, 1, '47.9%', '一般'),
('《贝隆夫人》', 1318, 19, '64.7%', '一般'),
('《放牛班的春天》', 547, 2, '59.7%', '一般'),
('《水曜日》', 1402, 3, '58.8%', '一般'),
('《音乐之声》', 1826, 0, '89%', '值得一看'),
('《空中花园谋杀案》', 8577, 0, '77.1%', '值得一看'),
('《吉屋出租RENT》', 2721, 13, '88.5%', '值得一看'),
('《芝加哥》', 7112, 6, '87.3%', '值得一看'),
('《白夜行》', 3383, 0, '83.7%', '值得一看'),
('《巴黎圣母院》', 14006, 5, '96.1%', '值得一看'),
('《泰坦尼克号》', 840, 5, '83.6%', '值得一看'),
('《玛蒂尔达》', 2796, 12, '90%', '值得一看'),
('《狮子王》', 2620, 76, '88%', '值得一看'),
('《猫》', 22946, 12, '91.6%', '值得一看'),
('《不眠之夜》', 7471, 3, '95.3%', '值得一看'),
('《来自远方》', 1371, 1, '94.5%', '值得一看'),
('《春之觉醒》', 701, 4, '86.9%', '值得一看'),
('《爱在星光里》', 66, 0, '45.5%', '数据量不足'),
('《卖火柴的小女孩》', 45, 10, '68.9%', '数据量不足'),
('《阴阳师》', 207, 0, '73%', '数据量不足'),
('《献给阿尔吉侬的花束》', 0, 0, 'N/A', '数据量不足'),
('《当爱已成往事》', 62, 0, '41.9%', '数据量不足'),
('《屈原》', 24, 0, '50%', '数据量不足'),
('《面试》', 0, 0, 'N/A', '数据量不足'),
('你说我容易吗之《万万不能》', 36, 0, '52.7%', '数据量不足'),
('《西厢》', 55, 0, '32.8%', '数据量不足'),
('《人言》', 8, 0, '33.3%', '数据量不足'),
('《FLAMES火焰》', 0, 0, 'N/A', '数据量不足'),
('《搭错车》', 100, 0, '36%', '数据量不足'),
('《春上海1949》', 5, 0, '33.3%', '数据量不足'),
('《马不停蹄的忧伤》', 354, 0, '60.5%', '数据量不足'),
('《九色鹿》', 3, 0, '33.3%', '数据量不足'),
('《稳稳的幸福》', 269, 0, '50.3%', '数据量不足'),
('《隐婚男女》', 398, 0, '53.8%', '数据量不足'),
('《故宫里的大怪兽》', 14, 0, '64.8%', '数据量不足');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
