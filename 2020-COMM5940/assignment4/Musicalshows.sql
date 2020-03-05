-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 05, 2020 at 06:27 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assignment4`
--

-- --------------------------------------------------------

--
-- Table structure for table `Musicalshows`
--

CREATE TABLE `Musicalshows` (
  `音乐剧名称` varchar(11) DEFAULT NULL,
  `类型` varchar(4) DEFAULT NULL,
  `poster` varchar(125) DEFAULT NULL,
  `最新卡司` varchar(78) DEFAULT NULL,
  `评价` varchar(73) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Musicalshows`
--

INSERT INTO `Musicalshows` (`音乐剧名称`, `类型`, `poster`, `最新卡司`, `评价`) VALUES
('《芝加哥》', '正在演出', 'https://dl.airtable.com/.attachments/cb79f0e60d4f2d8e16f69858b7804b67/b06b1a94/177473_n.jpg', 'Carmen Pretorius饰演Roxie Hart；Samantha Peo饰演Velma Kelly；Ian Kelsey饰演Billy Flynn', ' 最犀利讽刺又纯熟的音乐剧表演。'),
('《献给阿尔吉侬的花束》', '正在演出', 'https://dl.airtable.com/.attachments/2a5d5beeb40d55500c2f9e0023807e5e/08b980ba/O1CN0118Xo3Z2GdSDLkB8wW_2251059038.jpg_q60.jpg', '张博俊饰演查理高登；吕润桐饰演爱丽丝纪尼安；', '全程流泪不止，心智从黑暗到光明再进入黑暗的过程所伴随的思考、人性和故事，让人动容。'),
('《玛蒂尔达》', '正在演出', 'https://dl.airtable.com/.attachments/690d9d6575b0c58f4662b24429c7d929/7c3d0de0/178743_n.jpg', 'Jack Fokkens饰演布鲁斯；Kitty Harris饰演玛蒂尔达；', '从古至今英国创造的最令人满意、最颠覆性的音乐剧'),
('《吉屋出租RENT》', '正在演出', 'https://dl.airtable.com/.attachments/b22faa63fab939bbaf1e678d57f53057/6ee11788/O1CN01EOaEfW2GdSD0bi2qM_0-item_pic.jpg_q60.jpg', '郑艺彬 饰 Roger；夏振凯 饰 Mark；徐丽东 饰 Mimi', '”《吉屋出租》充满了力量与信念，像一团城市之火滚过舞台。“'),
('《阴阳师》', '正在演出', 'https://dl.airtable.com/.attachments/0c7c362eeea366ec06c8f254a1319ff0/1dab0ee4/O1CN01cAKjKO2GdSClU99Wf_0-item_pic.jpg_q60.jpg', '森田桐矢饰演鬼切演员；武藤贤人饰演源赖光', ' 音乐剧《阴阳师》以精致到无可挑剔的服装道具，神还原的人物造型，风格多样过耳不忘的歌曲，巧妙多变的舞美设计，一经上演便获得业内外观众一致好评。'),
('《巴黎圣母院》', '正在演出', 'https://dl.airtable.com/.attachments/b4868222cb32998c183625d9dadffc40/f8047170/177346_n.jpg', 'Angelo Del Vecchio饰演卡西莫多；Hiba Tawaji 饰演埃斯梅拉达；', '“巴黎圣母院面临着大规模维修，短时间看不到了；幸好我们还能看到法语音乐剧《巴黎圣母院》，在文学、音乐、舞台表演的力量中再次感受巴黎圣母院的伟大。”'),
('《贝隆夫人》', '即将上演', 'https://dl.airtable.com/.attachments/80daaf9f1980399c6119d7dcf048c158/4bbcd1f6/O1CN01fcbZFz2GdSB3XwZRo_0-item_pic.jpg_q60.jpg', 'Eva Perón 饰演者 Jessica Daley;Che 饰演者  Lucas Rush', '《贝隆夫人》被一些严肃戏剧专家认为，是韦伯最有可能永久流传的作品！'),
('《我的遗愿清单》', '正在演出', 'https://dl.airtable.com/.attachments/94084fea5b8c9f777a1505a7e2f26f7f/6bb72095/O1CN01ArU0fk2GdSCKL49qD_0-item_pic.jpg_q60.jpg', '方书剑 饰演 刘宝；张智涵 饰演 杨晓宇', '音乐剧《我的遗愿清单》会唤醒我们关于“友情”、“爱情”、“自由”的回忆——曾经年少时一同经历过的疯狂和幼稚，都会在剧中找到出口。'),
('《音乐之声》', '即将上演', 'https://dl.airtable.com/.attachments/b1d6873c29a8b64c7d56e465c9486205/168f8063/O1CN01z6SnaJ2GdSBzpNIOj_0-item_pic.jpg_q60.jpg', '党韫葳饰演玛丽亚；祝颂皓饰演上校；', ' “全球最受欢迎的音乐剧”'),
('《爱在星光里》', '即将上演', 'https://dl.airtable.com/.attachments/09cc980d1c750dee28c0815a06e35e9a/1600ba39/O1CN01t6FQBf2GdSCVT1b8f_0-item_pic.jpg_q60.jpg', '李炜铃', '一个关于一些人、一个城市、一个时代的成长故事。'),
('《拉赫玛尼诺夫》', '即将上演', 'https://dl.airtable.com/.attachments/bdc76334dd01bc3c12f6b138e99d2b74/85783060/O1CN01XBUJEs2GdSCietcV3_0-item_pic.jpg_q60.jpg', '蒋奇明 饰演 拉赫；施哲明 饰演 达利', '“《拉赫玛尼诺夫》把古典音乐的精华浓缩成音乐剧，带你入门！”'),
('《狮子王》', '即将上演', 'https://dl.airtable.com/.attachments/5db88d4933b14be9a844190efd8b4fd7/79b90ea0/O1CN01pV8ep32GdSDc8VKvV_0-item_pic.jpg_q60.jpg', 'Jordan Shaw饰演辛巴；Amanda Kunene饰演娜娜', '“让观众仿佛亲历非洲大草原壮美世界的同时，也感动于人类灵魂的坚韧和生命轮回的哲学闪光。”'),
('《当爱已成往事》', '即将上演', 'https://dl.airtable.com/.attachments/4902dc25dba54d530358301f8f97c7ba/ffa21ecd/O1CN01LfuWjT2GdSDYP6DTm_2251059038.jpg_q60.jpg', '白百何；黄渤', '“巧妙地将音乐与剧情有机融合，让观众能够在欣赏李宗盛音乐的同时，体会一个独特的爱与别离的故事。”'),
('《屈原》', '即将上演', 'https://dl.airtable.com/.attachments/28d921936f5cb7f62d1d863447cc6efa/ed87a649/O1CN01o8rpwS2GdSDTYgYmE_2251059038.jpg_q60.jpg', '曹轩宾 饰 屈原；曹扬；刘嘉玲', '“他的惊天一跃，也不是绝望的，而是他通过生命的结束走向精神高地。”');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
