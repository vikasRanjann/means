function sendEmail(email,subject,body, callback )
{
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
 
         user: 'ranjanvikashh@gmail.com',
         pass: 'fprqdxtnzvfddqaf'
     }
 });
 
 const mailOptions = {
     from: 'ranjanvikashh@gmail.com', // sender address
     to: email, // list of receivers
     subject: subject , // Subject line
     html: body // plain text body
 };
 
 transporter.sendMail(mailOptions, function (err, info) {
     if(err){
         console.log(err)
     }
     else{
         console.log(info);
     }
     callback(error,info )
 }) 
} 

 module.exports = 
 {
      sendEmail : sendEmail
 }
      
     
  