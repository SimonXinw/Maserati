$('.circle').css('display','none')
//vintage到页面顶部距离  滚动条滚动距离
window.onscroll=function(){
    if($(document).scrollTop()>=$('.vintage').offset().top){
        $('.circle').css('display','block')
    }else{
        $('.circle').css('display','none')
    }
}

$('.circle').on('click',function(e){
  move(0,e)
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
