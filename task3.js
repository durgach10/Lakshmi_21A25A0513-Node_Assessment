var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'bangarich2@gmail.com',
        pass:'emvbonyckgkazeef'
    }
});
var mailOptions={
    from:'bangarich2@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'21A25A0513',
    text:'Hello Sir'
};
transporter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err);
    }
    else{
        console.log('Email sent:'+info.response);
    }
});