var express = require('express');
var router = express.Router();
var response = require('../model/response');
var consts = require('../utils/consts');
var Gpio = require('onoff').Gpio, // Constructor function for Gpio objects.
    led = new Gpio(4, 'out');    // Export GPIO #17 as an output.

router.get('/', function(req, res) {

    // read current value and then write
    led.read(function(err, value) {
        if (err) throw err;

        led.write(value === 0 ? 1 : 0, function(err) {
            if (err) throw err;
        });
    });

  res.send(response(consts.STATUS_CODE_SUCCESS,'hello',consts.MSG_SUCCESS));
});

module.exports = router;
