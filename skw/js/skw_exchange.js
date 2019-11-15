function forMat(date) {

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return year + '-' + month + '-' + day+ ' ' + hours + ':' + minutes + ':' + seconds
  }
    //登录成功后

    //设置用户名
     var n=localStorage.getItem('name')
      $('.userp').text(n); //此用户
   var toDolist={
       //初始化
       init:function(){
       this.cacheElement();
       this.bindElevent();
       },
       cacheElement:function(){//缓存元素
        this.$userp=$('.userp');
        this.$txt=$('#txt');
        this.$publish=$('.publish');
        this.$showtxt=$('.showtxt');
     },
     bindElevent:function(){//绑定事件
        var _this=this;//保留this
        window.onload=function(){//页面进入时加载之前的数据
            //写入数据 存到数据库
          var addText=_this.$txt.val();
          var t=forMat(new Date())
          $.ajax({
            url:'../data/fabu.php',
            type:'post',
            data:'code=01&username='+n+'&content='+addText,
            success:function(json_encode){//写出来
              var data=JSON.parse(json_encode)
           $.each(data,function(index,item){
            if(item.content==''){
            return
            }     
     var addDom='<div class="userdiv"><h5>'+item.username+'&nbsp;&nbsp;&nbsp;&nbsp;<span>'+t+'</span></h5><p>'+item.content+'</p></div>';
          _this.$showtxt.prepend(addDom)
           })
            }
          })
        }
        if(n){
          this.$publish.on('click',function(){//发表
            //清空之前
          _this.$showtxt.html('');
          //写入数据 存到数据库
          var addText=_this.$txt.val();
          var t=forMat(new Date())
          if(!addText){
            return;
          }
          $.ajax({
            url:'../data/fabu.php',
            type:'post',
            data:'code=01&username='+n+'&content='+addText,
            success:function(json_encode){//写出来
              var data=JSON.parse(json_encode)
           $.each(data,function(index,item){
            if(item.content==''){
                return
                }     
        var addDom='<div class="userdiv"><h5>'+item.username+'&nbsp;&nbsp;&nbsp;&nbsp;<span>'+t+'</span></h5><p>'+item.content+'</p></div>';
        _this.$showtxt.prepend(addDom)
           })
            }
          })
         _this.$txt.val(" ");//清空 
        })
        }
     }
   }
   toDolist.init();