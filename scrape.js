const request = require('request');
const cheerio = require('cheerio');
const nodemailer = require('nodemailer');

request('https://**********.com/***', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const allDates = $('#Content > div > div ul:first-of-type');

        const output = allDates.text();
        const output2 = output.toLocaleLowerCase();

        const strArr = output2.split(' ');
        //console.log(strArr);

        text = ["elementor"];
        results = [];

            for(let i=0; i<=text.length; i++){
                if(strArr.indexOf(text[i]) != -1)
                    results.push(text[i]);
     }

        if(results.length > 0){
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: '*********@gmail.com',
                  pass: '********'
                }
              });
              
              const mailOptions = {
                from: '*********@gmail.com',
                to: '*******@gmail.com',
                subject: '********* Updates Found',
                html: '<p>Υπάρχουν updates για τα ακόλουθα plugins</p>' + results
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
        } else{ 
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: '***********@gmail.com',
              pass: '**********'
            }
          });
          
          const mailOptions = {
            from: '**********@gmail.com',
            to: '**********@gmail.com',
            subject: '********** - No Updates Found ',
            html: '<p>Μόλις πραγματοποιήθηκε έλεγχος και δεν βρέθηκαν σχετίκα updates</p>'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

        }

    }

    
});
