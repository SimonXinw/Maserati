$('.c_head').css('position', 'static');
$(window).scroll(function () {
    if ($(window).scrollTop() > 76) {
        $('.c_rightf').css({ 'position': "fixed", "top": 48 })
        $('.c_nav').css('position', 'fixed')
        $('.c_indicc').css('marginTop', 48)
    } else {
        $('.c_rightf').css('position', "static")
        $('.c_nav').css('position', 'static')
        $('.c_indicc').css('marginTop', 0)
    }
    if ($(window).scrollTop() > $('.c_baner').height() - 705) {
        $('.c_rightf').css({ 'position': "absolute", 'top': $('.c_baner').height() - 780 })
    }
})

$('.c_indifoot ul li').on('click', function () {
    $(this).addClass('c_indili').siblings().removeClass('c_indili')
    $.ajax({
        url: '../data/c_indiv.php',
        type: 'get',
        data: 'data='+$(this).index(),
        success: function (data) {
            data = JSON.parse(data);
            var num = '';
            for (var i = 0; i < data.length; i++) {
                num += '\
            <div class="c_indifootc">\
                        <img src="'+ data[i].img + '" alt="">\
                        <p>'+ data[i].p1 + '</p>\
                        <p>'+ data[i].price + '<span>添加</span></p>\
                    </div>\
            '
            }
            $('.c_indifootcc').html(
                num
            )
        }
    })
})

$.ajax({
    url: '../data/c_indiv.php',
    type: 'get',
    data: 'data=0',
    success: function (data) {
        data = JSON.parse(data);
        var num = '';
        for (var i = 0; i < data.length; i++) {
            num += '\
        <div class="c_indifootc">\
                    <img src="'+ data[i].img + '" alt="">\
                    <p>'+ data[i].p1 + '</p>\
                    <p key="span'+i+'" class="c_ppp">'+data[i].price+'<span class="c_span'+i+' c_span">添加</span></p>\
                </div>\
        '
        }
        $('.c_indifootcc').html(
            num
        )
        
        var atttr=[];
        if(localStorage.getItem('dle')){
            atttr=JSON.parse(localStorage.getItem('dle'))
            for(var i=0;i<atttr.length;i++){
                if(atttr[i]==$('.c_ppp').attr('key')){
                    $('.c_span0').css({'background':'#fff','color':'#333'}).html('移除');
                }
                if(atttr[i]==$('.c_ppp').attr('key')){
                    $('.c_span1').css({'background':'#fff','color':'#333'}).html('移除');
                }
                if(atttr[i]==$('.c_ppp').attr('key')){
                    $('.c_span2').css({'background':'#fff','color':'#333'}).html('移除');
                }
                if(atttr[i]==$('.c_ppp').attr('key')){
                    $('.c_span3').css({'background':'#fff','color':'#333'}).html('移除');
                }
                if(atttr[i]==$('.c_ppp').attr('key')){
                    $('.c_span4').css({'background':'#fff','color':'#333'}).html('移除');
                }
            }
        }
        $('.c_span').on('click',function (){
        if(atttr.length!=0){
            for(var i=0;i<atttr.length;i++){
                if(atttr[i]==$(this).parent().attr('key')){
                    atttr.splice(i,1);
                    localStorage.setItem('dle',JSON.stringify(atttr));
                    $(this).css({'background':'#0b2749','color':'#fff','transition':'all 0.5s'}).html('添加');
                    var aaa=$(this).parent().html();
                    aaa=aaa.split('<span');
                    splm(aaa[0]);
                    zong();
                    return;
                }
            }
            atttr.push($(this).parent().attr('key'));
            localStorage.setItem('dle',JSON.stringify(atttr));
            $(this).css({'background':'#fff','color':'#333','transition':'all 0.5s'}).html('移除');
            var bbb=$(this).parent().html();
                bbb=bbb.split('<span');
                splm(bbb[0]);
            spl(bbb[0]);
            zong();
        }else{
            $(this).css({'background':'#fff','color':'#333','transition':'all 0.5s'}).html('移除');
            atttr.push($(this).parent().attr('key'));
            localStorage.setItem('dle',JSON.stringify(atttr));
            var ccc=$(this).parent().html();
                ccc=ccc.split('<span');
                splm(ccc[0]);
            spl(ccc[0]);
            zong();
        }
        })


    }
})


$('.c_carpt img').on('click',function (){
    var num=$(this).index()-1;
    if(num == shu){
        return;
    }
    clearInterval(time);
    $('.c_carbo').children().eq(1).remove();
    $('.c_rightimg').children().eq(1).remove();
    timee(num);
    $('.c_carbo').append('<img src="../imgs/c_carcc'+num+'.jpg" alt="" class="c_cm">');
    $('.c_carbo img').eq(1).css('opacity');
    $('.c_cm').css({'opacity':1,'transition':'opacity 1s','z-index':2});
    $('.c_rightimg').append('<img src="../imgs/c_carcc'+num+'.jpg" alt="" class="c_cm">');
    $('.c_rightimg img').eq(1).css('opacity');
    $('.c_cm').css({'opacity':1,'transition':'opacity 1s','z-index':2});
    shu=num;
})

var shu=0;
$('.c_carpt2 img').on('click',function (){
    var num=$(this).index()+1;
    if(num == shu){
        return;
    }
    clearInterval(time);
    $('.c_carbo').children().eq(1).remove();
    $('.c_rightimg').children().eq(1).remove();
    timee(num);
    $('.c_carbo').append('<img src="../imgs/c_carcc'+num+'.jpg" alt="" class="c_cm">');
    $('.c_carbo img').eq(1).css('opacity');
    $('.c_cm').css({'opacity':1,'transition':'opacity 1s','z-index':2});
    $('.c_rightimg').append('<img src="../imgs/c_carcc'+num+'.jpg" alt="" class="c_cfff">');
    $('.c_rightimg img').eq(1).css('opacity');
    $('.c_cfff').css({'opacity':1,'transition':'opacity 1s','z-index':2});
    shu=num;
})

var time;
function timee(num){
    time=setInterval(function (){
        if($('.c_carbo img').eq(1).css('opacity')==1){
            $('.c_carbo img').eq(0).attr('src','../imgs/c_carcc'+num+'.jpg');
            $('.c_carbo img').eq(1).css('opacity',0);
            $('.c_rightimg img').eq(0).attr('src','../imgs/c_carcf'+num+'.jpg');
            $('.c_rightimg img').eq(1).css('opacity',0);
            clearInterval(time);
        }
    },1)
}


$('.c_nav li').eq(0).click(function (e){
    move(78,e);
})

$('.c_nav li').eq(1).click(function (e){
    move(894,e);
})

$('.c_nav li').eq(2).click(function (e){
    move(2191,e);
})



    $(window).scroll(function (){
        scrol();
    })

function scrol(){
    if($(window).scrollTop()>=76){
        $('.c_nav li').eq(0).css('border-bottom','5px solid #0b2749').siblings().css('border','none');
    }
    if($(window).scrollTop()>=894){
        $('.c_nav li').eq(1).css('border-bottom','5px solid #0b2749').siblings().css('border','none');
    }
    if($(window).scrollTop()>=2191){
        $('.c_nav li').eq(2).css('border-bottom','5px solid #0b2749').siblings().css('border','none');
    }
}

var timer;
function move(target, e) {
    clearInterval(timer);
    e.preventDefault()
    timer = setInterval(function () {
        var speed = (target - $(document).scrollTop()) / 5;
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

var arr=[];
if(localStorage.getItem('d')){
    arr=JSON.parse(localStorage.getItem('d'))
    for(var i=0;i<arr.length;i++){
        if(arr[i]==$('.c_indiimg').eq(0).children().attr('key')){
            $('.c_cor').css({'background':'#fff','color':'#333'}).html('移除');
        }
        if(arr[i]==$('.c_indiimg').eq(1).children().attr('key')){
            $('.c_cor1').css({'background':'#fff','color':'#333'}).html('移除');
        }
        if(arr[i]==$('.c_indiimg').eq(2).children().attr('key')){
            $('.c_cor2').css({'background':'#fff','color':'#333'}).html('移除');
        }
    }
}
$('.c_indiimg  span').on('click',function (){
if(arr.length!=0){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==$(this).parent().attr('key')){
            arr.splice(i,1);
            localStorage.setItem('d',JSON.stringify(arr));
            $(this).css({'background':'#0b2749','color':'#fff','transition':'all 0.5s'}).html('添加');
            splm($(this).parent().next().html());
            zong();
            return;
        }
    }
    arr.push($(this).parent().attr('key'));
    localStorage.setItem('d',JSON.stringify(arr));
    $(this).css({'background':'#fff','color':'#333','transition':'all 0.5s'}).html('移除');
    spl($(this).parent().next().html());
    zong();
}else{
    $(this).css({'background':'#fff','color':'#333','transition':'all 0.5s'}).html('移除');
    arr.push($(this).parent().attr('key'));
    localStorage.setItem('d',JSON.stringify(arr));
    spl($(this).parent().next().html());
    zong();
}
})


spl($('.c_rightf').children().eq(1).html());
function spl(num){
    if(localStorage.getItem('num')){
    var arr=JSON.parse(localStorage.getItem('num'));
    var str1='';
    num=num.split(/[￥ , .]/);
    for(var i=1;i<num.length-1;i++){
        str1+=num[i]
        }
    for(var i=0;i<arr.length;i++){
        if(arr[i]==str1){
            return;
        }
    }
    arr.push(str1);
    arr=JSON.stringify(arr);
        localStorage.setItem('num',arr);
    }else{
        var arr=[];
        var str1='';
        num=num.split(/[￥ , .]/);
        for(var i=1;i<num.length-1;i++){
        str1+=num[i]
        }
        arr.push(str1);
        arr=JSON.stringify(arr);
        localStorage.setItem('num',arr);

    }
}


function splm(num){
    var arr=JSON.parse(localStorage.getItem('num'));
    var str1='';
    num=num.split(/[￥ , .]/);
    for(var i=1;i<num.length-1;i++){
        str1+=num[i]
        }
    for(var i=0;i<arr.length;i++){
        if(arr[i]==str1){
            arr.splice(i,1)
        }
    }
    arr=JSON.stringify(arr);
    localStorage.setItem('num',arr);
}

zong();
function zong(){
    var arr=JSON.parse(localStorage.getItem('num'));
    var shu=0;
    for(var i=0;i<arr.length;i++){
        shu+=parseInt(arr[i]);
    }
    $('.c_rightf').children().eq(1).html(
        "￥"+shu+'.00'
    )
}

