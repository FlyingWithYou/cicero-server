const  EOS = require("./utils");


async function sang(ctx, next) {
    //await EOS.transaction("eostccbtoken", currency => {
        //currency.transfer("ccbtrader123", "ccbauthor123", "10.0000 CCB", "")
    //}
    await EOS.transfer('ccbtrader123', 'ccbauthor123', '10.0000 CCB', 'memo').then(result => {
        console.log(result);
        ctx.body = { result: result};
    })
   
    await next();
}
module.exports = sang;