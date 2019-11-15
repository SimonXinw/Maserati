$(function(){
    var num=0,timer;
    $('#content i').on('click',function(){//每个i标签点击事件
        var index=$('#content i').index($(this))
            //此标签下对应的 read是否有此类名  jq对象->js对象->jq对象
        $( $('.read')[index] ).toggleClass('showhide')
            //判断此元素是否有类名
            if( $( $('.read')[index] ).hasClass('showhide')){
                $( $('#content i b')[index]).toggleClass('bool') //有则删
                $( $('#content i em')[index]).toggleClass('bool')  //无则加
                timer=setInterval(function(){
                num+=5;
                $( $('#content i span')[index] ).css('transform','rotate('+num+'deg)')
                if(num>=45){
                    clearInterval(timer)
                    num=45;
                    $( $('#content i span')[index] ).css('transform','rotate('+num+'deg)')
                }
                },50)
            }
            else{
                $( $('#content i b')[index]).toggleClass('bool') //有则删
                $( $('#content i em')[index]).toggleClass('bool')  //无则加
                timer=setInterval(function(){
                num-=5;
                 $( $('#content i span')[index] ).css('transform','rotate('+num+'deg)')
                if(num<=0){
                clearInterval(timer)
                num=0;
                $( $('#content i span')[index] ).css('transform','rotate('+num+'deg)')
                }
                },50)
            }
     })
     $('.circle').css('display','none')
//vintage到页面顶部距离  滚动条滚动距离
window.onscroll=function(){
    if($(document).scrollTop()>=$('.story').offset().top){
        $('.circle').css('display','block')
    }else{
        $('.circle').css('display','none')
    }
}

$('.circle').on('click',function(e){
  move(0,e)
})
})
var timer2;
function move(target, e) {
    clearInterval(timer2);
    e.preventDefault()
    timer2 = setInterval(function () {
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