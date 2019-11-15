// 图片懒加载
var allImgs = document.getElementsByTagName('img');
// 先执行一次打开首页
loadImg(allImgs);



// others swiper
var appendNumber = 5;
var prependNumber = 1;

var xOthersSwiper = new Swiper('.xothersswiper', {
    loop: true,
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 15,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// banner swiper
var xBannerSwiper = new Swiper('.x-banner-swiper', {
    autoplay: false,
    loop: true,
    speed: 2000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // 动画
    on: {
        init: function () {
            swiperAnimateCache(this); //隐藏动画元素 
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function () {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
        }
    }
});


// swiper 动画属性添加
var xBannerSpans = document.querySelectorAll('.x_banner .x-banner-swiper span');
for (var i = 0, len = xBannerSpans.length; i < len; i++) {
    xBannerSpans[i].classList.add('ani');
    xBannerSpans[i].setAttribute('swiper-animate-effect', 'fadeInUp'); //效果
    xBannerSpans[i].setAttribute('swiper-animate-duration', '0.25s'); //持续时间
    xBannerSpans[i].setAttribute('swiper-animate-delay', '0.25s'); //延迟时间
}





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