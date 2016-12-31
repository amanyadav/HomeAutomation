var express = require('express');
var router = express.Router();
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.1.4')
client.on('connect', function () {
    client.subscribe('yoo')
    client.publish('yoo', 'bhai Hello mqtt')
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log('opp'+message.toString())
    client.end()
})
/* GET users listing. */
router.get('/', function(req, res, next) {



  res.send('respond with a resource');
});

module.exports = router;
