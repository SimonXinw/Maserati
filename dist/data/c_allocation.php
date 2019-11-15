<?php 

header('Content-type:text/html;charset=utf8');

$data = $_GET['data'];
	switch ($data) {
		case '0':
			echo '[
                {"engine":"GHIBLI","displacement":"￥88,800.00","speed":"V6 60°","chunk":"2979毫升","maxengine":"5.5秒","maxspeed":"267公里/每小时","power":"257kw","traction":"RWD","logoimg":"c_car1.jpg"},
                {"engine":"GHIBLI S Q4","displacement":"￥1,188,800.00","speed":"V6 60°","chunk":"2979毫升","maxengine":"4.7秒","maxspeed":"286公里/每小时","power":"316kw","traction":"AWD","logoimg":"c_car2.jpg"}
            ]';
			break;
		case '1':
			echo '[
                {"engine":"LEVANTE","displacement":"￥961,800.00","speed":"V6 60°","chunk":"2979毫升","maxengine":"6.0秒","maxspeed":"243公里/每小时","power":"257kw","traction":"AWD","logoimg":"c_levante.jpg"},
                {"engine":"LEVANTE S","displacement":"￥1,229,800.00","speed":"V6 60°","chunk":"2979毫升","maxengine":"5.2秒","maxspeed":"264公里/每小时","power":"316kw","traction":"AWD","logoimg":"c_levante2.jpg"},
                {"engine":"LEVANTE GTS","displacement":"￥1,559,800.00","speed":"V8 90°","chunk":"3799毫升","maxengine":"4.2秒","maxspeed":"292公里/每小时","power":"405kw","traction":"AWD","logoimg":"c_levante3.png"},
                {"engine":"LEVANTE TROFEO","displacement":"￥1,909,800.00","speed":"V8 90°","chunk":"3799毫升","maxengine":"3.9秒","maxspeed":"304公里/每小时","power":"434kw","traction":"AWD","logoimg":"c_levante4.png"}
            ]';
			break;
		case '2':
			echo'[
                {"engine":"QUATTROPORTE","displacement":"￥1,405,800.00","speed":"V6 60°","chunk":"2979毫升","maxengine":"5.5秒","maxspeed":"270公里/每小时","power":"257kw","traction":"RWD","logoimg":"c_qua.jpg"},
                {"engine":"QUATTROPORTE S Q4","displacement":"￥1,608,800.00","speed":"V6 60°","chunk":"2979毫升","maxengine":"4.8秒","maxspeed":"288公里/每小时","power":"316kw","traction":"AWD","logoimg":"c_qua2.jpg"}
            ]';
			break;
	}
?>