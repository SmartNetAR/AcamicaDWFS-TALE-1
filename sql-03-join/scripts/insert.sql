
-- insert para eventos

INSERT INTO `eventos` (`id`, `nombre`, `fecha`, `create_at`, `update_at`) VALUES
(1, 'nextvision', '2020-06-12', '2020-07-01 00:00:00', '2020-06-06 03:00:00');


--insert para inscriptos

INSERT INTO `inscriptos` (`evento_id`, `nombre`, `email`, `telefono`, `empresa`, `cargo`, `mensages`, `servicios`, `create_at`, `update_at`) VALUES
( 1, 'hugomarcelo Naccarato', 'tex@tets.com', NULL, NULL, NULL, NULL, NULL, '2020-06-06 06:08:42', '2020-06-06 06:08:42');

