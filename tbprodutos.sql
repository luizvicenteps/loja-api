-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 09-Out-2017 às 01:40
-- Versão do servidor: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdloja`
--
CREATE Database `bdloja`;
USE `bdloja`;
-- --------------------------------------------------------

--
-- Estrutura da tabela `tbprodutos`
--

DROP TABLE IF EXISTS `tbprodutos`;
CREATE TABLE IF NOT EXISTS `tbprodutos` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `Descricao` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `Valor` float NOT NULL,
  `ImageUrl` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `tbprodutos`
--

INSERT INTO `tbprodutos` (`Id`, `Nome`, `Descricao`, `Valor`, `ImageUrl`) VALUES
(23, 'Mouse Usb Azul', 'Mouse sem fio', 239.99, 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1h5LT?ver=e12a&q=60&m=6&h=423&w=752&b=%23FFFFFFFF&f=jpg&o=f'),
(26, 'Teclado wireless Microsoft', 'Novo Teclado', 129, 'http://compass.microsoft.com/assets/26/23/26239bc9-f541-4a7a-8842-68bb8b25da21.jpg?n=pop1.jpg'),
(37, 'Cadeira Gamer', 'Confortável', 599.99, 'https://www.queropreco.com/media/catalog/product/cache/1/thumbnail/300x400/9df78eab33525d08d6e5fb8d27136e95/c/a/cadeira_gamer_akracing_wolf_red_2_.jpg'),
(38, 'Mesa de Canto', 'Vários níveis e furação.', 1099.99, 'http://via.placeholder.com/850x2350'),
(39, 'Fone Gamer', 'Graves acentuados', 459.9, 'https://resources.rocketz.com.br/products/1528/product_image/big_ac6e86dfb867a2c91ba2de9ae22694da'),
(40, 'Monitor Ultra Wide', 'Brilho intenso', 2899, 'https://images1.kabum.com.br/produtos/fotos/78761/78761_index_g.jpg'),
(41, 'Iluminação de LED', 'Perfeita para mesas gamers', 99, 'http://via.placeholder.com/950x150'),
(42, 'Controle USB', 'Divirta-se com todos os seus jogos preferidos.', 29.9, 'http://via.placeholder.com/350x550');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
