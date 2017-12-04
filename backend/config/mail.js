const nodemailer = require('nodemailer');

global.Mail = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT
});