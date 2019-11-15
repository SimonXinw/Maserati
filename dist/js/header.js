
//输出头部
$('header').html('<nav class="navbar">\
<div class="container-fluid">\
    <div class="navbar-header">\
        <a class="navbar-brand" href="index.html">\
            <div aria-label="Maserati home page" class="logo"></div>\
        </a>\
    </div>\
    <ul class="nav navbar-nav daoh">\
        <li><a href="#">品牌</a><span class="submenu"></span><i></i><div class="submenu-list">\
           <div class="list container-fluid">\
               <ul>\
                    <li class="cesh"><a href="#">品牌故事</a></li>\
                    <li><a href="./skw_blood.html">意式血统</a></li>\
                    <li><a href="./skw_history.html">传奇历史</a></li>\
                    <li><a href="./skw_historyCar.html">古董车</a></li>\
                    <li><a href="./skw_moreCar.html">更多车型</a></li>\
               </ul>\
               <ul>\
               <li class="cesh"><a href="#">驾驭激情</a></li>\
                    <li><a href="#">大师驾驶课程</a></li>\
                    <li><a href="#">百年赛车传奇</a></li>\
                    <li><a href="#">工厂之旅</a></li>\
               </ul>\
               <ul>\
               <li class="cesh"><a href="#">合作伙伴</a></li>\
                    <li><a href="#">杰尼亚</a></li>\
                    <li><a href="#">宝格丽</a></li>\
                    <li><a href="#">壳牌</a></li>\
               </ul>\
           </div>\
        </div></li>\
        <li><a href="#">车型</a> <span class="submenu"></span><i></i><div class="submenu-list">\
            <div class="model-container">\
                <div class="model">\
                    <div class="title">Ghibli轿车系列</div>\
                    <div class="car">\
                        <a   href="#"><img src="../imgs/c1.png"></a>\
                    </div>\
                    <div class="more">\
                        <div class="price">\
                            <div class="pre">建议零售价</div><div class="number">88.08万RMB起</div>\
                        </div><div class="cta-container">\
                            <div><a class="cta white"  href="./more.html">了解更多</a></div>\
                            <div><a  class="cta blue" href="../html/c_allocation.html">个性化配置</a>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <div class="model">\
                    <div class="title">Levante SUV系列</div>\
                    <div class="car">\
                        <a   href="#"><img src="../imgs/side.jpg"></a>\
                    </div>\
                    <div class="more">\
                        <div class="price">\
                            <div class="pre">建议零售价</div><div class="number">96.18万RMB起</div>\
                        </div><div class="cta-container">\
                            <div><a class="cta white"  href="./levante.html">了解更多</a></div>\
                            <div><a  class="cta blue" href="../html/c_allocation.html">个性化配置</a>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <div class="model">\
                    <div class="title">Quattroporte总裁系列</div>\
                    <div class="car">\
                        <a   href="#"><img src="../imgs/quattroporte_front.jpg"></a>\
                    </div>\
                    <div class="more">\
                        <div class="price">\
                            <div class="pre">建议零售价</div><div class="number">140.58万RMB起</div>\
                        </div><div class="cta-container">\
                            <div><a class="cta white"  href="./quattroporte.html">了解更多</a></div>\
                            <div><a  class="cta blue" href="../html/c_allocation.html">个性化配置</a>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
\
            </div>\
        </div></li>\
        <li><a href="#">新闻</a> <span class="submenu"></span><i></i><div class="submenu-list">\
                <div class="list container-fluid">\
                        <ul>\
                        <li class="cesh"><a href="#">新闻 & 活动</a></li>\
                             <li><a href="./news_activity_speed.html">速度嘉年华</a></li>\
                             <li><a href="./news_activity_match.html">古董车赛事</a></li>\
                             <li><a href="./news_carshow_guangzhou.html">2018广州车展</a></li>\
                        </ul>\
                        <ul>\
                        <li class="cesh"><a href="#">车展</a></li>\
                             <li><a href="#">2019成都车展</a></li>\
                             <li><a href="#">2019上海车展</a></li>\
                             <li><a href="#">2019日内瓦车展</a></li>\
                        </ul>\
                        <ul>\
                        <li class="cesh"><a href="#">驾驶体验</a></li>\
                             <li><a href="#">大师驾驶课程体验</a></li>\
                             <li><a href="#">MY19驾驶体验</a></li>\
                             <li><a href="#">冬季驾驶体验</a></li>\
                        </ul>\
                    </div>\
        </div></li>\
        <li><a href="./skw_exchange.html">论坛</a> <span class="submenu"></span><i></i></li>\
    </ul>\
    <ul class="dengl">\
        <li class="login"><a href="./login.html">登录</a></li>\
    </ul>\
</div>\
</nav>\
')
// 鼠标移入移出事件
$(".daoh li").mouseover(function(){
    $(this).find('.submenu-list').css("display","flex");
   
});
$(".daoh").mouseout(function(){
    
    $(".submenu-list").css("display","none");
   
});

if(localStorage.getItem('name')){
   
  $('.login ').html('<span class="lo1" >'+'用户 :  '+localStorage.getItem('name')+'</span>')
  $('.login').append('<span class="lo2">退出</span>')
}
$('.lo2').click(function(){
    localStorage.clear();  
    location.reload()     
})