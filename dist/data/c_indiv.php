<?php
header('Content-type:text/html;charset=utf8');

$data=$_GET['data'];
switch ($data){
    case '0':
        echo '[
            {"img":"../imgs/c_carw1.jpg","p1":"私密后窗玻璃","price":"¥ 5,300.00","key":"span0"},
            {"img":"../imgs/c_carw2.jpg","p1":"遮阳降噪后窗玻璃","price":"¥ 11,100.00","key":"span1"},
            {"img":"../imgs/c_carw3.jpg","p1":"轻质外饰碳纤维套件","price":"¥ 20,200.00","key":"span2"},
            {"img":"../imgs/c_carw4.jpg","p1":"NERISSIMO曜黑碳纤维套件","price":"¥ 54,900.00","key":"span3"},
            {"img":"../imgs/c_carw5.jpg","p1":"NERISSIMO曜黑套件","price":"¥ 34,700.00","key":"span4"}
        ]';
    break;
    case '1':
        echo '
        [
            {"img":"../imgs/c_indili1.jpg","p1":"HARMAN KARDON 高端音响系统","price":"￥7,500.00"},
            {"img":"../imgs/c_indili2.jpg","p1":"BOWERS&WILKINS高端环绕音响系统","price":"¥ 15,700.00"},
            {"img":"../imgs/c_indili3.jpg","p1":"ALCANTARA®材质车顶内饰","price":"¥ 9,400.00"},
            {"img":"../imgs/c_indili4.jpg","p1":"标准皮革（扩展覆盖范围）","price":"¥ 6,800.00"},
            {"img":"../imgs/c_indili5.jpg","p1":"黑色或深棕色方向盘带木纹嵌饰件","price":"¥ 9,700.00"},
            {"img":"../imgs/c_indili6.jpg","p1":"米色方向盘","price":"￥3,900.00"},
            {"img":"../imgs/c_indili7.jpg","p1":"吸烟套件","price":"¥ 900.00"}
        ]
        ';
        break;
    case '2':
        echo '
        [
            {"img":"../imgs/c_cara1.jpg","p1":"智能尾门脚踢感应功能","price":"¥ 7,300.00"},
            {"img":"../imgs/c_cara2.jpg","p1":"SKYHOOK电子控制悬挂系统","price":"¥ 14,900.00"},
            {"img":"../imgs/c_cara3.jpg","p1":"盲点警示","price":"¥ 9,600.00"}
            
        ]
        ';
        break;
}
?>