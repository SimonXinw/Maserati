

$(function () {
    $.ajax({
        url: "../data/more.json",
        type: "get",
        datetype: "json",
        cache: false,
        success: function (json) {
            console.log(json);
            json = json.json2;
            var s;
            $('.o_maintop .maintop-r').html(`<h3>${json.btn1[0]}</h3><div class="des">${json.btn1[1]}</div>`);
            $('.o_maintop .maintop-l').html(`<img src="${json.btn1[2]}" alt="">`)
            $('.o_mainmid').html(` <div class="txt">
            <h2>${json.btn2[0]}</h2>
            <p>${json.btn2[1]}</p>
            </div>
             <div class="x_picture_group x_width92">
            <div class="gp1">
                <a class="gp1_a1" href=""><img src="${json.btn2[2]}" alt=""></a>
                <a class="gp1_a2" href=""><img src="${json.btn2[3]}" alt=""></a>
            </div>
            <div class="gp2">
                <a class="gp2_a1" href=""><img src="${json.btn2[4]}" alt=""></a>
                <a class="gp2_a2" href=""><img src="${json.btn2[5]}" alt=""></a>
            </div>
            <div class="gp3">
                <a class="gp3_a1" href=""><img src="${json.btn2[6]}" alt=""></a>
                <a class="gp3_a2" href=""><img src="${json.btn2[7]}" alt="" class="gp3_img2"></a>
            </div>`);
           
            $('.o_swip .swiper-slide').each(function (index, item) {
                $(item).html(`<img src="${json.btn4[index][0]}" alt="">
                <div class="mes">
                    <div class="borderblue"></div>
                    <span>+</span>
                    <p>${json.btn4[index][1]}</p>`);
            })
        }
    })
})