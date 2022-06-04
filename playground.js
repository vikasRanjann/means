// const cryptojs = require('crypto-js')


// const password = 'test'

// console.log(`Password = ${cryptojs.MD5(password)}`)
// console.log(`Password = ${cryptojs.SHA1(password)}`)


const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {

        user: 'ranjanvikashh@gmail.com',
        pass: 'fprqdxtnzvfddqaf'
    }
});

const mailOptions = {
    from: 'ranjanvikashh@gmail.com', // sender address
    to: 'vikash.ranjan933@gmail.com', // list of receivers
    subject: 'test mail', // Subject line
    html: '<h1>Thanks For Visiting .</h1>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
    if(err)
        console.log(err)
    else
        console.log(info);
})