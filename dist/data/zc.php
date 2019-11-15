<?php
/*
****************************************************

	method: get

	   url: login2.php

	  参数: act = add——注册用户
				  login——登陆
			user = 用户名
			pass = 密码
		
	return:	{err: 0/1, msg: 文字描述信息}
			 err:
				  0	 成功——具体参考msg
				  1	 失败——具体参考msg

****************************************************
*/

// 设置响应头，防止乱码
header("Content-type:text/html;charset=utf8");

error_reporting(0);//关闭错误报告

$link = mysqli_connect('','root','');//连接数据库

mysqli_set_charset( $link, "utf8" );//设置编码

if (mysqli_connect_error($link)){//连接数据库失败
    die("连接失败：".mysqli_connect_error());
}

mysqli_query($link, 'CREATE DATABASE test');//创建数据库

mysqli_query($link, 'use test');//选择数据库

// sql语句，创建user表，添加字段
$sql= <<< END
CREATE TABLE `user` (
`ID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`username` VARCHAR( 255 ) NOT NULL ,
`password` VARCHAR( 255 ) NOT NULL
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_general_ci
END;

mysqli_query($link, $sql);//执行sql语句，创建表并添加字段




$user = $_POST['username'];//获取输入的账号,转成小写

$pass = $_POST['password'];//获取输入的密码

    $sql = "SELECT COUNT(*) FROM user WHERE username='{$user}'";
    
    $res = mysqli_query($link,$sql);
    
    $row = mysqli_fetch_array($res);
    
    if((int)$row[0]>0){
        echo '此用户名已被占用';
        exit();
    }
    
    $sql = "INSERT INTO user (ID,username,password) VALUES(0,'{$user}','{$pass}')";
    mysqli_query($link, $sql);
    
    echo "<script> alert('注册成功');parent.location.href='../html/login.html'; </script>"; 
    break;
		

?>