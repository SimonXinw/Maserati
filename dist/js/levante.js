//import { log } from "util"

//移动变色功能

$('#move').on('mousedown', function (e) {
    var e = event || ev
    var left = e.offsetX;
    //console.log(left);
    $('.o_maingran').on('mousemove', function (e) {

        $('.slider').css('left', e.clientX - $('.o_maingran')[0].offsetLeft)
        $('.changer1').css('width', e.clientX - $('.o_maingran')[0].offsetLeft)
        //console.log($('.o_maingran')[0].offsetLeft);
        $(document).on('mouseup', function () {
            $('.o_maingran').off('mousemove')
            $('.o_maingran').off('mousemove')
        })

    })
})
var elem = document.querySelector('.o_maingran');
elem.onselectstart = function () {
    return false;
};
//轮播
var imgs1 = document.querySelectorAll('.changer1 img')
var imgs2 = document.querySelectorAll('.changer2 img')
var lis = document.querySelectorAll('.chanp li')
var index = 0;
var preindex = 0;
var le = document.querySelector('#left')
var ri = document.querySelector('#right')
for (var i = 0, len = lis.length; i < len; i++) {
    lis[i].index = i;
    lis[i].onclick = function () {
        index = this.index
        active()
        imgs1[this.index].style.display = 'block';
        imgs2[this.index].style.display = 'block';
    }
}


ri.onclick = function () {
    console.log(index);
    index++;
    if (index > 2) {
        index = 0
    }
    start()
}
le.onclick = function () {
    console.log(index);
    index--;
    if (index < 0) {
        index = 2;
    }
    start()
}
function active() {
    lis[preindex].classList.remove('blue')
    imgs1[preindex].style.display = 'none';
    imgs2[preindex].style.display = 'none';

    preindex = index;
    lis[index].classList.add('blue')
}
function start() {
    imgs1[index].style.display = 'block';
    imgs2[index].style.display = 'block';
    lis[index].classList.add('blue')
    imgs1[preindex].style.display = 'none';
    imgs2[preindex].style.display = 'none';
    lis[preindex].classList.remove('blue')
    preindex = index;
}

// var a=$('.slider').css('left')
// console.log(a);

// var move = document.querySelector('#move')
// var slider = document.querySelector('.slider')
// console.log(slider);
// var l = slider.getAttribute('left');
// console.log(l);
// move.onclick= function(ev){
//     var l = slider.style.left;
//     console.log(l);

// }

// swiper

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//nav
var nav = $('.o_nav .btn a')
$(document).on('scroll', function () {
    var to = $(document).scrollTop();

    if (to < 600) {
        $(nav[0]).removeClass('moule')
        $('.o_nav .btn').css('position', 'relative')
        $('.returntop').css('display', 'none')
    }
    if (to >= 600) {
        $('.o_nav .btn').css('position', 'fixed')
        $('.returntop').css('display', 'block')
    }
    if (to >= 600 && to < 1100) {
        $(nav[0]).addClass('moule')
    } else {
        $(nav[0]).removeClass('moule')
    }
    if (to >= 1100 && to < 3550) {
        $(nav[1]).addClass('moule')

    } else {
        $(nav[1]).removeClass('moule')
    }
    if (to >= 3550 && to < 4350) {
        $(nav[2]).addClass('moule')

    } else {
        $(nav[2]).removeClass('moule')
    }
    if (to >= 4350 && to < 5650) {
        $(nav[3]).addClass('moule')

    } else {
        $(nav[3]).removeClass('moule')
    }
    if (to >= 5650 && to < 6200) {
        $(nav[4]).addClass('moule')

    } else {
        $(nav[4]).removeClass('moule')
    }
    if (to >= 6200 && to < 6650) {
        $(nav[5]).addClass('moule')

    } else {
        $(nav[5]).removeClass('moule')
    }
    if (to >= 6650 && to < 7730) {
        $(nav[6]).addClass('moule')

    } else {
        $(nav[6]).removeClass('moule')
    }
    if (to >= 7730) {
        $(nav[7]).addClass('moule')
    }else {
        $(nav[7]).removeClass('moule')
    }
})
$('.o_nav .btn1').on('click', function (e) {
    move(600, e);
})
$('.o_nav .btn2').on('click', function (e) {
    move(1100, e);
})
$('.o_nav .btn3').on('click', function (e) {
    move(3550, e);
})
$('.o_nav .btn4').on('click', function (e) {
    move(4350, e);
})
$('.o_nav .btn5').on('click', function (e) {
    move(5650, e);
})
$('.o_nav .btn6').on('click', function (e) {
    move(6200, e);
})
$('.o_nav .btn7').on('click', function (e) {
    move(6650, e);
})
$('.o_nav .btn8').on('click', function (e) {
    move(7730, e);
})
$('.returntop').on('click', function (e) {
    move(0, e);
})
var timer;
function move(target, e) {
    clearInterval(timer);
    e.preventDefault()
    timer = setInterval(function () {
        var speed = (target - $(document).scrollTop()) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);//取整，避免数据丢失
        // 剩余运动量 <= 每次的运动量
        if (Math.abs(target - $(document).scrollTop()) <= Math.abs(speed)) {
            $(document).scrollTop(target);//设置终点            
            clearInterval(timer);
        } else {
            $(document).scrollTop($(document).scrollTop() + speed);
        }
    }, 20)
}
//icon nav
$('.o_icon .ico li').mouseover(function () {
    $(this).addClass('active');
})
$('.o_icon .ico li').mouseout(function () {
    $(this).removeClass('active')
})

//车型系列
var demo = 0;
var preindex = 0;
$('.o_ghi .arrow-up').click(function () {
    demo--;
    if (demo < 0) {
        demo = $('.o_ghi .module-list p').length - 1;
    }    
    $($('.o_ghi .module-list p')[demo]).addClass('big')
    $($('.o_ghi .module-list p')[preindex]).removeClass('big')
    //图片
    $($('.o_ghi .img-top')).addClass('no')
    $($('.o_ghi .img-top')[demo]).removeClass('no')
    $($('.o_ghi .img-mid')).addClass('no')
    $($('.o_ghi .img-mid')[demo]).removeClass('no')
    preindex = demo;
    chose(257, 243, 316, 264,405,292,434,304);
})
$('.o_ghi .arrow-down').click(function () {
    demo++
    if (demo >= $('.o_ghi .module-list p').length) {
        demo = 0;
    }
    $($('.o_ghi .module-list p')[demo]).addClass('big')
    $($('.o_ghi .module-list p')[preindex]).removeClass('big')
    //图片
    $($('.o_ghi .img-top')).addClass('no')
    $($('.o_ghi .img-top')[demo]).removeClass('no')
    $($('.o_ghi .img-mid')).addClass('no')
    $($('.o_ghi .img-mid')[demo]).removeClass('no')
    preindex = demo;
    chose(257, 243, 316, 264,405,292,434,304);
})
$('.o_ghi .module-list p').each(function (index, item) {
    $(item).click(function () {
        demo=index;              
        $('.o_ghi .module-list p').removeClass('big');
        $('.o_ghi .img-top').addClass('no')
        $($('.o_ghi .img-top')[demo]).removeClass('no')
        $(this).addClass('big');
        $('.o_ghi .img-mid').addClass('no')
        $($('.o_ghi .img-mid')[demo]).removeClass('no')
        $(this).addClass('big');
        chose(257, 243, 316, 264,405,292,434,304);
        preindex = demo;
    })
})
function chose(kw1, vs1, kw2, vs2, kw3, vs3, kw4, vs4) {
    if ($('.o_ghi .module-list .big').attr('type') == 'Levante') {
        changenum(kw1, vs1)
    }
    if ($('.o_ghi .module-list .big').attr('type') == 'LevanteS') {
        changenum(kw2, vs2)
    }
    if ($('.o_ghi .module-list .big').attr('type') == 'LevanteGTS') {
        changenum(kw3, vs3)
    }
    if ($('.o_ghi .module-list .big').attr('type') == 'LevanteTROFEO') {
        changenum(kw4, vs4)
    }
}
function changenum(kw, vs) {
    clearInterval(timer)
    var k = 0, v = 0;
     timer = setInterval(function () {
        k+=2;
        v+=2;
        if (k >= kw) {
            k = kw;
        }
        if (v >= vs) {
            v = vs;
        }
        if (k == kw && v == vs) {
            clearInterval(timer);
        }
        $('.mid-con .kw-value').html(k)
        $('.mid-con .v-value').html(v)
    }, 10)
}




