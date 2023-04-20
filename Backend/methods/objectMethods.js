function GetFirstOrDefault(obj) {
    if (obj != undefined && obj.lenght != 0) {
        return obj[0];
    }
    return null;
}

function CheckIfNullOrNot(obj) {
    if (obj == null || obj == undefined) {
        return true;
    }
    return false;
}

module.exports = { GetFirstOrDefault, CheckIfNullOrNot }