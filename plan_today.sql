-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-06-2023 a las 18:46:44
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
(41, 12, 31, 'illlooooooooooooooooooooooooooooo\n', '2023-05-30 23:58:53'),
(42, 12, 5, 'hola', '2023-06-06 15:35:58'),
(43, 12, 32, 'hola', '2023-06-06 15:37:21'),
(44, 12, 40, 'illo ', '2023-06-13 17:14:30'),
(45, 12, 39, 'muy buen plan', '2023-06-14 16:33:37'),
(46, 12, 39, 'holaaaa', '2023-06-14 16:35:16'),
(47, 12, 39, 'yo otra vez', '2023-06-14 16:36:13'),
(48, 12, 39, 'awdad', '2023-06-14 16:37:27'),
(49, 5, 8, 'ole ole', '2023-06-15 16:11:54');

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
(7, 12),
(8, 5),
(8, 6),
(8, 11),
(8, 12),
(9, 11),
(10, 5),
(10, 11),
(11, 5),
(11, 6),
(11, 11),
(11, 12),
(14, 5),
(14, 12),
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
(12, 45);

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
(4, 'Visitar el Museo Carmen Thyssen', 'Este museo alberga la colección privada de la baronesa Thyssen-Bornemisza y se centra en la pintura española del siglo XIX. Podrás apreciar obras de reconocidos artistas españoles como Sorolla, Zuloaga y Romero de Torres, entre otros.', '2023-06-02 13:00:00', 'Museo Carmen Thyssen', 7, 0, 0, 0, 2, 'https://static.visita.malaga.eu/visitamalaga/subidas/imagenes/2/1/arc_27512_g.jpg'),
(5, 'Explorar el Centro Pompidou Málaga', 'El Centro Pompidou Málaga es una extensión del famoso museo de arte contemporáneo de París. Aquí encontrarás exposiciones temporales y una amplia variedad de obras de arte moderno y contemporáneo. El edificio en sí mismo es una obra de arte arquitectónica que vale la pena visitar.', '2023-06-02 14:00:00', 'Muelle uno, Malaga', 8, 0, 0, 0, 2, 'https://www.centrepompidou.fr/fileadmin/_processed_/a/f/csm_cubo-museopompidoumalaga_28e4606f16.jpg'),
(6, 'Correr por la playa de La Malagueta', 'Disfruta de un buen entrenamiento corriendo por la playa de La Malagueta. Este tramo de playa es ideal para hacer ejercicio, ya que ofrece un hermoso paisaje marítimo y una amplia zona para correr. ¡Aprovecha el clima mediterráneo y ponte en forma!', '2023-06-02 15:00:00', 'Playa de La Malagueta, 29016 Málaga', 4, 1, 0, 0, 1, 'https://i.ytimg.com/vi/VJ9huWQ19RE/maxresdefault.jpg'),
(7, 'Practicar surf en la Playa de El Palo', 'Si te gusta el surf, no puedes dejar pasar la oportunidad de surfear en la Playa de El Palo. Esta playa es conocida por sus olas y es un lugar popular entre los amantes de este deporte acuático. ¡Prepárate para disfrutar de una emocionante sesión de surf!', '2023-06-02 16:00:00', 'Playa de El Palo, 29018 Málaga', 5, 1, 1, 0, 1, 'https://upload.wikimedia.org/wikipedia/commons/e/e3/QUIKSILVER_Kings_of_the_Paddle_2012%2C_MDP%2C_Argentina.jpg'),
(8, 'Jugar un partido de tenis en el Club de Tenis Málaga', 'Si eres aficionado al tenis, te invitamos a jugar un emocionante partido en el Club de Tenis Málaga. Las instalaciones cuentan con varias canchas de tenis de alta calidad y brindan un ambiente perfecto para disfrutar de este deporte. ¡Ponte tus zapatillas y demuestra tus habilidades!', '2023-06-02 17:00:00', 'Club de Tenis Málaga', 6, 1, 0, 0, 1, 'https://www.clubtenisrozas.es/contenidos/html/web/club/imagenes/quienes1.jpg'),
(9, 'Hacer senderismo en el Parque Natural Montes de Málaga', 'Explora la naturaleza y haz senderismo en el hermoso Parque Natural Montes de Málaga. Este parque ofrece una gran variedad de senderos que te permitirán descubrir paisajes impresionantes y disfrutar de la tranquilidad del entorno natural. ¡Prepara tus botas de senderismo y embárcate en una aventura al aire libre!', '2023-06-02 18:00:00', 'Parque Natural Montes de Málaga, 29100 Málaga', 7, 1, 0, 0, 1, 'https://www.guiarepsol.com/content/dam/repsol-guia/contenidos-imagenes/viajar/vamos-de-excursion/rutas-senderismo-malaga/gr-cms-media-featured_images-none-6ad78db1-c070-4334-83b3-93cdf87935fa-06-sierra-almorchon.jpg'),
(10, 'Practicar yoga en la playa de Pedregalejo', 'Relájate y encuentra tu equilibrio practicando yoga en la playa de Pedregalejo. Este lugar tranquilo y hermoso es perfecto para conectarte contigo mismo mientras disfrutas de la brisa marina y las vistas al mar. ¡Ven a recargar energías y liberar el estrés con una sesión de yoga en la playa!', '2023-06-02 19:00:00', 'Playa de Pedregalejo, 29017 Málaga', 8, 0, 0, 0, 1, 'https://www.efectoyogamalaga.com/wp-content/gallery/yoga-en-la-playa/Efecto-Yoga-Málaga-yoga-en-la-playa-4-1.JPG'),
(11, 'Concierto de música en vivo en Sala París 15', 'Disfruta de una noche llena de música en vivo en la Sala París 15. Este conocido local de Málaga ofrece una amplia variedad de conciertos de diferentes géneros musicales. Ven a vivir la emoción de un concierto en directo y disfruta de buena música en un ambiente vibrante.', '2023-06-02 20:00:00', 'Calle de la Orotava, 27, Málaga', 4, 0, 0, 0, 3, 'https://cdn.wegow.com/media/venue-media/sala-paris-15/sala-paris-15-1508233182.-1x1780.png'),
(12, 'Visita a la Escuela de Flamenco', 'Sumérgete en el fascinante mundo del flamenco con una visita a la Escuela de Flamenco de Málaga. Aquí podrás presenciar clases de baile, cante y guitarra flamenca, y aprender sobre la rica tradición del flamenco. Descubre el arte y la pasión de este género musical único.', '2023-06-02 21:00:00', 'Escuela de danza y flamenco Alma, Malaga', 5, 0, 0, 0, 3, 'https://lucerocardenas.com/wp-content/uploads/2019/08/block-clase-flamenco-lucero-cardenas2.jpg'),
(13, 'Noche de jazz en el Jazz Club', 'Déjate llevar por los ritmos suaves y envolventes del jazz en el Jazz Club de Málaga. Este acogedor local ofrece actuaciones en directo de talentosos músicos de jazz. Disfruta de una velada especial con buena música, ambiente íntimo y una selección de bebidas para acompañar.', '2023-06-02 22:00:00', 'Clarence Jazz Club, Torremolinos', 6, 0, 0, 0, 3, 'https://www.hotelchambiges.com/images/stories/activites/night-life/Jazz-Club-Etoile.jpg'),
(14, 'Visita a la Casa Natal de Pablo Alborán', 'Descubre los orígenes del reconocido cantante y compositor Pablo Alborán con una visita a su Casa Natal en Málaga. Conoce más sobre la vida y carrera de este artista de éxito y explora la exposición dedicada a su obra musical. Un plan imprescindible para los seguidores de Pablo Alborán.', '2023-06-02 23:00:00', 'Calle Casas de Campos, Málaga', 7, 0, 0, 0, 3, 'https://i.blogs.es/0cc688/283093166_419067673083268_5498393018823563165_n/1366_2000.jpeg'),
(15, 'Noche de música en directo en el Teatro Cervantes', 'Disfruta de una noche mágica de música en directo en el Teatro Cervantes de Málaga. Este histórico teatro ofrece una programación variada que incluye conciertos de diferentes estilos musicales. Déjate llevar por los sonidos y vive una experiencia única en este emblemático escenario.', '2023-06-03 00:00:00', 'Teatro Cervantes, Málaga', 8, 0, 0, 0, 3, 'https://malaguear.com/wp-content/uploads/2021/10/cervantes-scaled.jpeg'),
(50, 'Presentación del proyecto del grupo 5', 'éxito', '2023-06-20 00:00:00', 'medac nova, Málaga España', 5, 0, 0, 0, 8, 'https://firebasestorage.googleapis.com/v0/b/plantoday-636e2.appspot.com/o/6cfb0428-a4c3-4539-9844-71d3f9ab9c00?alt=media&token=7ef38fb9-8b39-4419-986b-a5e426e45a62');

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
(5, 'marialg', 'María López García', 'marialg@hotmail.com', 'contraseña456', 0, '2023-04-07 17:05:33', 'https://firebasestorage.googleapis.com/v0/b/plantoday-636e2.appspot.com/o/ad862b90-5434-41a5-bd47-c28e9f4ed884?alt=media&token=786e7734-034b-4047-9e71-c0f6d9f75e21'),
(6, 'pedromr', 'Pedro Martínez Rodríguez', 'pedromr@yahoo.com', 'password789', 0, '2023-04-07 17:05:33', ''),
(7, 'anagarcia', 'Ana Garcia', 'ana.garcia@example.com', 'password4', 0, '2023-04-09 15:11:26', ''),
(8, 'pedrogomez', 'Pedro Gomez', 'pedro.gomez@example.com', 'password3', 0, '2023-04-09 15:11:43', 'https://firebasestorage.googleapis.com/v0/b/plantoday-636e2.appspot.com/o/50d4f199-4c62-4618-ba9c-6540a0344bf8?alt=media&token=11d622d9-d852-4d72-9e8f-d0e102f266c1'),
(10, 'testManu', 'testManu', 'correo@gmail.com', '123', 0, '2023-05-11 21:09:09', 'default'),
(11, 'manumillan', 'Manuel Millán', 'manue@gmail.com', '1234', 0, '2023-05-18 17:15:52', 'default'),
(12, 'm', 'm', 'm@gmail.com', '1234', 0, '2023-05-23 16:19:41', 'https://firebasestorage.googleapis.com/v0/b/plantoday-636e2.appspot.com/o/70f6398c-204d-44fc-bd41-52e4c449ceff?alt=media&token=900b871a-cdd9-4bb9-9ab4-b31ed4d3f30d'),
(13, 'a', 'a', 'a@gmail.com', '123', 0, '2023-05-25 17:41:15', 'default'),
(15, 'ejemplo_usuario', 'Ejemplo Usuario', 'ejemplo@correo.com', 'contrasena123', 0, '2023-06-02 15:05:56', ''),
(17, 'ejemplo_usuario', 'Ejemplo Usuario', '22222@correo.com', 'contrasena123', 0, '2023-06-02 15:12:03', ''),
(18, 'aaa', 'aaa', 'manu@gmail.com', '123', 0, '2023-06-02 15:26:28', 'default'),
(19, 'sefsefsef', 'asfdsf', 'fes@gmail.com', '123', 0, '2023-06-13 16:53:06', 'default');

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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `planes`
--
ALTER TABLE `planes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

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
