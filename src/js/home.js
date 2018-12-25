import {formatTime} from "../utils/helper.js";
import {beforMinute} from "../utils/helper.js";
import '../css/home.css';

import data from "../utils/fakeData.js";
import homeMain from '../componets/homeMainType.ejs';
import foot from '../componets/foot.ejs'

$(".main").append(homeMain({
    list:data.homeList,
    beforMinute,
}));

$('.foot').append(foot());
