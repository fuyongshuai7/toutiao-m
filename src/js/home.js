import { formatTime, beforMinute, scroll } from "../utils/helper.js";
import '../css/home.css';

import data from "../utils/fakeData.js";
import homeMain from '../componets/homeMainType.ejs';
import foot from '../componets/foot.ejs'

$(".main").append(homeMain({
    list: data.homeList,
    beforMinute,
}));

$('.foot').append(foot());

var page = 0;
window.addEventListener("scroll", function () {
    scroll(function () {
        requestData(page);
    });
})

function requestData(page) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var res = xhr.responseText;//获得数据
            console.log("sucess",res);
            ++page;
            res = {
                code: 1,
                msg: "wrong",
                list: data.homeList
            };
            $('main').append(homeMain({
                list: res.list,
                beforMinute,
            }))
        } else {
            console.log("fail:",xhr.responseText);
            $(".main").append(homeMain({
                list: data.homeList,
                beforMinute,
            }));

        }
    };
    xhr.open('GET', "a.php", true);
    xhr.send("page=" + page + 1);
}