-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-07-2024 a las 07:38:35
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inventario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidop` varchar(50) NOT NULL,
  `apellidom` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `permisos` varchar(50) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellidop`, `apellidom`, `username`, `permisos`, `imagen`, `createdAt`, `updatedAt`) VALUES
(1, 'Juan', 'Perez', 'Gomez', 'jperez', 'Super Administrador', 'img1.png', '0000-00-00', '0000-00-00'),
(2, 'Maria', 'Lopez', 'Martinez', 'mlopez', 'Super Administrador', 'img2.png', '0000-00-00', '2024-07-23'),
(3, 'Carlos', 'Garcia', 'Rodriguez', 'cgarcia', 'Administrador', 'img3.png', '0000-00-00', '0000-00-00'),
(4, 'Ana', 'Sanchez', 'Fernandez', 'asanchez', 'Administrador', 'img4.png', '0000-00-00', '2024-07-23'),
(5, 'Luis', 'Hernandez', 'Gonzalez', 'lhernandez', 'Super Administrador', 'img5.png', '0000-00-00', '0000-00-00'),
(6, 'Laura', 'Martinez', 'Lopez', 'lmartinez', 'Lector', 'img6.png', '0000-00-00', '0000-00-00'),
(7, 'Jorge', 'Rodriguez', 'Perez', 'jrodriguez', 'Administrador', 'img7.png', '0000-00-00', '0000-00-00'),
(8, 'Elena', 'Gomez', 'Garcia', 'egomez', 'Lector', 'img8.png', '0000-00-00', '0000-00-00'),
(9, 'Miguel', 'Fernandez', 'Martinez', 'mfernandez', 'Super Administrador', 'img9.png', '0000-00-00', '0000-00-00'),
(10, 'Sofia', 'Gonzalez', 'Hernandez', 'sgonzalez', 'Lector', 'img10.png', '0000-00-00', '0000-00-00'),
(11, 'Carlos', 'Garcia', 'Lopez', 'cgarcia', 'Lector', 'img11.jpg', '0000-00-00', '0000-00-00'),
(12, 'Laura', 'Fernandez', 'Santos', 'lfernandez', 'Administrador', 'img12.jpg', '0000-00-00', '0000-00-00'),
(13, 'Miguel', 'Martinez', 'Rodriguez', 'mmartinez', 'Super Administrador', 'img13.jpg', '0000-00-00', '0000-00-00'),
(14, 'Ana', 'Morales', 'Vargas', 'amorales', 'Lector', 'img14.jpg', '0000-00-00', '0000-00-00'),
(15, 'Jose', 'Gutierrez', 'Ramos', 'jgutierrez', 'Administrador', 'img15.jpg', '0000-00-00', '0000-00-00'),
(16, 'Elena', 'Sanchez', 'Martinez', 'esanchez', 'Super Administrador', 'img16.jpg', '0000-00-00', '0000-00-00'),
(17, 'Luis', 'Perez', 'Gomez', 'lperez', 'Lector', 'img17.jpg', '0000-00-00', '0000-00-00'),
(18, 'Marina', 'Castro', 'Hernandez', 'mcastro', 'Administrador', 'img18.jpg', '0000-00-00', '0000-00-00'),
(19, 'David', 'Lopez', 'Martinez', 'dlopez', 'Super Administrador', 'img19.jpg', '0000-00-00', '0000-00-00'),
(20, 'Paula', 'Torres', 'Jimenez', 'ptorres', 'Lector', 'img20.jpg', '0000-00-00', '0000-00-00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
