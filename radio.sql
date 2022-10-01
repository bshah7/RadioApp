-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 14, 2022 at 12:40 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `radio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@gmail.com', '$2y$10$TupSurGSeqLYLHTfKADCf.S6qKc8.3/qhGDhjnUs7mZmhcD8sTfEy', NULL, '2022-04-05 04:19:56');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_artist`
--

CREATE TABLE `tbl_artist` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `bio` text NOT NULL,
  `view` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_artist`
--

INSERT INTO `tbl_artist` (`id`, `name`, `image`, `bio`, `view`, `created_at`, `updated_at`) VALUES
(1, 'Sonu nigam', '1643281318.jpg', 'good singer', 0, '2022-01-24 16:02:20', '2022-04-05 02:00:11'),
(4, 'Sonu nigam 1', '1643281318.jpg', 'good singer', 0, '2022-01-24 16:02:20', '2022-04-08 09:15:36'),
(5, 'Sonu nigam 2', '1643281318.jpg', 'good singer', 0, '2022-01-24 16:02:20', '2022-04-08 09:15:39'),
(6, 'Sonu nigam 3', '1643281318.jpg', 'good singer', 0, '2022-01-24 16:02:20', '2022-04-08 09:15:43');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_banner`
--

CREATE TABLE `tbl_banner` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `url` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_banner`
--

INSERT INTO `tbl_banner` (`id`, `name`, `image`, `url`, `created_at`, `updated_at`) VALUES
(9, 'rrrrr', '1649137217.jpg', 'rrrr', '2022-04-05 00:06:19', '2022-04-05 00:10:17');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`id`, `name`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Comedy 2', '1643272073.jpg', '2022-01-20 17:56:38', '2022-04-05 00:26:53'),
(2, 'Rock 1212', '1649138196.jpg', '2022-01-20 17:56:38', '2022-04-05 00:26:36'),
(4, 'wetetew', '1651639689.jpg', '2022-05-03 23:18:09', '2022-05-03 23:18:09');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_city`
--

CREATE TABLE `tbl_city` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_city`
--

INSERT INTO `tbl_city` (`id`, `name`, `image`, `status`, `created_at`, `updated_at`) VALUES
(3, 'Ahmedabad', '1649137789.jpg', 1, '2022-04-05 05:49:49', '2022-04-05 00:19:49'),
(4, 'Mumbai', '1649137778.jpg', 1, '2022-04-05 05:49:38', '2022-04-05 00:19:38');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_favorite`
--

CREATE TABLE `tbl_favorite` (
  `id` int(11) NOT NULL,
  `song_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_favorite`
--

INSERT INTO `tbl_favorite` (`id`, `song_id`, `user_id`, `created_at`, `updated_at`) VALUES
(6, 4, 1, '2022-01-24 16:20:59', '2022-02-08 06:19:35');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_language`
--

CREATE TABLE `tbl_language` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_language`
--

INSERT INTO `tbl_language` (`id`, `name`, `created_at`, `updated_at`) VALUES
(2, 'Hindi', '2022-01-20 17:55:02', '2022-01-27 04:17:59'),
(3, 'English', '2022-01-27 04:18:14', '2022-04-05 00:31:46');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_notification`
--

CREATE TABLE `tbl_notification` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_notification`
--

INSERT INTO `tbl_notification` (`id`, `title`, `description`, `image`, `created_at`, `updated_at`) VALUES
(3, 'dgdsg', 'dsgsdgsdg', '1643561418.jpg', '2022-01-30 11:20:18', '2022-01-30 11:20:18'),
(7, 'b', 'b', '', '2022-01-31 06:54:57', '2022-01-31 06:54:57');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_page`
--

CREATE TABLE `tbl_page` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_page`
--

INSERT INTO `tbl_page` (`id`, `name`, `title`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'about-us', 'About Us', 'About Us', '1', '2022-01-24 16:48:23', '2022-01-24 16:48:23'),
(2, 'privacy-policy', 'Privacy Policy', 'PRIVACY POLICYPRIVACY POLICYPRIVACY POLICYPRIVACY POLICY', '1', '2022-01-24 16:48:45', '2022-01-24 16:48:45'),
(3, 'terms-and-conditions', 'terms-and-conditions', 'Desripation', '1', '2022-01-24 16:49:02', '2022-04-05 03:20:10');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_recent_song`
--

CREATE TABLE `tbl_recent_song` (
  `id` int(11) NOT NULL,
  `song_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_setting`
--

CREATE TABLE `tbl_setting` (
  `id` int(11) NOT NULL,
  `key` text NOT NULL,
  `value` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_setting`
--

INSERT INTO `tbl_setting` (`id`, `key`, `value`, `created_at`, `updated_at`) VALUES
(1, 'host_email', 'support@gmail.com', '2022-01-20 18:12:30', '2022-09-14 10:39:22'),
(2, 'app_name', 'Radio 1', '2022-01-20 18:12:30', '2022-04-05 04:19:01'),
(3, 'app_desripation', 'App Description App Description App Description App Description App Description App Description', '2022-01-20 18:16:42', '2022-09-14 10:39:43'),
(4, 'app_logo', '1649152146.png', '2022-01-20 18:16:42', '2022-04-05 04:19:06'),
(5, 'Author', 'google.com', '2022-01-20 18:16:42', '2022-09-14 10:39:28'),
(6, 'contact', '+91 7984859403', '2022-01-20 18:16:42', '2022-01-20 18:16:42'),
(7, 'onesignal_apid', 'Test Data dgg 1', '2022-01-30 11:42:43', '2022-04-05 03:38:17'),
(8, 'onesignal_rest_key', 'Okaydsgsdgsdg 1', '2022-01-30 11:42:43', '2022-04-05 03:38:17'),
(9, 'terms-and-conditions', 'page/terms-and-conditions', '2022-01-31 03:49:37', '2022-01-31 03:50:30'),
(10, 'privacy-policy', 'page/privacy-policy', '2022-01-31 03:49:37', '2022-01-31 03:50:27'),
(11, 'about-us', 'page/about-us', '2022-01-31 03:50:22', '2022-01-31 03:50:22');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_song`
--

CREATE TABLE `tbl_song` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `artist_id` int(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `song_url` text NOT NULL,
  `view` int(11) NOT NULL DEFAULT 0,
  `status` enum('0','1') NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_song`
--

INSERT INTO `tbl_song` (`id`, `category_id`, `language_id`, `artist_id`, `city_id`, `name`, `image`, `song_url`, `view`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 3, 1, 3, 'Pop song', '', '1.mp3', 1, '1', '2022-01-24 16:02:53', '2022-02-03 09:34:13'),
(3, 2, 2, 1, 1, 'hhhhhhh hhhhhhhh', '1643288232.jpg', 'sd ggdsgdsg', 0, '1', '2022-01-27 07:27:12', '2022-02-03 09:32:14'),
(4, 1, 3, 1, 4, 'sgsdgsdg', '1643346395.jpg', 'o_1fqfhqhg2u941cjompj1ud318gm7.mp4', 0, '1', '2022-01-27 23:36:35', '2022-02-03 04:33:19'),
(6, 1, 2, 1, 3, '111111111', '1649147011.jpg', 'o_1fvsdcos21d4516df1li31q871ib7.jpg', 0, '1', '2022-04-05 02:53:31', '2022-04-05 02:57:56');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `mobile` varchar(25) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `type` enum('1','2','3','4') NOT NULL DEFAULT '1' COMMENT '1- Facebook , 2- Google ,3- OTP',
  `status` enum('0','1') NOT NULL DEFAULT '1',
  `coin_balance` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `name`, `mobile`, `email`, `password`, `image`, `type`, `status`, `coin_balance`, `created_at`, `updated_at`) VALUES
(19, 'Sanjay V Patel', '09879878978', 'sanjay@gmail.com', '', '1643796512213-2.jpg', '1', '1', 0, '2022-01-28 11:50:25', '2022-04-08 08:20:43'),
(21, 'Sanjay 123', '9876543210', 'abc@gmail.com', '$2y$10$xFavP2cswLQ2twr.BjWWc.Qllkze0DwUE/YIMifA35jI8IiX3Iave', '1643796502688-3.jpg', '2', '1', 0, '2022-03-16 04:13:56', '2022-08-13 09:31:28');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_notification_tracking`
--

CREATE TABLE `tbl_user_notification_tracking` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `notification_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_user_notification_tracking`
--

INSERT INTO `tbl_user_notification_tracking` (`id`, `user_id`, `notification_id`, `created_at`) VALUES
(3, 17, 3, '2022-08-13 10:55:48'),
(4, 17, 7, '2022-08-13 11:52:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_email_unique` (`email`);

--
-- Indexes for table `tbl_artist`
--
ALTER TABLE `tbl_artist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_banner`
--
ALTER TABLE `tbl_banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_city`
--
ALTER TABLE `tbl_city`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_favorite`
--
ALTER TABLE `tbl_favorite`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_language`
--
ALTER TABLE `tbl_language`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_notification`
--
ALTER TABLE `tbl_notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_page`
--
ALTER TABLE `tbl_page`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_recent_song`
--
ALTER TABLE `tbl_recent_song`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_setting`
--
ALTER TABLE `tbl_setting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_song`
--
ALTER TABLE `tbl_song`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user_notification_tracking`
--
ALTER TABLE `tbl_user_notification_tracking`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_artist`
--
ALTER TABLE `tbl_artist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_banner`
--
ALTER TABLE `tbl_banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_city`
--
ALTER TABLE `tbl_city`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_favorite`
--
ALTER TABLE `tbl_favorite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_language`
--
ALTER TABLE `tbl_language`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_notification`
--
ALTER TABLE `tbl_notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_page`
--
ALTER TABLE `tbl_page`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_recent_song`
--
ALTER TABLE `tbl_recent_song`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_setting`
--
ALTER TABLE `tbl_setting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_song`
--
ALTER TABLE `tbl_song`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `tbl_user_notification_tracking`
--
ALTER TABLE `tbl_user_notification_tracking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
