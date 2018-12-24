import "../css/toutiao.css";
import data from "../utils/fakeData.js";
import hotNews from "../componets/hotnews.ejs";
import youLike from "../componets/youLike.ejs";
import foot from "../componets/foot.ejs";

$(".hotnews").append(hotNews({
    list:data.newsList
}));
$(".youlike").append(youLike({
    list:data.newsList
}));
$(".bot").append(foot());