const dns = require('dns');

dns.resolve4('www.miu.edu', (err, address) => {
    console.log("address: %j", address);
})