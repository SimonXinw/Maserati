
$('.c_list p').on('click',function (){
    $(this).addClass('c_listColor').siblings().removeClass('c_listColor')
        $.ajax({
        url:'../data/c_allocation.php',
        type:'get',
        data:'data='+$(this).index(),
        success:function (data){
            data = JSON.parse(data);
            var num='';
            for(var i=0;i<data.length;i++){
                num+='\
                <div class="c_carbox">\
                <div class="c_carinebox">\
                    <h2>'+data[i].engine+'</h2>\
                    <div class="c_data">\
                        <span>2019</span>\
                    </div>\
                    <div class="c_carimg">\
                        <img src="../imgs/'+data[i].logoimg+'" alt="">\
                    </div>\
                    <div class="c_price">\
                        <div class="c_price1">\
                            <p>起售价</p>\
                            <span>'+data[i].displacement+'</span>\
                        </div>\
                        <a href="../html/c_indiv.html" class="c_priceRight">个性化定制</a>\
                    </div>\
                    <div class="c_doc">\
                        <span>引擎布局</span>\
                        <span>'+data[i].speed+'</span>\
                    </div>\
                    <div class="c_doc">\
                        <span>排量</span>\
                        <span>'+data[i].chunk+'</span>\
                    </div>\
                    <div class="c_doc">\
                        <span>加速</span>\
                        <span>'+data[i].maxengine+'</span>\
                    </div>\
                    <div class="c_doc">\
                        <span>最高车速</span>\
                        <span>'+data[i].maxspeed+'</span>\
                    </div>\
                    <div class="c_doc">\
                        <span>最大功率</span>\
                        <span>'+data[i].power+'</span>\
                    </div>\
                    <div class="c_doc">\
                        <span>牵引力</span>\
                        <span>'+data[i].traction+'</span>\
                    </div>\
                    <div class="c_carn">\
                        <p><span class="iconfont icon-jiahao"></span></p>\
                        <span>标准配置</span>\
                    </div>\
                </div>\
                </div>\
                '
            }
            $('.c_carlist').html(num);
        }
    })
})


$.ajax({
    url:'../data/c_allocation.php',
    type:'get',
    data:'data=0',
    success:function (data){
        data = JSON.parse(data);
        var num='';
        for(var i=0;i<data.length;i++){
            num+='\
            <div class="c_carbox">\
            <div class="c_carinebox">\
                <h2>'+data[i].engine+'</h2>\
                <div class="c_data">\
                    <span>2019</span>\
                </div>\
                <div class="c_carimg">\
                    <img src="../imgs/'+data[i].logoimg+'" alt="">\
                </div>\
                <div class="c_price">\
                    <div class="c_price1">\
                        <p>起售价</p>\
                        <span>'+data[i].displacement+'</span>\
                    </div>\
                    <a href="../html/c_indiv.html" class="c_priceRight">个性化定制</a>\
                </div>\
                <div class="c_doc">\
                    <span>引擎布局</span>\
                    <span>'+data[i].speed+'</span>\
                </div>\
                <div class="c_doc">\
                    <span>排量</span>\
                    <span>'+data[i].chunk+'</span>\
                </div>\
                <div class="c_doc">\
                    <span>加速</span>\
                    <span>'+data[i].maxengine+'</span>\
                </div>\
                <div class="c_doc">\
                    <span>最高车速</span>\
                    <span>'+data[i].maxspeed+'</span>\
                </div>\
                <div class="c_doc">\
                    <span>最大功率</span>\
                    <span>'+data[i].power+'</span>\
                </div>\
                <div class="c_doc">\
                    <span>牵引力</span>\
                    <span>'+data[i].traction+'</span>\
                </div>\
                <div class="c_carn">\
                    <p><span class="iconfont icon-jiahao"></span></p>\
                    <span>标准配置</span>\
                </div>\
            </div>\
            </div>\
            '
        }
        $('.c_carlist').html(num);
    }
});
