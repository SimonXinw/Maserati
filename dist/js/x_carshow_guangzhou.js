// ajax
$.ajax({
    url: '../data/guangzhou.json',
    type: 'get',
    // cache: false,//不使用缓存
    dataType: 'json',
    // jsonpCallback: 'myCallback',
    // timeout: 5000,//设置超时时间
    success: function myCallback(json) {
        // 1. 遍历数组对象  先 把数据传到data-src
        $.each(json, function (index, item) {
            $(item.cn + ' img').attr('data-src', item.imgurl);
        });

        // 2. 取完数据 懒加载 把data-src数据 赋值给 src
        loadImg(allImgs);

    },
    error: function (err) {
        alert('请求失败');
        console.log(err.status);
    },
    // complete: function (){
    //     console.log('请求完成');
    // }
});


// 图片懒加载
var allImgs = document.getElementsByTagName('img');


// 回到顶部
var xRetop = document.querySelector('.x_retop');
var timer;
// 点击
xRetop.onclick = function () {

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var html = document.documentElement || document.body;
    clearInterval(timer);
    timer = setInterval(function () {
        scrollTop -= 40;
        // console.log(scrollTop);

        if (scrollTop <= 0) {
            clearInterval(timer);
            scrollTop = 0;
        }

        html.scrollTop = scrollTop;
    }, 8);
}

// 滚动条滑动事件判断
window.onscroll = function () {

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > document.documentElement.clientWidth * 0.36) {
        xRetop.style.display = 'block';
    } else {
        xRetop.style.display = 'none';
    }

    //  持续执行图片懒加载判断
    loadImg(allImgs);
}


document.onclick = function(){

    console.log(66);
    $.ajax({
        url: '../data/post.php',
        type: 'post',
        data: 'name=skw',
        // data: {"age":28,"sex":"男"},
        cache: false,//不使用缓存
        dataType: 'json',
        timeout: 5000,//设置超时时间
        success: function (json) {
            // // console.log(json);//object
            // $('.con').text(json.name);
        },
        error: function (err) {
            // alert('请求失败');
            console.log(err.status);
        },
        complete: function () {
            console.log('请求完成');
        }
    });
}


