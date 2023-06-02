-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-06-2023 a las 16:07:22
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
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'Deportes'),
(2, 'Arte'),
(3, 'Música'),
(4, 'Gastronomía'),
(5, 'Viajes'),
(6, 'Cine'),
(7, 'Fiestas'),
(8, 'Educación'),
(9, 'Otro');

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
(20, 8, 4, 'Comentario corto y conciso.', '2023-05-24 22:22:07'),
(21, 5, 5, 'comentario de prueba', '2023-05-29 16:23:12'),
(22, 12, 2, 'bombareen Cuenca', '2023-05-29 16:38:24'),
(23, 12, 2, 'illo illo los pelo del flequillo', '2023-05-29 16:43:23'),
(24, 12, 3, 'illoooooo', '2023-05-29 16:46:31'),
(25, 12, 3, 'eeeee', '2023-05-29 16:55:46'),
(26, 12, 3, 'illo que pasas', '2023-05-29 16:56:45'),
(27, 12, 3, 'hola', '2023-05-29 16:57:03'),
(28, 12, 3, 'illo', '2023-05-29 16:59:08'),
(29, 12, 5, 'iloo', '2023-05-29 17:01:23'),
(30, 12, 5, 'eee', '2023-05-29 17:02:14'),
(31, 12, 5, 'illooooooooo', '2023-05-29 17:05:10'),
(32, 12, 3, 'eeeeeee', '2023-05-29 18:11:38'),
(33, 12, 3, '', '2023-05-29 18:11:38'),
(34, 12, 3, 'hola', '2023-05-29 18:12:49'),
(35, 12, 3, 'eeeee', '2023-05-29 18:12:54'),
(36, 12, 3, 'holaaaa', '2023-05-29 18:14:25'),
(37, 5, 28, 'errrrrrrr', '2023-05-30 23:41:33'),
(38, 5, 28, 'eeeeee', '2023-05-30 23:44:47'),
(39, 5, 28, 'Beta vulgaris es una especie herbácea perteneciente a la subfamilia Betoideae de la familia Amaranthaceae. Económicamente, es el cultivo más importante del gran orden de los Caryophyllales.1​ Existen numerosas variedades cultivadas, algunas para su consumo como verdura, y otras como materia prima industrial. Entre las primeras están la Beta vulgaris var. cicla (acelgas o bledas) y la Beta vulgaris subsp. vulgaris var. conditiva (remolachas de huerto o betabel) y entre las segundas, la Beta vulgaris subsp. vulgaris var. altissima (betarraga o remolacha azucarera), la de mayor importancia para producir sacarosa; y la Beta vulgaris subsp. vulgaris var. crassa (beterava o remolacha forrajera), que es un cultivo de forraje. Por lo general se reconocen tres subespecies. Todos los cultivos pertenecen a la subespecie Beta vulgaris subsp. \"vulgaris\". El ancestro salvaje de la remolacha cultivada es la remolacha marina (Beta vulgaris subsp. maritima). En general, los nombres más comunes en castellano son acelga, remolacha, betabel, betarraga y beterraga. ', '2023-05-30 23:45:36'),
(40, 12, 30, 'illooooo', '2023-05-30 23:54:16'),
(41, 12, 31, 'illlooooooooooooooooooooooooooooo\n', '2023-05-30 23:58:53');

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
(3, 5),
(4, 5),
(4, 6),
(5, 5),
(6, 5),
(6, 6),
(6, 11),
(7, 5),
(7, 6),
(8, 5),
(8, 6),
(8, 11),
(9, 11),
(9, 12),
(10, 5),
(10, 11),
(11, 5),
(11, 6),
(11, 11),
(14, 5);

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
(5, 4),
(6, 7),
(6, 10),
(6, 14),
(6, 23),
(11, 2),
(12, 2),
(12, 3),
(12, 4),
(12, 6),
(12, 8),
(12, 11),
(12, 12),
(12, 15),
(12, 35),
(12, 36);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planes`
--

CREATE TABLE `planes` (
  `id` bigint(20) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `fecha_hora` datetime NOT NULL,
  `ubicacion` varchar(255) NOT NULL,
  `creador_id` bigint(20) NOT NULL,
  `participantes` int(35) NOT NULL,
  `likes` int(10) NOT NULL,
  `comentarios` int(255) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `planes`
--

INSERT INTO `planes` (`id`, `titulo`, `descripcion`, `fecha_hora`, `ubicacion`, `creador_id`, `participantes`, `likes`, `comentarios`, `categoria_id`, `imagen`) VALUES
(2, 'Viaje a la playa', 'Viaje de fin de semana a la playa', '2023-05-13 12:00:00', 'Playa del Carmen', 4, 80, 139, 17, 2, ''),
(3, 'Excursión al campo', 'Día de campo en el campo', '2023-06-18 10:00:00', 'Campo de Flores', 5, 125, 89, 0, 1, ''),
(4, 'Fiesta de cumpleaños', 'Las nubes nos dan una sensación de inestabilidad y de eternidad. Las nubes son —como el mar— siempre varias y siempre las mismas. Sentimos mirándolas cómo nuestro ser y todas las cosas corren hacia la nada, en tanto que ellas —tan fugitivas— permanecen eternas. A estas nubes que ahora miramos las miraron hace doscientos, quinientos, mil, tres mil años, otros hombres con las mismas pasiones y las mismas ansias que nosotros. Cuando queremos tener aprisionado el tiempo —en un momento de ventura— vemos que van pasado ya semanas, meses, años. Las nubes, sin embargo, que son siempre distintas en todo momento, todas los días van caminando por el cielo. Hay nubes redondas, henchidas de un blanco brillante, que destacan en las mañanas de primavera sobre los cielos traslúcidos. Las hay como cendales tenues, que se perfilan en un fondo lechoso. Las hay grises sobre una lejanía gris. Las hay de carmín y de oro en los ocasos inacabables, profundamente melancólicos, de las llanuras. Las hay como velloncitas iguales o innumerables que dejan ver por entre algún claro un pedazo de cielo azul. Unas marchan lentas, pausadas; otras pasan rápidamente. Algunas, de color de ceniza, cuando cubren todo el firmamento, dejan caer sobre la tierra una luz opaca, tamizada, gris, que presta su encanto a los paisajes otoñales.', '2023-07-15 20:00:00', 'Parque del norte', 6, 133, 59, 0, 4, ''),
(5, 'Visita al museo', 'Visita guiada al museo de historia', '2023-08-22 14:00:00', 'Museo de Historia', 7, 95, 19, 0, 5, ''),
(6, 'Cena en restaurante', 'Cena en restaurante de comida italiana', '2023-09-17 19:00:00', 'Restaurante Il Giardino', 8, 94, 7, 0, 3, ''),
(7, 'Viaje a la montaña', 'Fin de semana de camping y senderismo en las montañas de Sierra Nevada. La experiencia incluirá caminatas en senderos naturales y vistas panorámicas del paisaje montañoso.', '2023-05-20 08:00:00', 'Sierra Nevada', 4, 86, 12, 0, 1, ''),
(8, 'Noche de juegos de mesa', 'Noche de juegos de mesa con amigos en casa. La experiencia incluirá juegos clásicos como Monopoly, Risk, y Scrabble, y también habrá tiempo para juegos de cartas como Poker y Bridge.', '2023-06-10 19:00:00', 'Casa de Juan', 4, 104, 7, 0, 3, ''),
(9, 'Tour gastronómico', 'Tour gastronómico por los mejores restaurantes de la ciudad. La experiencia incluirá degustaciones de comida internacional, cócteles y vino, y un recorrido guiado por los barrios más emblemáticos de la ciudad.', '2023-07-01 13:00:00', 'Ciudad de México', 5, 82, 0, 0, 2, ''),
(10, 'Cine al aire libre', 'Noche de cine al aire libre en el parque. La experiencia incluirá la proyección de una película clásica en una pantalla grande, snacks y bebidas, y un ambiente relajado y acogedor.', '2023-08-05 20:00:00', 'Parque Chapultepec', 6, 82, 8, 0, 5, ''),
(11, 'Día de spa', 'Día de relajación y rejuvenecimiento en el spa. La experiencia incluirá masajes, tratamientos faciales y corporales, y acceso a las instalaciones de sauna y jacuzzi.', '2023-09-02 11:00:00', 'Spa Holístico', 7, 87, 4, 0, 0, ''),
(12, 'Curso de cocina', 'Curso de cocina en casa de un chef profesional. La experiencia incluirá una clase práctica de cocina, donde aprenderás a preparar platillos gourmet, y una cena de tres tiempos con vino incluido.', '2023-10-07 18:00:00', 'Casa del Chef', 8, 1, 0, 0, 0, ''),
(13, 'Tarde de arte', 'Tarde de arte en el museo. La experiencia incluirá una visita guiada a la exposición de arte contemporáneo, seguida de una sesión de dibujo y pintura en vivo.', '2023-11-11 15:00:00', 'Museo de Arte Moderno', 5, 0, 0, 0, 0, ''),
(14, 'Paseo en bote', 'Paseo en bote por el lago. La experiencia incluirá un recorrido panorámico por el lago, con vistas espectaculares del paisaje natural, y paradas para nadar y tomar fotografías.', '2023-12-16 10:00:00', 'Lago de Chapala', 6, 1, 0, 0, 0, ''),
(15, 'Fiesta de fin de año', 'Celebración de fin de año en grande. La experiencia incluirá música en vivo, comida y bebidas de alta calidad, y un ambiente festivo y elegante.', '2023-12-31 21:00:00', 'Centro de Eventos', 7, 1, 0, 0, 0, ''),
(16, 'Paseo en bote', 'Disfruta de un paseo en bote por la bahía', '2023-04-25 10:00:00', 'Bahía de Cartagena', 4, 0, 0, 0, 0, ''),
(17, 'Excursión a la montaña', 'Ven y disfruta de una excursión a la montaña con amigos', '2023-05-01 08:00:00', 'Sierra Nevada', 5, 0, 0, 0, 0, ''),
(18, 'Visita al museo', 'Disfruta de una visita al museo de arte moderno', '2023-04-30 15:00:00', 'Calle de Alcalá, Madrid', 6, 0, 0, 0, 0, ''),
(19, 'Cena con amigos', 'Disfruta de una cena con amigos en un buen restaurante', '2023-05-02 20:00:00', 'Restaurante El Cielo', 7, 4, 0, 0, 0, ''),
(20, 'Fiesta en la playa', 'Ven a disfrutar de una fiesta en la playa con buena música y amigos', '2023-05-07 14:00:00', 'Playa de la Barceloneta', 8, 0, 0, 0, 0, ''),
(21, 'Ciclismo en la montaña', 'Disfruta de una aventura en bicicleta de montaña', '2023-05-08 09:00:00', 'Sierra de Guadarrama', 4, 0, 0, 0, 0, ''),
(22, 'Clases de yoga', 'Ven a relajarte y practicar yoga en nuestro estudio', '2023-05-03 18:00:00', 'Calle Mayor, Barcelona', 5, 0, 0, 0, 0, ''),
(23, 'Cata de vinos', 'Disfruta de una cata de vinos en la bodega más reconocida de la región', '2023-05-04 16:00:00', 'Bodega La Rioja', 6, 1, 0, 0, 0, ''),
(24, 'Partido de fútbol', 'Ven a disfrutar de un partido de fútbol con amigos', '2023-05-05 17:00:00', 'Estadio Santiago Bernabéu', 7, 0, 0, 0, 0, ''),
(25, 'Concierto de música', 'Disfruta de un concierto en vivo con tus amigos', '2023-05-06 21:00:00', 'WiZink Center, Madrid', 8, 0, 0, 0, 0, ''),
(26, 'prueba 1', 'descripcion prueba 1', '0000-00-00 00:00:00', 'LAS CHAPAS', 12, 0, 0, 0, 0, ''),
(27, 'aaaaaaaaa', 'eeeeeeeeeeeeeee', '0000-00-00 00:00:00', 'aqui', 5, 0, 0, 0, 0, ''),
(28, 'aaaa', 'DADAWAWD', '0000-00-00 00:00:00', 'aqui', 5, 0, 0, 0, 0, ''),
(29, 'awdaw', 'adwdaw', '0000-00-00 00:00:00', 'aqui', 5, 0, 0, 0, 0, ''),
(30, 'Furbo', 'tarde de furbito con los chavale tarde de furbito con los chavale tarde de furbito con los chavale tarde de furbito con los chavale ', '0000-00-00 00:00:00', 'Campo de futbol El Romeral, Malaga', 12, 0, 0, 0, 0, ''),
(31, 'rave', 'tecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecnotecno', '0000-00-00 00:00:00', 'Calle Larios, Málaga', 12, 0, 0, 0, 0, ''),
(32, 'illo illo', 'ostias', '0000-00-00 00:00:00', 'Playa Virginia, el Palo', 12, 0, 0, 0, 0, ''),
(33, 'ewffes', 'esfsefsef', '2023-06-02 03:15:00', 'sefsef', 12, 0, 0, 0, 0, ''),
(34, '', '', '2023-06-29 00:00:00', '', 12, 0, 0, 0, 0, ''),
(35, 'wafwaf', 'awfwafwaf', '2023-06-29 00:00:00', 'awfwafawawf', 12, 1, 0, 0, 0, ''),
(36, 'defe', 'sefsefs', '2023-06-15 00:00:00', 'sefsef', 12, 1, 0, 0, 0, ''),
(37, 'grg', 'dgdg', '2023-06-21 00:00:00', 'drgdgd', 6, 0, 0, 0, 0, 'https://firebasestorage.googleapis.com/v0/b/plantoday-636e2.appspot.com/o/1a7d608a-5330-478c-acbe-5d0156accd17?alt=media&token=cb1efea4-6883-4d04-b834-ed47957f96e7'),
(38, 'illo que ya se puede', 'ole ole los caracole por fin', '2023-06-28 00:00:00', 'Campo de futbol El Romeral, Malaga', 6, 0, 0, 0, 0, 'https://firebasestorage.googleapis.com/v0/b/plantoday-636e2.appspot.com/o/e674c47b-c6ab-4eab-88b1-b7e209530c74?alt=media&token=bc6903a1-2511-456d-9018-ac8946325264'),
(39, 'otra prueba', 'loqsea', '2023-06-30 00:00:00', 'Polideportivo, Málaga España', 6, 0, 0, 0, 0, 'https://firebasestorage.googleapis.com/v0/b/plantoday-636e2.appspot.com/o/26f9ebd2-e79e-4c36-ac5b-efc159c70ebf?alt=media&token=0271e992-9497-4cc5-8496-e82ed8e070bc'),
(40, 'fefesf', 'efssef', '2023-06-23 00:00:00', 'sefs, Málaga España', 12, 0, 0, 0, 0, 'https://firebasestorage.googleapis.com/v0/b/plantoday-636e2.appspot.com/o/2829435e-98ed-4a5f-88c0-792c937a44b6?alt=media&token=57617dcb-900a-4d2c-bef9-d73c54e1cfad'),
(41, 'fefesf', 'efssef', '2023-06-23 00:00:00', 'sefs, Málaga España', 12, 0, 0, 0, 0, 'https://firebasestorage.googleapis.com/v0/b/plantoday-636e2.appspot.com/o/661d73ef-34fa-4d44-90cf-0bf4d69019a7?alt=media&token=45a07fe9-daea-4577-93fa-83f3b0ae7ce1'),
(42, 'nuevo', 'nuevo', '2023-06-28 00:00:00', 'carranque, Málaga España', 12, 0, 0, 0, 0, 'https://firebasestorage.googleapis.com/v0/b/plantoday-636e2.appspot.com/o/89903657-a2fe-4322-bd49-8cdf7aa9d8cb?alt=media&token=86033da8-fc72-4c03-a3f4-db6d1d29b051');

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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `planes`
--
ALTER TABLE `planes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

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
