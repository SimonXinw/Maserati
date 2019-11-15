<?php 
 // 设置响应头，防止乱码
header("Content-type:text/html;charset=utf8");

error_reporting(0);//关闭错误报告

$link = mysqli_connect('','root','');//连接数据库

mysqli_set_charset( $link, "utf8" );//设置编码

if (mysqli_connect_error($link)){//连接数据库失败
    die("连接失败：".mysqli_connect_error());
}

mysqli_query($link, 'CREATE DATABASE fabu');//创建数据库

mysqli_query($link, 'use fabu');//选择数据库

// sql语句，创建user表，添加字段
$sql= <<< END
CREATE TABLE `user` (
`ID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`username` VARCHAR( 255 ) NOT NULL ,
`content` VARCHAR( 255 ) NOT NULL ,
`code` VARCHAR( 255 ) NOT NULL
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_general_ci
END;

mysqli_query($link, $sql);//执行sql语句，创建表并添加字段

$n=$_POST['username'];
$content=$_POST['content'];
$code=$_POST['code'];

header('Content-type:text/html;charset=utf8');//设置头
$sql="insert into user(username,content,code) values('$n','$content','$code')";//向数据]库插入传来的值的sql

// mysql_query($link,$sqls);//执行sql
mysqli_query($link, $sql);

$s = "select * from user"; //查找数据
// 执行sql语句之后，返回结果集(资源类型resource)
$res = mysqli_query($link,$s);
$rows = [];
while($arr = mysqli_fetch_assoc($res)){
    $rows[] = $arr;
}
// print_r($rows);//二维数组
$arrLen = count($rows);
// var_dump($arrLen);//int 3
if($arrLen >= 0){//有数据
    echo json_encode($rows,JSON_UNESCAPED_UNICODE);//把数组转成json字符串，返回
} else {// 没有数据
    echo '你查询的数据没有!';
}
   mysql_close($con);//关闭数据库

?>
