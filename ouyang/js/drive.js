
$('.o-drive .half input').blur(function () {
    $('.o-drive .item i').css('top', '15px');
    $('.o-drive .item i').css('left', '45px');

})
//事件委托
/* $(document).on("click",".o-drive .half-two .item",function () {
    alert(1);
}) */
$('.o-drive .half input').each(function (index, item) {
    $(item).focus(function () {
        $($('.o-drive .half i')[index]).css('top', '-15px');
        $($('.o-drive .half i')[index]).css('left', '33px');
    })
    $(item).blur(function () {
        if ($(this).val() != '') {
            $($('.o-drive .half i')[index]).css('display', 'none');
        } else {
            $($('.o-drive .half i')[index]).css('display', 'block');
        }
    })
})
$('.o-drive select').each(function (index, item) {
    $(item).click(function () {
        $($('.o-drive .half-two i')[index]).css('top', '-15px');
        $($('.o-drive .half-two i')[index]).css('left', '37px');
        if ($($('.o-drive .half-two i')[index]).css('top') == '-15px') {
            $($('.o-drive .half-two i')[index]).css('top', '15px');
            $($('.o-drive .half-two i')[index]).css('left', '45px');
        }
        if ($(this).val() != '') {
            $($('.o-drive .half-two i')[index]).css('display', 'none');
            $($('.o-drive .half-two i')[index]).css('top', '15px');
            $($('.o-drive .half-two i')[index]).css('left', '45px');
        } else {
            $($('.o-drive .half-two i')[index]).css('display', 'block');
            if ($($('.o-drive .half-two i')[index]).css('top') == '-15px') {
                $('.o-drive .item i').css('top', '15px');
                $('.o-drive .item i').css('left', '45px');
            }
        }

    })
})
document.onclick = function (e) {
    let ev = e || window.event;
    let target = ev.target || ev.srcElement;
    if (target.nodeName.toLowerCase() == 'select') {

    } else {
        $('.o-drive .half-two i').css('top', '15px');
        $('.o-drive .half-two i').css('left', '45px');
    }
}
$('.subm').click(function(){    
    console.log((localStorage.getItem(car)));
    
    if ($('.check').is(":checked")){
        if($('input').val() != ''){
            
            $(function () {
                $.ajax({
                    url: "../data/o-username.json",
                    type: "get",
                    datetype: "json",
                    cache: false,
                    success: function (json) {
                        
                        if(localStorage.getItem('name')){
                            localStorage.setItem(car, [$('#username').val(),$('#car').val(),$('#agent').val()]);
                            $('.respon').html('√ 预约成功');
                        }else{
                            $('.respon').html('× 对不起，请先登录')
                        }                                                    
                    }
                })
            })
        }else{
            $('.respon').html('× 对不起，请先登录')
        }        
    }else{
        $('.respon').html('× 对不起，请先勾选必填项')
    }

    
})
