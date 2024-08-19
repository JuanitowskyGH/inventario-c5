-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-08-2024 a las 22:53:18
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

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
-- Estructura de tabla para la tabla `pruebas`
--

CREATE TABLE `pruebas` (
  `id` int(11) NOT NULL,
  `numero` int(50) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pruebas`
--

INSERT INTO `pruebas` (`id`, `numero`, `tipo`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 2342423, 'dwad', 'adawd', '0000-00-00', '0000-00-00'),
(2, 482125, 'dwada', 'dawd', '2024-08-14', '2024-08-14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registers`
--

CREATE TABLE `registers` (
  `id` int(11) NOT NULL,
  `etiqueta` varchar(255) NOT NULL,
  `numAnterior` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `marca` varchar(255) NOT NULL,
  `modelo` varchar(255) NOT NULL,
  `serie` varchar(255) NOT NULL,
  `departamento` varchar(255) NOT NULL,
  `responsable` varchar(255) NOT NULL,
  `ubicacion` varchar(255) NOT NULL,
  `edicion` varchar(255) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registers`
--

INSERT INTO `registers` (`id`, `etiqueta`, `numAnterior`, `tipo`, `descripcion`, `marca`, `modelo`, `serie`, `departamento`, `responsable`, `ubicacion`, `edicion`, `imagen`, `createdAt`, `updatedAt`) VALUES
(1, '4548521245', 'PC48521', 'Antena', 'Antena DAWA funcional', 'DAWA', 'R5000', '5415412', 'C5i', 'Pablo Contreras', 'Sistemas', '2020', 'public\\registers\\1723748893208-742939024.jpg', '2024-08-15', '2024-08-15'),
(3, '18415348', 'RT458512', 'Router', 'Router CISCO con problemas', 'Cisco', 'RT-1483512', '481354851615123', 'C5i', 'Alguien', 'Almacen', '2018', 'public\\registers\\1723751164154-528600606.jpg', '2024-08-15', '2024-08-15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Lector', '2024-08-16', '2024-08-16'),
(2, 'Moderador', '2024-08-16', '2024-08-16'),
(3, 'Admimistrador', '2024-08-16', '2024-08-16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidop` varchar(50) NOT NULL,
  `apellidom` varchar(50) NOT NULL,
  `username` varchar(100) NOT NULL,
  `permisos` varchar(50) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellidop`, `apellidom`, `username`, `permisos`, `imagen`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Juan', 'Vazquez', 'Contreras', 'juanadmin', 'Super Administrador', 'no hay', '', '0000-00-00', '0000-00-00'),
(2, 'Prueba', 'Form', 'Submit', 'pfs', 'Super Administrador', NULL, '', '2024-07-22', '2024-08-14'),
(5, 'Ggs', 'dawd', 'dawd', 'dwad', 'Lector', NULL, '', '2024-07-22', '2024-07-22'),
(6, 'dwad', 'awd', 'dawd', 'dawd', 'Administrador', NULL, '', '2024-07-22', '2024-07-23'),
(7, 'awd', 'awdad', 'awd', 'dwad', 'Super Administrador', NULL, '', '2024-07-22', '2024-07-23'),
(8, 'fesf', 'fsef', 'fsefesf', 'sfsef', 'Administrador', NULL, '', '2024-07-22', '2024-07-22'),
(9, 'dwde', 'afa', 'dawdaw', 'sawd', 'Super Administrador', NULL, '', '2024-07-22', '2024-07-22'),
(10, 'Juan', 'Pérez', 'López', 'juanperez', 'Super Administrador', 'ruta/a/imagen1.jpg', '', '0000-00-00', '0000-00-00'),
(11, 'Ana', 'Martínez', 'García', 'anamartinez', 'Administrador', 'ruta/a/imagen2.jpg', '', '0000-00-00', '0000-00-00'),
(12, 'Luis', 'Hernández', 'Sánchez', 'luishernandez', 'Lector', 'ruta/a/imagen3.jpg', '', '0000-00-00', '0000-00-00'),
(13, 'Carlos', 'Navarro', 'Mendez', 'carlosnav', 'Super Administrador', 'ruta/a/imagen4.jpg', '', '0000-00-00', '0000-00-00'),
(14, 'María', 'Gómez', 'Fernández', 'mariagomez', 'Administrador', 'ruta/a/imagen5.jpg', '', '0000-00-00', '0000-00-00'),
(15, 'Jorge', 'Ruiz', 'Díaz', 'jorgeruiz', 'Lector', 'ruta/a/imagen6.jpg', '', '0000-00-00', '0000-00-00'),
(16, 'Sofía', 'Moreno', 'Jiménez', 'sofiamoreno', 'Super Administrador', 'ruta/a/imagen7.jpg', '', '0000-00-00', '0000-00-00'),
(17, 'Ricardo', 'Morales', 'López', 'ricardomorales', 'Administrador', 'ruta/a/imagen8.jpg', '', '0000-00-00', '0000-00-00'),
(18, 'Elena', 'Castro', 'Martínez', 'elenacastro', 'Lector', 'ruta/a/imagen9.jpg', '', '0000-00-00', '0000-00-00'),
(19, 'Miguel', 'Ángel', 'Sánchez', 'miguelangel', 'Super Administrador', 'ruta/a/imagen10.jpg', '', '0000-00-00', '0000-00-00'),
(20, 'Laura', 'García', 'Torres', 'lauragarcia', 'Administrador', 'ruta/a/imagen11.jpg', '', '0000-00-00', '0000-00-00'),
(21, 'Roberto', 'Fernández', 'Gutiérrez', 'robertofernandez', 'Lector', 'ruta/a/imagen12.jpg', '', '0000-00-00', '0000-00-00'),
(22, 'Patricia', 'López', 'Ruiz', 'patricialopez', 'Super Administrador', 'ruta/a/imagen13.jpg', '', '0000-00-00', '0000-00-00'),
(23, 'Esto', 'deberia', 'funcionar', 'siono', 'Lector', NULL, '', '2024-08-13', '2024-08-13'),
(24, 'otra', 'prueba', 'gg', 'dawdada', 'Administrador', NULL, '', '2024-08-13', '2024-08-13'),
(25, 'Prueba', 'User', 'xd', 'dwdaawd', 'Lector', NULL, '', '2024-08-14', '2024-08-14'),
(26, 'yo', 'dawd', 'dw', 'dwd', 'Administrador', NULL, '', '2024-08-14', '2024-08-14');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pruebas`
--
ALTER TABLE `pruebas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `registers`
--
ALTER TABLE `registers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pruebas`
--
ALTER TABLE `pruebas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `registers`
--
ALTER TABLE `registers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
