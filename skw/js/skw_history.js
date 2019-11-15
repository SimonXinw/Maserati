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
function loadImg(){
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;//滚动条滚动高度
    var windowH = document.documentElement.clientHeight || document.body.clientHeight; //页面可视高度
    for (var i = 0, len = $('.loadimg').length; i < len; i++){
        if ( offset($('.loadimg')[i] ).top <= (scrollT + windowH ) ) {//图片进入可视区
            $('.loadimg')[i].src = $('.loadimg')[i].getAttribute('data_src');//设置图片src
        }
    }
}
$(function(){
    $.ajax({
        url:'../data/skw_history.json',
        type:'get',
        dataType:'json',
        cache:false,
      //  crossDomain:true,
        success:function(json){
       //     console.log(json);  
           var result='';
           $.each(json,function(index,item){
       //        console.log(item);
     //          console.log(item.imgurl);
         result='<img data_src='+item.imgurl+' alt=" " class="loadimg"><span></span>'
             $('.'+item.CN).html( $('.'+item.CN).html()+result);
           })
    loadImg();
    $('.circle').css('display','none')
    window.onscroll = function (){
    loadImg();
    //vintage到页面顶部距离  滚动条滚动距离
    if($(document).scrollTop()>=$('.li4').offset().top){
        $('.circle').css('display','block')
    }else{
        $('.circle').css('display','none')
    }
     }
$('.circle').on('click',function(e){
move(0,e)
})
        }
    })    
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

