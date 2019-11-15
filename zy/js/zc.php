<?php 
    header("Content-type:text/html;charset=utf8");
    error_reporting(0);//关闭错误报告

    // if(!isset($_POST['submit'])){
    //     exit("错误执行");
	// }
	//判断是否有submit操作

    $name=$_POST['username'];//post获取表单里的name
    $password=$_POST['password'];//post获取表单里的password
   $server="localhost";//主机的IP地址，你也可以选填127.0.0.1
   $db_username="root";//数据库用户名
   $db_password="";//数据库密码

   $con = mysql_connect($server,$db_username,$db_password);//链接数据库
   if(!$con){
       die("can't connect".mysql_error());//如果链接失败输出错误
   }
   mysql_select_db('test',$con);//选择数据库（前边已经说是test数据库）
   mysql_query("SET NAMES UTF8");
   //查询数据库是否有存在该用户
   $exist = mysql_query("SELECT * FROM user WHERE username = '$name'");
   $exist_result = mysql_num_rows($exist);
   if($exist_result){
		echo "<script>alert('该账号已被注册');window.history.back(-1);</script>";die;
   }else{
	    $q="insert into user(username,password) values ('$name','$password')";//向数据]库插入表单传来的值的sql
		$reslut=mysql_query($q,$con);//执行sql
		if (!$reslut){
			die('Error: ' . mysql_error());//如果sql执行失败输出错误
		}else{
            //echo '<img src="'.'http://q1.qlogo.cn/g?b=qq&nk='.$qq.'&s=100&t='. time() .'">';
           echo "<script> alert('注册成功');parent.location.href='../login.html'; </script>"; 
            
		}
   }
    mysql_close($con);//关闭数据库

?>
