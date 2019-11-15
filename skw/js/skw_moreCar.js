$(function(){
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
            for(var i=0,len=$('.warCarimg').length;i<len;i++){
                if(offset( $('.warCarimg')[i] ).top<=(scrollT + windowH ) ){
                    $('.warCarimg img')[i].src= $('.warCarimg img')[i].getAttribute('data_src')
                }
            }
            for(var i=0,len=$('.granimg').length;i<len;i++){
                if(offset( $('.granimg')[i] ).top<=(scrollT + windowH ) ){
                    $('.granimg img')[i].src= $('.granimg img')[i].getAttribute('data_src')
                }
            }
          //  console.log( $('.quattroporteimg'));
            for(var i=0,len=$('.quattroporteimg').length;i<len;i++){
                if(offset( $('.quattroporteimg')[i] ).top<=(scrollT + windowH )){
                   $('.quattroporteimg img')[i].src= $('.quattroporteimg img')[i].getAttribute('data_src')
                }
            }
            for(var i=0,len=$('.biturboimg').length;i<len;i++){
                if(offset( $('.biturboimg')[i] ).top<=(scrollT + windowH ) ){
                   $('.biturboimg img')[i].src= $('.biturboimg img')[i].getAttribute('data_src')
                }
            }
            for(var i=0,len=$('.specialimg').length;i<len;i++){
                if(offset( $('.specialimg')[i] ).top<=(scrollT + windowH ) ){
                   $('.specialimg img')[i].src= $('.specialimg img')[i].getAttribute('data_src')
                }
            }
        }

    $.ajax({
        url:'../data/skw_moreCar.json',
        type:'get',
        dataType:'json',
        cache:false,
        success:function(json){
           var result='';
           $.each(json,function(index,item){
      result='<img data_src='+item.imgurl+' alt=" "><h4>'+item.biaoti+'</h4><p>'+item.year+'</p>';
           $('.'+item.CN).html(result);
           });
           loadImg();//加载
           $('.circle').css('display','none');
           //滚动
           window.onscroll = function (){
             loadImg();
            // clearInterval(timer);
           //vintage到页面顶部距离  滚动条滚动距离
           if($(document).scrollTop() >= $('.gran').offset().top){
               $('.circle').css('display','block');
           }
           else{
               $('.circle').css('display','none');
           }
            }
         //   var timer;
                $('.circle').on('click',function(e){
                // var circle=$(document).scrollTop();
                // timer=setInterval(function(){
                //     circle-=50;
                //     $(document).scrollTop(circle);
                //     if(circle<=0){
                //         circle=0;
                //         clearInterval(timer)
                //         $(document).scrollTop(0)
                //     }
                //     },1)
                move(0,e);
                }); 
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
