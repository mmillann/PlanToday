-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-06-2023 a las 21:28:21
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
(22, 5, 2, 'Me encanta el arte contemporáneo y el CAC Málaga nunca decepciona.', '2023-06-02 10:15:00'),
(23, 6, 2, 'El Centro de Arte es un lugar fascinante. Me inspiré mucho al ver las obras.', '2023-06-02 11:00:00'),
(25, 4, 2, 'El Centro de Arte Contemporáneo tiene exposiciones muy interesantes. ¡Recomendado!', '2023-06-02 09:30:00'),
(26, 6, 1, 'Disfruté mucho recorriendo el Museo Picasso. Las obras son asombrosas.', '2023-06-02 10:45:00'),
(27, 5, 1, '¡Una visita obligada para los amantes del arte! Picasso es un genio.', '2023-06-02 09:15:00'),
(28, 4, 1, 'El Museo Picasso es impresionante. Me encantó ver las obras de uno de mis artistas favoritos.', '2023-06-02 08:30:00'),
(29, 5, 2, 'Me encanta el arte contemporáneo y el CAC Málaga nunca decepciona.', '2023-06-02 08:15:00'),
(37, 4, 3, 'El Soho de Málaga es una joya escondida llena de arte callejero. ¡No te lo pierdas!', '2023-06-02 10:30:00'),
(46, 4, 2, 'Me encantaría ir a esta excursión!', '2023-04-09 13:16:17'),
(55, 5, 3, 'Felicidades Ana! Qué linda fiesta de cumpleaños!', '2023-04-09 13:16:19'),
(74, 7, 4, 'Este museo es realmente interesante!', '2023-04-09 13:17:26'),
(81, 5, 3, 'Caminar por el Soho y admirar los murales fue una experiencia única. Me encantó.', '2023-06-02 11:45:00'),
(92, 6, 3, '¡El arte urbano en el Soho es increíble! Cada mural cuenta una historia.', '2023-06-02 12:15:00'),
(101, 4, 4, 'El Museo Carmen Thyssen tiene una colección impresionante. Me emocioné al ver las obras de Sorolla.', '2023-06-02 11:30:00'),
(102, 4, 4, 'El Museo Carmen Thyssen tiene una colección impresionante. Me emocioné al ver las obras de Sorolla.', '2023-06-02 09:30:00'),
(111, 5, 4, 'Si te gusta el arte español del siglo XIX, debes visitar el Museo Carmen Thyssen. ¡Increíble!', '2023-06-02 12:45:00'),
(113, 5, 4, 'Si te gusta el arte español del siglo XIX, debes visitar el Museo Carmen Thyssen. ¡Increíble!', '2023-06-02 10:45:00'),
(121, 6, 4, 'El Museo Carmen Thyssen es una joya cultural. Me encantó la selección de pinturas.', '2023-06-02 13:30:00'),
(131, 4, 5, 'El Centro Pompidou Málaga es una experiencia artística única. ¡Las exposiciones son geniales!', '2023-06-02 12:30:00'),
(141, 5, 5, 'El Centro Pompidou es uno de mis lugares favoritos en Málaga. Siempre hay algo nuevo que ver.', '2023-06-02 13:45:00'),
(142, 21, 7, 'me parece un planazo!', '2023-06-18 19:09:15'),
(234, 6, 2, 'El Centro de Arte es un lugar fascinante. Me inspiré mucho al ver las obras.', '2023-06-02 09:00:00'),
(253, 4, 2, 'El Centro de Arte Contemporáneo tiene exposiciones muy interesantes. ¡Recomendado!', '2023-06-02 07:30:00'),
(262, 6, 1, 'Disfruté mucho recorriendo el Museo Picasso. Las obras son asombrosas.', '2023-06-02 08:45:00'),
(283, 4, 1, 'El Museo Picasso es impresionante. Me encantó ver las obras de uno de mis artistas favoritos.', '2023-06-02 06:30:00'),
(374, 4, 3, 'El Soho de Málaga es una joya escondida llena de arte callejero. ¡No te lo pierdas!', '2023-06-02 08:30:00'),
(815, 5, 3, 'Caminar por el Soho y admirar los murales fue una experiencia única. Me encantó.', '2023-06-02 09:45:00'),
(899, 8, 5, 'El restaurante tiene muy buena pinta!', '2023-04-09 13:17:35'),
(922, 6, 6, 'Ya quiero que llegue el viaje a la playa!', '2023-04-09 13:17:45'),
(925, 6, 3, '¡El arte urbano en el Soho es increíble! Cada mural cuenta una historia.', '2023-06-02 10:15:00'),
(2327, 5, 1, '¡Una visita obligada para los amantes del arte! Picasso es un genio.', '2023-06-02 07:15:00');

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
(4, 21),
(5, 5),
(6, 5),
(6, 6),
(6, 11),
(7, 5),
(7, 6),
(7, 12),
(8, 5),
(8, 6),
(8, 11),
(8, 12),
(8, 21),
(9, 11),
(9, 21),
(10, 5),
(10, 11),
(11, 5),
(11, 6),
(11, 11),
(11, 12),
(11, 21),
(14, 5),
(14, 12),
(14, 21),
(15, 12),
(20, 12),
(21, 12),
(23, 12),
(26, 12),
(28, 12),
(31, 12),
(34, 12),
(39, 12),
(43, 12),
(47, 12);

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
(5, 6),
(5, 8),
(6, 7),
(6, 10),
(6, 14),
(6, 23),
(11, 2),
(12, 4),
(12, 6),
(12, 7),
(12, 8),
(12, 9),
(12, 11),
(12, 15),
(12, 23),
(12, 29),
(12, 31),
(12, 36),
(12, 43),
(12, 45),
(21, 4),
(21, 8),
(21, 9),
(21, 11),
(21, 14),
(21, 15);

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
(1, 'Visitar el Museo Picasso', 'Málaga es la ciudad natal de Pablo Picasso, uno de los artistas más influyentes del siglo XX. El Museo Picasso alberga una extensa colección de sus obras, que abarcan toda su carrera artística. Es una visita imprescindible para los amantes del arte.', '2023-06-02 10:00:00', 'Museo Picasso, Malaga', 4, 0, 0, 0, 2, 'https://www.museopicassomalaga.org/cms/uploads/xxlarge_Home_alternativa01_f001998ce3.jpg'),
(2, 'Recorrer el Centro de Arte', 'Este museo se centra en el arte contemporáneo y ofrece exposiciones de artistas locales e internacionales. El CAC Málaga está ubicado en un antiguo mercado y cuenta con una interesante variedad de obras y eventos relacionados con el arte contemporáneo.', '2023-06-02 11:00:00', 'Centro de Arte Contemporáneo', 5, -1, 0, 0, 2, 'https://totenart.com/directorio/wp-content/uploads/2014/04/CAC-centro-de-arte-contemporaneo-de-malaga-directorio-totenart-Neighbours.jpg'),
(3, 'Pasear por el Soho de Málaga', 'El Soho es un barrio en el centro de Málaga que se ha convertido en un importante distrito de arte urbano. Aquí encontrarás numerosos murales y grafitis realizados por artistas locales e internacionales. Puedes disfrutar de un agradable paseo explorando las calles y admirando las diferentes obras de arte callejero.', '2023-06-02 12:00:00', 'Barrio del Soho, Malaga', 6, 0, 0, 0, 2, 'https://imagenes.elpais.com/resizer/LIA5L0Ifoz_3ewbVxKKDO_sg0cw=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/7OX5I2NEQNXZHXXQUQOUWJTLEY.jpg'),
(4, 'Visitar el Museo Carmen Thyssen', 'Este museo alberga la colección privada de la baronesa Thyssen-Bornemisza y se centra en la pintura española del siglo XIX. Podrás apreciar obras de reconocidos artistas españoles como Sorolla, Zuloaga y Romero de Torres, entre otros.', '2023-06-02 13:00:00', 'Museo Carmen Thyssen', 7, 1, 1, 0, 2, 'https://static.visita.malaga.eu/visitamalaga/subidas/imagenes/2/1/arc_27512_g.jpg'),
(5, 'Explorar el Centro Pompidou Málaga', 'El Centro Pompidou Málaga es una extensión del famoso museo de arte contemporáneo de París. Aquí encontrarás exposiciones temporales y una amplia variedad de obras de arte moderno y contemporáneo. El edificio en sí mismo es una obra de arte arquitectónica que vale la pena visitar.', '2023-06-02 14:00:00', 'Muelle uno, Malaga', 8, 0, 0, 0, 2, 'https://www.centrepompidou.fr/fileadmin/_processed_/a/f/csm_cubo-museopompidoumalaga_28e4606f16.jpg'),
(6, 'Correr por la playa de La Malagueta', 'Disfruta de un buen entrenamiento corriendo por la playa de La Malagueta. Este tramo de playa es ideal para hacer ejercicio, ya que ofrece un hermoso paisaje marítimo y una amplia zona para correr. ¡Aprovecha el clima mediterráneo y ponte en forma!', '2023-06-02 15:00:00', 'Playa de La Malagueta, 29016 Málaga', 4, 1, 0, 0, 1, 'https://i.ytimg.com/vi/VJ9huWQ19RE/maxresdefault.jpg'),
(7, 'Practicar surf en la Playa de El Palo', 'Si te gusta el surf, no puedes dejar pasar la oportunidad de surfear en la Playa de El Palo. Esta playa es conocida por sus olas y es un lugar popular entre los amantes de este deporte acuático. ¡Prepárate para disfrutar de una emocionante sesión de surf!', '2023-06-02 16:00:00', 'Playa de El Palo, 29018 Málaga', 5, 1, 1, 0, 1, 'https://upload.wikimedia.org/wikipedia/commons/e/e3/QUIKSILVER_Kings_of_the_Paddle_2012%2C_MDP%2C_Argentina.jpg'),
(8, 'Jugar un partido de tenis en el Club de Tenis Málaga', 'Si eres aficionado al tenis, te invitamos a jugar un emocionante partido en el Club de Tenis Málaga. Las instalaciones cuentan con varias canchas de tenis de alta calidad y brindan un ambiente perfecto para disfrutar de este deporte. ¡Ponte tus zapatillas y demuestra tus habilidades!', '2023-06-02 17:00:00', 'Club de Tenis Málaga', 6, 2, 1, 0, 1, 'https://www.clubtenisrozas.es/contenidos/html/web/club/imagenes/quienes1.jpg'),
(9, 'Hacer senderismo en el Parque Natural Montes de Málaga', 'Explora la naturaleza y haz senderismo en el hermoso Parque Natural Montes de Málaga. Este parque ofrece una gran variedad de senderos que te permitirán descubrir paisajes impresionantes y disfrutar de la tranquilidad del entorno natural. ¡Prepara tus botas de senderismo y embárcate en una aventura al aire libre!', '2023-06-02 18:00:00', 'Parque Natural Montes de Málaga, 29100 Málaga', 7, 2, 1, 0, 1, 'https://www.guiarepsol.com/content/dam/repsol-guia/contenidos-imagenes/viajar/vamos-de-excursion/rutas-senderismo-malaga/gr-cms-media-featured_images-none-6ad78db1-c070-4334-83b3-93cdf87935fa-06-sierra-almorchon.jpg'),
(10, 'Practicar yoga en la playa de Pedregalejo', 'Relájate y encuentra tu equilibrio practicando yoga en la playa de Pedregalejo. Este lugar tranquilo y hermoso es perfecto para conectarte contigo mismo mientras disfrutas de la brisa marina y las vistas al mar. ¡Ven a recargar energías y liberar el estrés con una sesión de yoga en la playa!', '2023-06-02 19:00:00', 'Playa de Pedregalejo, 29017 Málaga', 8, 0, 0, 0, 1, 'https://www.efectoyogamalaga.com/wp-content/gallery/yoga-en-la-playa/Efecto-Yoga-Málaga-yoga-en-la-playa-4-1.JPG'),
(11, 'Concierto de música en vivo en Sala París 15', 'Disfruta de una noche llena de música en vivo en la Sala París 15. Este conocido local de Málaga ofrece una amplia variedad de conciertos de diferentes géneros musicales. Ven a vivir la emoción de un concierto en directo y disfruta de buena música en un ambiente vibrante.', '2023-06-02 20:00:00', 'Calle de la Orotava, 27, Málaga', 4, 1, 1, 0, 3, 'https://cdn.wegow.com/media/venue-media/sala-paris-15/sala-paris-15-1508233182.-1x1780.png'),
(12, 'Visita a la Escuela de Flamenco', 'Sumérgete en el fascinante mundo del flamenco con una visita a la Escuela de Flamenco de Málaga. Aquí podrás presenciar clases de baile, cante y guitarra flamenca, y aprender sobre la rica tradición del flamenco. Descubre el arte y la pasión de este género musical único.', '2023-06-02 21:00:00', 'Escuela de danza y flamenco Alma, Malaga', 5, 0, 0, 0, 3, 'https://lucerocardenas.com/wp-content/uploads/2019/08/block-clase-flamenco-lucero-cardenas2.jpg'),
(13, 'Noche de jazz en el Jazz Club', 'Déjate llevar por los ritmos suaves y envolventes del jazz en el Jazz Club de Málaga. Este acogedor local ofrece actuaciones en directo de talentosos músicos de jazz. Disfruta de una velada especial con buena música, ambiente íntimo y una selección de bebidas para acompañar.', '2023-06-02 22:00:00', 'Clarence Jazz Club, Torremolinos', 6, 0, 0, 0, 3, 'https://www.hotelchambiges.com/images/stories/activites/night-life/Jazz-Club-Etoile.jpg'),
(14, 'Visita a la Casa Natal de Pablo Alborán', 'Descubre los orígenes del reconocido cantante y compositor Pablo Alborán con una visita a su Casa Natal en Málaga. Conoce más sobre la vida y carrera de este artista de éxito y explora la exposición dedicada a su obra musical. Un plan imprescindible para los seguidores de Pablo Alborán.', '2023-06-02 23:00:00', 'Calle Casas de Campos, Málaga', 7, 1, 1, 0, 3, 'https://s2.ppllstatics.com/diariosur/www/multimedia/202107/13/media/MM-ALBORAN/pablo-alboran-starlite%20(9).jpg'),
(15, 'Noche de música en directo en el Teatro Cervantes', 'Disfruta de una noche mágica de música en directo en el Teatro Cervantes de Málaga. Este histórico teatro ofrece una programación variada que incluye conciertos de diferentes estilos musicales. Déjate llevar por los sonidos y vive una experiencia única en este emblemático escenario.', '2023-06-03 00:00:00', 'Teatro Cervantes, Málaga', 8, 1, 0, 0, 3, 'https://malaguear.com/wp-content/uploads/2021/10/cervantes-scaled.jpeg');

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
(4, 'juanpg', 'Juan Pérez González', 'juanpg@gmail.com', 'clave123', 0, '2023-04-07 17:05:33', 'https://firebasestorage.googleapis.com/v0/b/plantoday-636e2.appspot.com/o/528e2621-0486-47ff-8fec-4fd4a877b334?alt=media&token=2f2f6679-8797-4452-9887-82b1a7cd3705'),
(5, 'marialg', 'María López García', 'marialg@hotmail.com', 'contraseña456', 0, '2023-04-07 17:05:33', 'https://firebasestorage.googleapis.com/v0/b/plantoday-636e2.appspot.com/o/b9cfedae-d477-4327-a078-1643eddb3efa?alt=media&token=5ce166c1-8eab-4946-84ff-40fd27f7e25c'),
(6, 'pedromr', 'Pedro Martínez Rodríguez', 'pedromr@yahoo.com', 'password789', 0, '2023-04-07 17:05:33', ''),
(7, 'anagarcia', 'Ana Garcia', 'ana.garcia@example.com', 'password4', 0, '2023-04-09 15:11:26', ''),
(8, 'pedrogomez', 'Pedro Gomez', 'pedro.gomez@example.com', 'password3', 0, '2023-04-09 15:11:43', 'https://www.mondosonoro.com/wp-content/uploads/2018/02/26167470_1908432849470490_6027519221251597555_n.jpg'),
(11, 'manumillan', 'Manuel Millán', 'manue@gmail.com', '1234', 0, '2023-05-18 17:15:52', 'default'),
(12, 'm', 'm', 'm@gmail.com', '1234', 0, '2023-05-23 16:19:41', 'https://firebasestorage.googleapis.com/v0/b/plantoday-636e2.appspot.com/o/70f6398c-204d-44fc-bd41-52e4c449ceff?alt=media&token=900b871a-cdd9-4bb9-9ab4-b31ed4d3f30d'),
(21, 'felipe_contreras', 'Felipe Contreras Martínez', 'felipeContreras@gmail.com', '123', 0, '2023-06-18 18:57:57', 'default');

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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2328;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `planes`
--
ALTER TABLE `planes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

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
