-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-08-2024 a las 23:36:18
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
-- Estructura de tabla para la tabla `auth`
--

CREATE TABLE `auth` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `pass` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(1, '5452', '25412', 'PC', 'Computadora de prueba', 'HP', 'ST5', '2548112', 'C5i', 'Yo', 'Sistemas', '2023', NULL, '2024-08-14', '2024-08-14'),
(2, '245215', 'DWAD521', 'Escritorio', 'Una mesa de madera resistente', 'DS', 'DS-02', '454823364', 'C5i', 'Pablo Contreras', 'Sistemas', '2019', 'ruta/a/imagen1.jpg', '0000-00-00', '2024-08-14'),
(3, 'Etiqueta2', 'NumAnterior2', 'Tipo2', 'Descripcion2', 'Marca2', 'Modelo2', 'Serie2', 'Departamento2', 'Responsable2', 'Ubicacion2', 'Edicion2', 'ruta/a/imagen2.jpg', '0000-00-00', '0000-00-00'),
(4, 'Etiqueta3', 'NumAnterior3', 'Tipo3', 'Descripcion3', 'Marca3', 'Modelo3', 'Serie3', 'Departamento3', 'Responsable3', 'Ubicacion3', 'Edicion3', 'ruta/a/imagen3.jpg', '0000-00-00', '0000-00-00'),
(5, 'Etiqueta4', 'NumAnterior4', 'Tipo4', 'Descripcion4', 'Marca4', 'Modelo4', 'Serie4', 'Departamento4', 'Responsable4', 'Ubicacion4', 'Edicion4', 'ruta/a/imagen4.jpg', '0000-00-00', '0000-00-00'),
(6, 'Etiqueta5', 'NumAnterior5', 'Tipo5', 'Descripcion5', 'Marca5', 'Modelo5', 'Serie5', 'Departamento5', 'Responsable5', 'Ubicacion5', 'Edicion5', 'ruta/a/imagen5.jpg', '0000-00-00', '0000-00-00'),
(7, 'Etiqueta6', 'NumAnterior6', 'Tipo6', 'Descripcion6', 'Marca6', 'Modelo6', 'Serie6', 'Departamento6', 'Responsable6', 'Ubicacion6', 'Edicion6', 'ruta/a/imagen6.jpg', '0000-00-00', '0000-00-00'),
(8, 'Etiqueta7', 'NumAnterior7', 'Tipo7', 'Descripcion7', 'Marca7', 'Modelo7', 'Serie7', 'Departamento7', 'Responsable7', 'Ubicacion7', 'Edicion7', 'ruta/a/imagen7.jpg', '0000-00-00', '0000-00-00'),
(9, 'Etiqueta8', 'NumAnterior8', 'Tipo8', 'Descripcion8', 'Marca8', 'Modelo8', 'Serie8', 'Departamento8', 'Responsable8', 'Ubicacion8', 'Edicion8', 'ruta/a/imagen8.jpg', '0000-00-00', '0000-00-00'),
(10, 'Etiqueta9', 'NumAnterior9', 'Tipo9', 'Descripcion9', 'Marca9', 'Modelo9', 'Serie9', 'Departamento9', 'Responsable9', 'Ubicacion9', 'Edicion9', 'ruta/a/imagen9.jpg', '0000-00-00', '0000-00-00'),
(11, 'Etiqueta10', 'NumAnterior10', 'Tipo10', 'Descripcion10', 'Marca10', 'Modelo10', 'Serie10', 'Departamento10', 'Responsable10', 'Ubicacion10', 'Edicion10', 'ruta/a/imagen10.jpg', '0000-00-00', '0000-00-00'),
(12, 'Etiqueta11', 'NumAnterior11', 'Tipo11', 'Descripcion11', 'Marca11', 'Modelo11', 'Serie11', 'Departamento11', 'Responsable11', 'Ubicacion11', 'Edicion11', 'ruta/a/imagen11.jpg', '0000-00-00', '0000-00-00'),
(13, 'Etiqueta12', 'NumAnterior12', 'Tipo12', 'Descripcion12', 'Marca12', 'Modelo12', 'Serie12', 'Departamento12', 'Responsable12', 'Ubicacion12', 'Edicion12', 'ruta/a/imagen12.jpg', '0000-00-00', '0000-00-00'),
(14, 'Etiqueta13', 'NumAnterior13', 'Tipo13', 'Descripcion13', 'Marca13', 'Modelo13', 'Serie13', 'Departamento13', 'Responsable13', 'Ubicacion13', 'Edicion13', 'ruta/a/imagen13.jpg', '0000-00-00', '0000-00-00'),
(15, 'Etiqueta14', 'NumAnterior14', 'Tipo14', 'Descripcion14', 'Marca14', 'Modelo14', 'Serie14', 'Departamento14', 'Responsable14', 'Ubicacion14', 'Edicion14', 'ruta/a/imagen14.jpg', '0000-00-00', '0000-00-00'),
(16, 'Etiqueta15', 'NumAnterior15', 'Tipo15', 'Descripcion15', 'Marca15', 'Modelo15', 'Serie15', 'Departamento15', 'Responsable15', 'Ubicacion15', 'Edicion15', 'ruta/a/imagen15.jpg', '0000-00-00', '0000-00-00'),
(17, 'Etiqueta16', 'NumAnterior16', 'Tipo16', 'Descripcion16', 'Marca16', 'Modelo16', 'Serie16', 'Departamento16', 'Responsable16', 'Ubicacion16', 'Edicion16', 'ruta/a/imagen16.jpg', '0000-00-00', '0000-00-00'),
(18, 'Etiqueta17', 'NumAnterior17', 'Tipo17', 'Descripcion17', 'Marca17', 'Modelo17', 'Serie17', 'Departamento17', 'Responsable17', 'Ubicacion17', 'Edicion17', 'ruta/a/imagen17.jpg', '0000-00-00', '0000-00-00'),
(19, 'Etiqueta18', 'NumAnterior18', 'Tipo18', 'Descripcion18', 'Marca18', 'Modelo18', 'Serie18', 'Departamento18', 'Responsable18', 'Ubicacion18', 'Edicion18', 'ruta/a/imagen18.jpg', '0000-00-00', '0000-00-00');

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
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellidop`, `apellidom`, `username`, `permisos`, `imagen`, `createdAt`, `updatedAt`) VALUES
(1, 'Juan', 'Vazquez', 'Contreras', 'juanadmin', 'Super Administrador', 'no hay', '0000-00-00', '0000-00-00'),
(2, 'Prueba', 'Form', 'Submit', 'pfs', 'Super Administrador', NULL, '2024-07-22', '2024-08-14'),
(5, 'Ggs', 'dawd', 'dawd', 'dwad', 'Lector', NULL, '2024-07-22', '2024-07-22'),
(6, 'dwad', 'awd', 'dawd', 'dawd', 'Administrador', NULL, '2024-07-22', '2024-07-23'),
(7, 'awd', 'awdad', 'awd', 'dwad', 'Super Administrador', NULL, '2024-07-22', '2024-07-23'),
(8, 'fesf', 'fsef', 'fsefesf', 'sfsef', 'Administrador', NULL, '2024-07-22', '2024-07-22'),
(9, 'dwde', 'afa', 'dawdaw', 'sawd', 'Super Administrador', NULL, '2024-07-22', '2024-07-22'),
(10, 'Juan', 'Pérez', 'López', 'juanperez', 'Super Administrador', 'ruta/a/imagen1.jpg', '0000-00-00', '0000-00-00'),
(11, 'Ana', 'Martínez', 'García', 'anamartinez', 'Administrador', 'ruta/a/imagen2.jpg', '0000-00-00', '0000-00-00'),
(12, 'Luis', 'Hernández', 'Sánchez', 'luishernandez', 'Lector', 'ruta/a/imagen3.jpg', '0000-00-00', '0000-00-00'),
(13, 'Carlos', 'Navarro', 'Mendez', 'carlosnav', 'Super Administrador', 'ruta/a/imagen4.jpg', '0000-00-00', '0000-00-00'),
(14, 'María', 'Gómez', 'Fernández', 'mariagomez', 'Administrador', 'ruta/a/imagen5.jpg', '0000-00-00', '0000-00-00'),
(15, 'Jorge', 'Ruiz', 'Díaz', 'jorgeruiz', 'Lector', 'ruta/a/imagen6.jpg', '0000-00-00', '0000-00-00'),
(16, 'Sofía', 'Moreno', 'Jiménez', 'sofiamoreno', 'Super Administrador', 'ruta/a/imagen7.jpg', '0000-00-00', '0000-00-00'),
(17, 'Ricardo', 'Morales', 'López', 'ricardomorales', 'Administrador', 'ruta/a/imagen8.jpg', '0000-00-00', '0000-00-00'),
(18, 'Elena', 'Castro', 'Martínez', 'elenacastro', 'Lector', 'ruta/a/imagen9.jpg', '0000-00-00', '0000-00-00'),
(19, 'Miguel', 'Ángel', 'Sánchez', 'miguelangel', 'Super Administrador', 'ruta/a/imagen10.jpg', '0000-00-00', '0000-00-00'),
(20, 'Laura', 'García', 'Torres', 'lauragarcia', 'Administrador', 'ruta/a/imagen11.jpg', '0000-00-00', '0000-00-00'),
(21, 'Roberto', 'Fernández', 'Gutiérrez', 'robertofernandez', 'Lector', 'ruta/a/imagen12.jpg', '0000-00-00', '0000-00-00'),
(22, 'Patricia', 'López', 'Ruiz', 'patricialopez', 'Super Administrador', 'ruta/a/imagen13.jpg', '0000-00-00', '0000-00-00'),
(23, 'Esto', 'deberia', 'funcionar', 'siono', 'Lector', NULL, '2024-08-13', '2024-08-13'),
(24, 'otra', 'prueba', 'gg', 'dawdada', 'Administrador', NULL, '2024-08-13', '2024-08-13'),
(25, 'Prueba', 'User', 'xd', 'dwdaawd', 'Lector', NULL, '2024-08-14', '2024-08-14'),
(26, 'yo', 'dawd', 'dw', 'dwd', 'Administrador', NULL, '2024-08-14', '2024-08-14');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
