
var arr=JSON.parse(localStorage.getItem('d'));
var string1='';
if(localStorage.getItem('d')){
        $.ajax({
        url:'../data/c_indi.json',
        type:'get',
        success:function (data){
            var mar=JSON.parse(localStorage.getItem('d'));
            var string='';
            for(var i=0;i<data.length;i++){
                for(var n=0;n<mar.length;n++){
                    if(data[i].key==mar[n]){
                        string+='\
                        <ul>\
                        <li>'+data[i].p1+'</li>\
                        <li>\
                            <p>'+data[i].p2+'</p>\
                            <p>'+data[i].p3+'</p>\
                            <p>'+data[i].p4+'</p>\
                        </li>\
                        <li>'+data[i].p5+'</li>\
                    </ul>\
                        ';
                        string1+='\
                        <ul>\
                            <li>'+data[i].p2+'</li>\
                            <li>套件内</li>\
                        </ul>\
                        <ul>\
                            <li>'+data[i].p3+'</li>\
                            <li>套件内</li>\
                        </ul>\
                        '
                    }
                }
            }
            $('.c_p2').html('<h2>套件</h2>'+string);
        }
    })
    $.ajax({
        url:'../data/c_indiv.php',
        type:'get',
        data:'data=0',
        success:function (data){
            var mar=JSON.parse(localStorage.getItem('dle'));
            data=JSON.parse(data);
            if(localStorage.getItem('dle')){
                for(var i=0;i<data.length;i++){
                for(var n=0;n<mar.length;n++){
                    if(data[i].key==mar[n]){
                        string1+='\
                        <ul>\
                            <li>'+data[i].p1+'</li>\
                            <li>'+data[i].price+'</li>\
                        </ul>\
                        '
                    }
                }
            }
            }
            $('.c_pp3').html('<h2>个性化</h2>'+string1);
        }
    })
}else{
    $('.c_p2').html('<h2>套件</h2><ul class="c_ul"><li>￥-</li></ul>');
    $('.c_pp3').html('<h2>个性化</h2><ul class="c_ul"><li>￥-</li></ul>');
}




var arr1=JSON.parse(localStorage.getItem('num'));
var num=0;
var num1=0;
for(var i=0;i<arr1.length;i++){
    num+=parseInt(arr1[i]);
}
$('.c_rightf1').children().eq(1).html(
    "￥"+num+'.00'
)
$('.c_pliceul').html("￥"+num+'.00')

for(var i=1;i<arr1.length;i++){
    num1+=parseInt(arr1[i]);
}
if(num1<=0){
    $('.c_geplice').html('￥-');
}else{
    $('.c_geplice').html("￥"+num1+'.00')
}
