<?PHP
    header("Content-Type: text/html; charset=utf8");
    error_reporting(0);//关闭错误报告
    // if(!isset($_POST["submit"])){
    //     exit("错误执行");
    // }
    //检测是否有submit操作 

    
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

    $name = $_POST['username'];//post获得用户名表单值
    $passowrd = $_POST['password'];//post获得用户密码单值

    if ($name && $passowrd){//如果用户名和密码都不为空
             $sql = "select * from user where username = '$name' and password='$passowrd'";//检测数据库是否有对应的username和password的sql
             $result = mysql_query($sql);//执行sql
             $rows=mysql_num_rows($result);//返回一个数值
             if($rows){//0 false 1 true
                  echo "<script> alert('登录成功');parent.location.href='../html/index.html'; </script>"; 
                   exit;
             }else{
                echo "用户名或密码错误";
                echo "
                    <script>
                            setTimeout(function(){window.location.href='login.html';},1000);
                    </script>

                ";//如果错误使用js 1秒后跳转到登录页面重试，让其从新进行输入
             }
             

    }else{//如果用户名或密码有空
                echo "表单填写不完整";
                echo "
                      <script>
                            setTimeout(function(){window.location.href='login.html';},1000);
                      </script>";
                        //如果错误使用js 1秒后跳转到登录页面重试，让其从新进行输入
    }

    mysql_close();//关闭数据库
?>