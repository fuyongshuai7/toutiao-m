export function formatTime(timestamp) {
    var T = new Date();
    var nowT = T.getTime();
    var t = nowT - timestamp;
    var h = parseInt(t / 3600);
    var m = parseInt((t % 3600) / 60);
    var s = t - h * 3600 - m * 60;
    var format = "";
    if (h >= 10) {
        format += h + ":";
    } else {
        format += "0" + h + ":";
    }
    if (m >= 10) {
        format += m + ":";
    } else {
        format += "0" + m + ":";
    }
    if (s >= 10) {
        format += s;
    } else {
        format += "0" + s;
    }
    return format;
}

export function beforMinute(timestamp) {
    var T = new Date();
    var nowT = T.getTime();
    var t = nowT - timestamp;
    var m = parseInt(t / 60);
    return m;
}

export function scroll(func) {
    var scrollTop = document.documentElement.scrollTop;
    var clientHeight = document.documentElement.clientHeight;
    var scrollHeight = document.documentElement.scrollHeight;
    var sc = scrollTop + clientHeight;
    if (scrollHeight -sc >= 10) {
        func();
    }
}




