const Eos = require('eosjs');

const headers = {
    douxing: "dx4"
}


// account name: ccbtrader123
// Private key: 5HyZxk2Jpv5cjPPiNSWg7Ej7gih9yGLyQF8ePMUP7JFmS16ryoM
// Public key: EOS5ud5NxADvLP4jqjg9jyYhtJfYtkxgyY5bUs7tYJGQtoSh8piRa

const config = {
    keyProvider: ['5HyZxk2Jpv5cjPPiNSWg7Ej7gih9yGLyQF8ePMUP7JFmS16ryoM'], // 配置私钥字符串
    httpEndpoint: 'http://178.62.196.196:8888', //DEV开发链url与端口
    chainId: "0b08e71a2f8caaccc2dc13244b788f5eba29462ecd5d5dea1ad8cbe9581e885a", // 通过cleos get info可以获取chainId
    mockTransactions: () => null, // 如果要广播，需要设为null
    transactionHeaders: (expireInSeconds, callback) => {
        callback(null, headers) //手动设置交易记录头，该方法中的callback回调函数每次交易都会被调用
    },
    expireInSeconds: 60,
    broadcast: true,
    debug: false,
    sign: true,
    authorization: null // 该参数用于在多签名情况下，识别签名帐号与权限,格式如：account@permission
}

module.exports = Eos(config)