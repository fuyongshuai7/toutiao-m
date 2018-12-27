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
        // requestData(page);
        jqRequestData(page);
    });
})

// function requestData(page) {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             var res = xhr.responseText;//获得数据
//             ++page;
//             res = {
//                 code: 1,
//                 msg: "wrong",
//                 list: data.homeList
//             };
//             $('main').append(homeMain({
//                 list: res.list,
//                 beforMinute,
//             }))
//         } else {
//             $(".main").append(homeMain({
//                 list: data.homeList,
//                 beforMinute,
//             }));

//         }
//     };
//     xhr.open('GET', "a.php", true);
//     xhr.send("page=" + page + 1);
// }

function jqRequestData(page) {
    $.ajax({
        url: "a.php",
        success: function (res) {
            ++page;
            $('.main').append(homeList({
                list: res.list,
                beforMinute,
            }));
        },
        error: function () {
            $(".main").append(homeMain({
                list: data.homeList,
                beforMinute,
            }));
        }
    })
}