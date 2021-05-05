SELECT eventos.id,
eventos.nombre as evento,
inscriptos.nombre,
inscriptos.email,
inscriptos.telefono 
FROM `eventos` 
inner join inscriptos
on inscriptos.evento_id = eventos.id
order by inscriptos.nombre asc
LIMIT 5




SELECT inscriptos.nombre, inscriptos.email, inscriptos.telefono, eventos.nombre AS evento 
FROM inscriptos 
INNER JOIN eventos ON inscriptos.evento_id = eventos.id;
