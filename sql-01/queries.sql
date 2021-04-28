CREATE DATABASE tareas_db;


USE tareas_db;


CREATE TABLE tareas ( id INT AUTO_INCREMENT, titulo VARCHAR(30), descripcion VARCHAR(255), terminada BOOLEAN, PRIMARY KEY(id) );


desc tareas;


ALTER TABLE `tareas` CHANGE `terminada` `terminada` TINYINT(1) NOT NULL DEFAULT '0';



INSERT INTO tareas ( titulo, descripcion, terminada ) VALUE ( 'Continuar con el tp', 'No olvidar el tp 3 este fin de semana', false  );
INSERT INTO tareas ( titulo, descripcion, terminada ) VALUE ( 'Finalizar el tp1', 'Debemos terminar el tp número uno', true  );


SELECT titulo, descripcion, terminada FROM tareas;

SELECT * FROM tareas;

SELECT * FROM tareas WHERE id = 2;