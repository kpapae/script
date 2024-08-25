const cron = require('node-cron');
let shell = require('shelljs');

//       *        *     *    *     *     *    
// δευτερόλεπτα,λεπτά,ώρες,μέρες,μήνες,χρόνια
cron.schedule('30 * * * * *', function(){
    console.log('Scheduler running...');
    if(shell.exec('node scrape.js').code !==0){
        console.log('Error');
    }
});