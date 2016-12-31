var res = function (status, data, msg) {
    var obj = {};
    obj['status'] = status;
    obj['data'] = data;
    if (msg) {
        obj['message'] = msg;
    }
    return JSON.stringify(obj);
};

module.exports = res;