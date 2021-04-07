//usamos  moment
let moment = require('moment');
const hoy = moment( new Date() );

const utc = moment( new Date() ).utc();
console.log("hoy", hoy);
console.log("utc", utc);

console.log("diff", utc.diff(hoy) );


//Muestro ambas fechas
console.log(hoy.format('DD MM YYYY hh:mm:ss'));
console.log(utc.format('DD MM YYYY hh:mm:ss'));


let duration = moment(utc.diff(hoy));
//Calculamos la diferencia en horas 
console.log('Cantidad de horas '+ (duration.hours()));

//Comparar 2 fechas 
let fecha1 = '1979-06-10';
let fecha2 = '1929-06-15';
 
//hacemos uso de isBefore de moment para compar las fechas

if (moment(fecha1).isBefore(fecha2)){
    console.log('La fecha1 '+fecha2+' es mayor que la fecha1 '+fecha1);
}else{
    console.log('La fecha2 ' + fecha1 + ' es mayor que la fecha2 ' + fecha2);
}
