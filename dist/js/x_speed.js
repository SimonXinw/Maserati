// common js
// 1. 获取传入 offset
function offset(obj){
    var l = 0;
    var t = 0;
    var bdl = obj.clientLeft;//目标元素的左边框宽度
    var bdt = obj.clientTop;//目标元素的上边框宽度
    while(obj){//循环累加目标元素到定位父级的距离
        l = l + obj.offsetLeft+obj.clientLeft;
        t = t + obj.offsetTop+obj.clientTop;
        obj = obj.offsetParent;//每次循环之后指向离他最近的定位父级
    }
    return {left:l-bdl,top:t-bdt};
}

// 懒加载
var allImgs = document.querySelectorAll('img');

function loadImg(dom){

    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    var windowH = document.documentElement.clientHeight || document.body.clientHeight;

    for (var i = 0, len = dom.length; i < len; i++){
        if ( offset(dom[i]).top <= (scrollT + windowH - 100) ) {//图片进入可视区
            dom[i].src = dom[i].getAttribute('data-src');//设置图片src
        }
    }
}
// do   
loadImg(allImgs);




// others swiper 
var appendNumber = 5;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 15,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 回到顶部
var xRetop = document.querySelector('.x_retop');
var timer;

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
window.onscroll = function(){

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > document.documentElement.clientWidth*0.36){
        xRetop.style.display = 'block';
    } else{
        xRetop.style.display = 'none';
    }

    //  load img
    loadImg(allImgs);
}