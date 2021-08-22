let http = require('http');

let optionsJeedom = {
    host: '192.168.85.151',
    port: 80,
    path: ''
};
let optionsDomo = {
    host: '192.168.85.150',
    port: 8080,
    path: ''
};

let start = function () {
    console.log("start");
// Ordinateur bureau
    let req1 = http.request({
        host: '192.168.85.151',
        port: 80,
        path: "/core/api/jeeApi.php?apikey=k8eIXLS9GWlDDDSCR1TV3SVkpQhxbZCW&type=cmd&id=179"
    }, res => {
        res.on('data', d => {
            let r = parseFloat(d.toString()) * 1000;
            optionsDomo.path = "/json.htm?type=command&param=udevice&idx=" + 1543 + '&svalue=' + r;
            let reqDomo = http.request(optionsDomo);
            reqDomo.on('error', function (e) {
                console.error("Request failed");
                console.error(e);
            });
            reqDomo.on('timeout', function () {
                console.log("Request timeout");
            });
            reqDomo.end();
        })
    });
    req1.on('error', function (e) {
        console.error("Request failed");
        console.error(e);
    });
    req1.on('timeout', function () {
        console.log("Request timeout");
    });
    req1.end();

// Cave à vin
    let req2 = http.request({
        host: '192.168.85.151',
        port: 80,
        path: "/core/api/jeeApi.php?apikey=k8eIXLS9GWlDDDSCR1TV3SVkpQhxbZCW&type=cmd&id=195"
    }, res => {
        res.on('data', d => {
            let r = parseFloat(d.toString()) * 1000;
            optionsDomo.path = "/json.htm?type=command&param=udevice&idx=" + 1544 + '&svalue=' + r;
            let reqDomo = http.request(optionsDomo);
            reqDomo.on('error', function (e) {
                console.error("Request failed");
                console.error(e);
            });
            reqDomo.on('timeout', function () {
                console.log("Request timeout");
            });
            reqDomo.end();
        })
    });
    req2.on('error', function (e) {
        console.error("Request failed");
        console.error(e);
    });
    req2.on('timeout', function () {
        console.log("Request timeout");
    });
    req2.end();

// Frigo extension
    let req3 = http.request({
        host: '192.168.85.151',
        port: 80,
        path: "/core/api/jeeApi.php?apikey=k8eIXLS9GWlDDDSCR1TV3SVkpQhxbZCW&type=cmd&id=205"
    }, res => {
        res.on('data', d => {
            let r = parseFloat(d.toString()) * 1000;
            optionsDomo.path = "/json.htm?type=command&param=udevice&idx=" + 1545 + '&svalue=' + r;
            let reqDomo = http.request(optionsDomo);
            reqDomo.on('error', function (e) {
                console.error("Request failed");
                console.error(e);
            });
            reqDomo.on('timeout', function () {
                console.log("Request timeout");
            });
            reqDomo.end();
        })
    });
    req3.on('error', function (e) {
        console.error("Request failed");
        console.error(e);
    });
    req3.on('timeout', function () {
        console.log("Request timeout");
    });
    req3.end();

    setTimeout(start, 60000);
}

start();