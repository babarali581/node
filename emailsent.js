var nodemailer = require('nodemailer');



// create reusable transporter object using the default SMTP transport
var transport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: /*"ENTER EMAIL ADRESS"*/,   //Enter credentials od Email Address from which you want to sent mail
        pass: /*"ENTER  PASSWORD"*/
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Fred Foo ?" <foo@blurdybloop.com>', // sender address
    to: /*'ENTER EMAIL ADRESS  FROM WHICH YOU WANT TO SENT MAIL'*/, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello Babar ?', // plaintext body
    html: '<b>Hello Babar ?</b>' // html body
};

// send mail with defined transport object
transport.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log(' Babar Message sent: ');
});
