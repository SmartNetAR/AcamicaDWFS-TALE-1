require('dotenv').config();

const email = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;

const API_KEY =  process.env.GIFOS_API_KEY;


console.log("api key:", API_KEY);

function sendEmail(email, pass) 
{
    console.log("Enviando un email al usuario....");
    console.log("email:", email);
    console.log("password:", pass);
}

sendEmail(email, pass);