-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-05-2023 a las 17:54:25
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `plan_today`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` bigint(20) NOT NULL,
  `usuario_id` bigint(20) NOT NULL,
  `plan_id` bigint(20) NOT NULL,
  `contenido` text NOT NULL,
  `fecha_creacion` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `usuario_id`, `plan_id`, `contenido`, `fecha_creacion`) VALUES
(4, 4, 2, 'Me encantaría ir a esta excursión!', '2023-04-09 15:16:17'),
(5, 5, 3, 'Felicidades Ana! Qué linda fiesta de cumpleaños!', '2023-04-09 15:16:19'),
(7, 7, 4, 'Este museo es realmente interesante!', '2023-04-09 15:17:26'),
(8, 8, 5, 'El restaurante tiene muy buena pinta!', '2023-04-09 15:17:35'),
(9, 6, 6, 'Ya quiero que llegue el viaje a la playa!', '2023-04-09 15:17:45'),
(11, 8, 4, 'Este es un comentario corto.', '2023-05-24 22:22:07'),
(12, 6, 4, 'Un comentario un poco más largo que los anteriores.', '2023-05-24 22:22:07'),
(13, 7, 4, 'Este comentario tiene una longitud media.', '2023-05-24 22:22:07'),
(14, 5, 4, 'Aquí va otro comentario corto.', '2023-05-24 22:22:07'),
(15, 10, 4, 'Este comentario es bastante largo y contiene varias frases para probar la visualización adecuada en la interfaz.', '2023-05-24 22:22:07'),
(16, 4, 4, 'Otro comentario corto.', '2023-05-24 22:22:07'),
(17, 5, 4, 'Un comentario más extenso que los demás y con una estructura de párrafo.', '2023-05-24 22:22:07'),
(18, 6, 4, 'Comentario corto.', '2023-05-24 22:22:07'),
(19, 7, 4, 'Un comentario largo con múltiples oraciones para verificar cómo se muestra en la aplicación.', '2023-05-24 22:22:07'),
(20, 8, 4, 'Comentario corto y conciso.', '2023-05-24 22:22:07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `id` bigint(20) NOT NULL,
  `plan_id` bigint(20) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`id`, `plan_id`, `url`) VALUES
(1, 2, 'https://example.com/image1.jpg'),
(2, 3, 'https://example.com/image2.jpg'),
(3, 4, 'https://example.com/image3.jpg'),
(4, 5, 'https://example.com/image4.jpg'),
(5, 6, 'https://example.com/image5.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `likes`
--

CREATE TABLE `likes` (
  `plan_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `likes`
--

INSERT INTO `likes` (`plan_id`, `usuario_id`) VALUES
(2, 5),
(2, 12),
(3, 5),
(3, 12),
(4, 6),
(5, 5),
(6, 5),
(6, 6),
(6, 11),
(6, 12),
(7, 5),
(7, 6),
(8, 5),
(8, 6),
(8, 11),
(9, 12),
(10, 5),
(10, 11),
(11, 5),
(11, 6),
(11, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `participantes`
--

CREATE TABLE `participantes` (
  `usuario_id` int(11) NOT NULL,
  `plan_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `participantes`
--

INSERT INTO `participantes` (`usuario_id`, `plan_id`) VALUES
(6, 5),
(6, 7),
(6, 10),
(6, 11),
(11, 2),
(12, 2),
(12, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planes`
--

CREATE TABLE `planes` (
  `id` bigint(20) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `categoria` varchar(20) NOT NULL,
  `fecha_hora` datetime NOT NULL,
  `ubicacion` varchar(255) NOT NULL,
  `creador_id` bigint(20) NOT NULL,
  `participantes` int(35) NOT NULL,
  `likes` int(10) NOT NULL,
  `comentarios` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `planes`
--

INSERT INTO `planes` (`id`, `titulo`, `descripcion`, `categoria`, `fecha_hora`, `ubicacion`, `creador_id`, `participantes`, `likes`, `comentarios`) VALUES
(2, 'Viaje a la playa', 'Viaje de fin de semana a la playa', 'arte', '2023-05-13 12:00:00', 'Playa del Carmen', 4, 83, 140, 17),
(3, 'Excursión al campo', 'Día de campo en el campo', 'arte', '2023-06-18 10:00:00', 'Campo de Flores', 5, 124, 90, 0),
(4, 'Fiesta de cumpleaños', 'Celebración del cumpleaños de Ana', 'arte', '2023-07-15 20:00:00', 'Casa de Ana', 6, 129, 58, 0),
(5, 'Visita al museo', 'Visita guiada al museo de historia', 'arte', '2023-08-22 14:00:00', 'Museo de Historia', 7, 96, 19, 0),
(6, 'Cena en restaurante', 'Cena en restaurante de comida italiana', 'arte', '2023-09-17 19:00:00', 'Restaurante Il Giardino', 8, 87, 8, 0),
(7, 'Viaje a la montaña', 'Fin de semana de camping y senderismo en las montañas de Sierra Nevada. La experiencia incluirá caminatas en senderos naturales y vistas panorámicas del paisaje montañoso.', 'arte', '2023-05-20 08:00:00', 'Sierra Nevada', 4, 86, 12, 0),
(8, 'Noche de juegos de mesa', 'Noche de juegos de mesa con amigos en casa. La experiencia incluirá juegos clásicos como Monopoly, Risk, y Scrabble, y también habrá tiempo para juegos de cartas como Poker y Bridge.', 'deporte', '2023-06-10 19:00:00', 'Casa de Juan', 4, 84, 7, 0),
(9, 'Tour gastronómico', 'Tour gastronómico por los mejores restaurantes de la ciudad. La experiencia incluirá degustaciones de comida internacional, cócteles y vino, y un recorrido guiado por los barrios más emblemáticos de la ciudad.', 'deporte', '2023-07-01 13:00:00', 'Ciudad de México', 5, 80, -1, 0),
(10, 'Cine al aire libre', 'Noche de cine al aire libre en el parque. La experiencia incluirá la proyección de una película clásica en una pantalla grande, snacks y bebidas, y un ambiente relajado y acogedor.', 'deporte', '2023-08-05 20:00:00', 'Parque Chapultepec', 6, 82, 8, 0),
(11, 'Día de spa', 'Día de relajación y rejuvenecimiento en el spa. La experiencia incluirá masajes, tratamientos faciales y corporales, y acceso a las instalaciones de sauna y jacuzzi.', 'deporte', '2023-09-02 11:00:00', 'Spa Holístico', 7, 86, 4, 0),
(12, 'Curso de cocina', 'Curso de cocina en casa de un chef profesional. La experiencia incluirá una clase práctica de cocina, donde aprenderás a preparar platillos gourmet, y una cena de tres tiempos con vino incluido.', 'deporte', '2023-10-07 18:00:00', 'Casa del Chef', 8, 0, 0, 0),
(13, 'Tarde de arte', 'Tarde de arte en el museo. La experiencia incluirá una visita guiada a la exposición de arte contemporáneo, seguida de una sesión de dibujo y pintura en vivo.', 'deporte', '2023-11-11 15:00:00', 'Museo de Arte Moderno', 5, 0, 0, 0),
(14, 'Paseo en bote', 'Paseo en bote por el lago. La experiencia incluirá un recorrido panorámico por el lago, con vistas espectaculares del paisaje natural, y paradas para nadar y tomar fotografías.', 'fiesta', '2023-12-16 10:00:00', 'Lago de Chapala', 6, 0, 0, 0),
(15, 'Fiesta de fin de año', 'Celebración de fin de año en grande. La experiencia incluirá música en vivo, comida y bebidas de alta calidad, y un ambiente festivo y elegante.', 'fiesta', '2023-12-31 21:00:00', 'Centro de Eventos', 7, 0, 0, 0),
(16, 'Paseo en bote', 'Disfruta de un paseo en bote por la bahía', 'fiesta', '2023-04-25 10:00:00', 'Bahía de Cartagena', 4, 0, 0, 0),
(17, 'Excursión a la montaña', 'Ven y disfruta de una excursión a la montaña con amigos', 'fiesta', '2023-05-01 08:00:00', 'Sierra Nevada', 5, 0, 0, 0),
(18, 'Visita al museo', 'Disfruta de una visita al museo de arte moderno', 'fiesta', '2023-04-30 15:00:00', 'Calle de Alcalá, Madrid', 6, 0, 0, 0),
(19, 'Cena con amigos', 'Disfruta de una cena con amigos en un buen restaurante', 'fiesta', '2023-05-02 20:00:00', 'Restaurante El Cielo', 7, 0, 0, 0),
(20, 'Fiesta en la playa', 'Ven a disfrutar de una fiesta en la playa con buena música y amigos', 'gastronomía', '2023-05-07 14:00:00', 'Playa de la Barceloneta', 8, 0, 0, 0),
(21, 'Ciclismo en la montaña', 'Disfruta de una aventura en bicicleta de montaña', 'gastronomía', '2023-05-08 09:00:00', 'Sierra de Guadarrama', 4, 0, 0, 0),
(22, 'Clases de yoga', 'Ven a relajarte y practicar yoga en nuestro estudio', 'gastronomía', '2023-05-03 18:00:00', 'Calle Mayor, Barcelona', 5, 0, 0, 0),
(23, 'Cata de vinos', 'Disfruta de una cata de vinos en la bodega más reconocida de la región', 'gastronomía', '2023-05-04 16:00:00', 'Bodega La Rioja', 6, 0, 0, 0),
(24, 'Partido de fútbol', 'Ven a disfrutar de un partido de fútbol con amigos', 'gastronomía', '2023-05-05 17:00:00', 'Estadio Santiago Bernabéu', 7, 0, 0, 0),
(25, 'Concierto de música', 'Disfruta de un concierto en vivo con tus amigos', 'gastronomía', '2023-05-06 21:00:00', 'WiZink Center, Madrid', 8, 0, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) NOT NULL,
  `nombre_usuario` varchar(255) NOT NULL,
  `nombre_completo` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `fecha_registro` timestamp NULL DEFAULT current_timestamp(),
  `avatar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre_usuario`, `nombre_completo`, `correo`, `password`, `admin`, `fecha_registro`, `avatar`) VALUES
(4, 'juanpg', 'Juan Pérez González', 'juanpg@gmail.com', 'clave123', 0, '2023-04-07 17:05:33', ''),
(5, 'marialg', 'María López García', 'marialg@hotmail.com', 'contraseña456', 0, '2023-04-07 17:05:33', ''),
(6, 'pedromr', 'Pedro Martínez Rodríguez', 'pedromr@yahoo.com', 'password789', 0, '2023-04-07 17:05:33', ''),
(7, 'anagarcia', 'Ana Garcia', 'ana.garcia@example.com', 'password4', 0, '2023-04-09 15:11:26', ''),
(8, 'pedrogomez', 'Pedro Gomez', 'pedro.gomez@example.com', 'password3', 0, '2023-04-09 15:11:43', ''),
(10, 'testManu', 'testManu', 'correo@gmail.com', '123', 0, '2023-05-11 21:09:09', 'default'),
(11, 'manumillan', 'Manuel Millán', 'manue@gmail.com', '1234', 0, '2023-05-18 17:15:52', 'default'),
(12, 'm', 'm', 'm@gmail.com', '1234', 0, '2023-05-23 16:19:41', 'default'),
(13, 'a', 'a', 'a@gmail.com', '123', 0, '2023-05-25 17:41:15', 'default');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_planes`
--

CREATE TABLE `usuarios_planes` (
  `usuario_id` bigint(20) NOT NULL,
  `plan_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `plan_id` (`plan_id`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `plan_id` (`plan_id`);

--
-- Indices de la tabla `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`plan_id`,`usuario_id`);

--
-- Indices de la tabla `participantes`
--
ALTER TABLE `participantes`
  ADD PRIMARY KEY (`usuario_id`,`plan_id`);

--
-- Indices de la tabla `planes`
--
ALTER TABLE `planes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `creador_id` (`creador_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD UNIQUE KEY `username` (`id`,`nombre_usuario`);

--
-- Indices de la tabla `usuarios_planes`
--
ALTER TABLE `usuarios_planes`
  ADD PRIMARY KEY (`usuario_id`,`plan_id`),
  ADD KEY `plan_id` (`plan_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `planes`
--
ALTER TABLE `planes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`plan_id`) REFERENCES `planes` (`id`);

--
-- Filtros para la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD CONSTRAINT `imagenes_ibfk_1` FOREIGN KEY (`plan_id`) REFERENCES `planes` (`id`);

--
-- Filtros para la tabla `planes`
--
ALTER TABLE `planes`
  ADD CONSTRAINT `planes_ibfk_1` FOREIGN KEY (`creador_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `usuarios_planes`
--
ALTER TABLE `usuarios_planes`
  ADD CONSTRAINT `usuarios_planes_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `usuarios_planes_ibfk_2` FOREIGN KEY (`plan_id`) REFERENCES `planes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
