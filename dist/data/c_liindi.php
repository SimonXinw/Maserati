<?php
header('Content-type:text/html;charset=utf8');

$data=$_GET['data'];
switch ($data){
    case '0':
        echo '[
            "../imgs/c_indi.jpg",
            "../imgs/c_indi2.jpg",
            "../imgs/c_indi3.jpg",
            "../imgs/c_indi4.jpg",
            "../imgs/c_indi5.jpg",
            "../imgs/c_indi6.jpg",
            "../imgs/c_indi7.jpg",
            "../imgs/c_indi8.jpg",
            "../imgs/c_cf.jpg",
            "../imgs/c_indi9.jpg"
        ]';
    break;
    case '1':
        echo '
        [
            
        ]
        ';
        break;
}
?>