var express = require('express');
var router = express.Router();
var response = require('../model/response');
var consts = require('../utils/consts');
var Gpio = require('onoff').Gpio, // Constructor function for Gpio objects.
    led = new Gpio(4, 'out');    // Export GPIO #17 as an output.

router.get('/', function (req, res) {

    var pinValue;
    // read current value and then write
    led.read(function (err, value) {
        if (err)
            res.send(response(consts.STATUS_CODE_ERROR, 'null', consts.MSG_UNABLE_TO_READ));

        led.write(value === 0 ? 1 : 0, function (err) {
            if (err)
                res.send(response(consts.STATUS_CODE_ERROR, 'null', consts.MSG_UNABLE_TO_WRITE));
        });
        pinValue = value;
    });
    res.send(response(consts.STATUS_CODE_SUCCESS, 'light switched ' + pinValue === 0 ? 'On' : 'Off', consts.MSG_SUCCESS));
});

module.exports = router;
