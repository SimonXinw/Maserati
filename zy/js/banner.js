var mySwiper = new Swiper('.swiper1', {
    on: {
        init: function () {
            swiperAnimateCache(this); //隐藏动画元素 
            this.emit('slideChangeTransitionEnd'); //在初始化时触发一次slideChangeTransitionEnd事件
        },
        slideChangeTransitionEnd: function () {
            swiperAnimate(this); //每个slide切换结束时运行当前slide动画
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani');//动画只展示一次
        }
    },
    // 自动切换
    autoplay:true,
    // 分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // 前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

var swiper = new Swiper('.swiper2', {
    slidesPerView: 5,
      //spaceBetween: 30,
      slidesPerGroup: 1,
      //loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});