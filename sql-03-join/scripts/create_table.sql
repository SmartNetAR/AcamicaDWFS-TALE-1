CREATE TABLE `eventos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--Selecciono la clave primaria
ALTER TABLE eventos
  ADD PRIMARY KEY (id);

--Hago que el campo id sea auto incrementable
ALTER TABLE eventos
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

CREATE TABLE `inscriptos` (
  `id` int(11) NOT NULL,
  `evento_id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `empresa` varchar(255) DEFAULT NULL,
  `cargo` varchar(255) DEFAULT NULL,
  `mensages` text,
  `servicios` text,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE inscriptos
  ADD PRIMARY KEY (id);

--Hago que el campo id sea auto incrementable
ALTER TABLE inscriptos
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

ALTER TABLE eventos_db.inscriptos ADD CONSTRAINT inscriptos_FK FOREIGN KEY (evento_id) REFERENCES eventos_db.eventos(id);
