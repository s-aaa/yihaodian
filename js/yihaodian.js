$(function(){
    /******************顶部左边********************/
    var topBarLeftWordbox=$(".top-bar-left-wordbox")[0];

    var dlzcerji=$(".dlzcerji")[0];
    topBarLeftWordbox.onmouseover=function(){
    	dlzcerji.style.display="block"
    }
    topBarLeftWordbox.onmouseout=function(){
    	dlzcerji.style.display="none"
    }

    var remenshenshi=$(".remenshenshi")[0];
    var topBarLeftSonghuo=$(".top-bar-left-songhuo")[0];
    topBarLeftSonghuo.onmouseover=function(){
    	remenshenshi.style.display="block"
    }
    topBarLeftSonghuo.onmouseout=function(){
    	remenshenshi.style.display="none"
    }
    /************************顶部右边**************************************/

    var yiji=$(".yiji");
    var erji=$(".erji");
    for(var i=0;i<yiji.length;i++){
        yiji[i].index=i;
        yiji[i].onmouseover=function(){
         erji[this.index].style.display="block";
     }
     yiji[i].onmouseout=function(){
        erji[this.index].style.display="none";
    }
}

//掌上一号店

var zhangshangyihaodain=$(".zhangshangyihaodain")[0];
var zshyhdErji=$(".zshyhd-erji")[0]
zhangshangyihaodain.onmouseover=function(){
    zshyhdErji.style.display="block";
}
zhangshangyihaodain.onmouseout=function(){
    zshyhdErji.style.display="none";
}



//网站导航

var wzdhYiji=$(".wzdh-yiji")[0];
var wzhdhErji=$(".wzhdh-erji")[0];
wzdhYiji.onmouseover=function(){
    wzhdhErji.style.display="block";
}
wzdhYiji.onmouseout=function(){
    wzhdhErji.style.display="none";
}


//关注微信
var guanzhuWeixin=$(".guanzhu-weixin")[0];
var gzwxErji=$(".gzwx-erji")[0];
guanzhuWeixin.onmouseover=function(){
    gzwxErji.style.display="block";
}
guanzhuWeixin.onmouseout=function(){
    gzwxErji.style.display="none";
}



//购物车

var gouwu=$(".gouwu")[0];
var gouwucheShow=$(".gouwuche-show")[0];
gouwu.onmouseover=function(){
    gouwucheShow.style.display="block";
}
gouwu.onmouseout=function(){
        gouwucheShow.style.display="none";
    }






/**************搜索框*************************/
var sousuokuangText=$(".sousuokuang-text")[0];
sousuokuangText.onfocus=function(){
   if(sousuokuangText.value=="请输入关键词"){
       sousuokuangText.value="";
   }
}
sousuokuangText.onblur=function(){
   if(sousuokuangText.value){

   }else{
      sousuokuangText.value="请输入关键词";
  }

}




/******************banner轮播*********************/ 
var bannercenter=$(".bannercenter")[0];
var leftbtnbox=$(".leftbtnbox")[0];
var rightbtnbox=$(".rightbtnbox")[0];
var imgs=$(".bannercenterimg");
var btn=$(".btn");
var bannerbigbox=$(".bannerbigbox")[0];
var num=0;
var arr=["#F9DA03","#F4EBDC","#83F3F7","#FFED87","#FF5321","#AEB4C2","#100049","#54C3D6"]
function move(type){
    if(type=="l"){
       num--;
       if(num<0){
        num=7;
    }
}
if(type=="r"){
   num++;
   if(num==8){
    num=0;
}
}

for(var i=0;i<imgs.length;i++){
  imgs[i].style.zIndex=3;
  btn[i].style.background="#ccc";
}	
imgs[num].style.zIndex=4;
bannerbigbox.style.background=arr[num];
btn[num].style.background="#FF3C3C";


}
var t=setInterval(function(){move("r")},3000);

for(var i=0;i<btn.length;i++){
   btn[i].index=i;
   btn[i].onmouseover=function(){
       clearInterval(t);
       for(var j=0;j<imgs.length;j++){
          imgs[j].style.zIndex=3;
          btn[j].style.background="#ccc";
      }
      imgs[this.index].style.zIndex=4;
      this.style.background="#FF3C3C";
      bannerbigbox.style.background=arr[this.index];
  }
  btn[i].onmouseout=function(){
      t=setInterval(function(){move("r")},3000);
      num=this.index;
  }

}

bannercenter.onmouseover=function(){
 leftbtnbox.style.display="block";
 rightbtnbox.style.display="block";
 clearInterval(t);
 leftbtnbox.onclick=function(){
    move("l")
}
rightbtnbox.onclick=function(){
    move("r")
}
}
bannercenter.onmouseout=function(){
    leftbtnbox.style.display="none";
    rightbtnbox.style.display="none";
    t=setInterval(function(){move("r")},3000);
}
leftbtnbox.onmouseover= function(){
    leftbtnbox.style.background="rgba(102,102,102,0.5)";
}
leftbtnbox.onmouseout=function(){
    leftbtnbox.style.background="rgba(102,102,102,0.2)";
}
rightbtnbox.onmouseover=function(){
   rightbtnbox.style.background="rgba(102,102,102,0.5)";
}
rightbtnbox.onmouseout=function(){
   rightbtnbox.style.background="rgba(102,102,102,0.2)";
}

/*****************banner菜单********************/
function caidanshow(a){
  var caidan=$(".caidan")[a];
  var bannercaidanbox=$(".bannercaidanbox")[a];
  caidan.onmouseover=function(){
    clearInterval(t);
    bannercaidanbox.style.display="block";
}
caidan.onmouseout=function(){
    bannercaidanbox.style.display="none";
    t=setInterval(function(){move("r")},3000);
}
}
var caidan=$(".caidan");
for(var i=0;i<caidan.length;i++){
    caidanshow(i)
} 


/*********************必团****************************/


var btboxImg=$(".btboxImg");
for(var i=0;i<btboxImg.length;i++){
    btboxImg[i].index=i;
    btboxImg[i].onmouseover=function(){
        btboxImg[this.index].style.left=35+"px";
    }
    btboxImg[i].onmouseout=function(){
        btboxImg[this.index].style.left=40+"px";
    }
}




/***************************闪购******************************/

var titleLeft=$(".title-left");
var shangouimgbox=$(".shangouimgbox");
var numb=1;
function moves(){
	if(numb==3){
		numb=0;
	}
	for(var i=0;i<shangouimgbox.length;i++){
		shangouimgbox[i].style.zIndex=2;
		titleLeft[i].style.color="#333";
	}
 shangouimgbox[numb].style.zIndex=3;
 titleLeft[numb].style.color="#CEA145";
 numb++;
}

var i=setInterval(moves,3000);
//单击事件
for(var i=0;i<titleLeft.length;i++){
    titleLeft[i].index=i;
    titleLeft[i].onclick=function(){
        for(var j=0;j<shangouimgbox.length;j++){
            shangouimgbox[j].style.zIndex=2;
            titleLeft[j].style.color="#333";
        }
        shangouimgbox[this.index].style.zIndex=3;
        this.style.color="#CEA145";
        numb=this.index;
    }

}

/*****右导航******/
var floors=$(".floors");
var rightdh=$(".rightdh")[0];
var rightdhimg=$("img",rightdh);
var rightdhImgbox=$(".rightdh-imgbox");
for (var i = 0; i < rightdhImgbox.length; i++) {
    rightdhImgbox[i].index=i;
    rightdhImgbox[i].onmouseover=function(){
        rightdhimg[this.index].style.display="none";
    }
    rightdhImgbox[i].onmouseout=function(){
        rightdhimg[this.index].style.display="block";
    }
    rightdhImgbox[i].onclick=function(){
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        animate(obj,{scrollTop:floors[this.index].t},600);
    }
}

/**********************onscroll************************/

//var floors=$(".floors");
var h=document.documentElement.clientHeight;
window.onscroll=function(){
    //按需加载
    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    var scrollT=obj.scrollTop;
    for(var i=0;i<floors.length;i++){
      if(floors[i].offsetTop<=scrollT+h){
         var imgss=$("img",floors[i]);
         for(var j=0;j<imgss.length;j++){
            imgss[j].src=imgss[j].getAttribute("aa");
        }
    }
}

    var rightdh=$(".rightdh")[0];
    var rightdhimg=$("img",rightdh);
    var rightdhImgbox=$(".rightdh-imgbox");
    if(scrollT>=580){
        rightdh.style.display="block";
    }
    else{
        rightdh.style.display="none";
    }
    for(var i=0;i<floors.length;i++){
        floors[i].t=floors[i].offsetTop;
        if(floors[i].offsetTop<=scrollT){
            for (var j = 0; j < rightdhimg.length; j++) {
                rightdhimg[j].style.display="block";
            }
            rightdhimg[i].style.display="none";
        }
    }


    var goTop=$(".go-top")[0];
    goTop.onclick=function(){
        animate(obj,{scrollTop:0})
    }


}
/********************楼层banner轮播****************************/



function loucenglunbo(a){
    var con2box=$(".con2box")[a];
    var con2btnbox=$(".con2btnbox")[a];
    var con2btnshow=$(".con2btnshow",con2btnbox);
    var nums=0;
    var flag=true;
    var e;//进度条的时间函数
    var x=0;
    function jindutiao(){
        for(var i=0;i<con2btnshow.length;i++){
            con2btnshow[i].style.width=0;
        }
        x+=4;
        if(x<=40){

        }else{
            x=0;
            clearInterval(e)
        }
        if(nums<0){
            nums=0;
        }
        con2btnshow[nums].style.width=x+"px";

    }
    function loucengmove(){
        flag=true;
        if(nums==3){
            animate(con2box,{left:-330*nums},1000,function(){
                con2box.style.left=0;
                if(flag){
                    e=setInterval(jindutiao,350);
                    flag=false;
                }
            })
            nums=0;
        }else{
            animate(con2box,{left:-330*nums},1000,function(){
                if(flag){
                    e=setInterval(jindutiao,350);
                    flag=false;
                }
            })

        }
        nums++;
    }
    var m=setInterval(loucengmove,5000);

    var con2btn=$(".con2btn",con2btnbox);
    for (var i = 0; i < con2btn.length; i++) {
        con2btn[i].index=i;
        con2btn[i].onmouseover=function(){
            clearInterval(m);
            clearInterval(e);
            con2box.style.left=-330*[this.index-1]+"px";
            for(var j=0;j<con2btnshow.length;j++){
                con2btnshow[j].style.width=0;
            }
            con2btnshow[this.index].style.width=40+"px";
            flag=false;
        }
        con2btn[i].onmouseout=function(){
            con2btnshow[this.index].style.width=0+"px";

            m=setInterval(loucengmove,5000);
            flag=false;
            nums=this.index;
        }
    }
    con2box.onmouseover=function(){
        clearInterval(m);
        clearInterval(e);
    }
    con2box.onmouseout=function(){
        m=setInterval(loucengmove,5000);
        e=setInterval(jindutiao,350);
    }
}
var con2box=$(".con2box");
for (var i = 0; i < con2box.length; i++) {
    loucenglunbo(i);
}



/*******************流行百货logo轮播************************************/
function logolunbo(a){
    var logolunboImgbox=$(".logolunbo-imgbox")[a];
    var lunbozuojian=$(".lunbozuojian")[a];
    var lunboyoujian=$(".lunboyoujian")[a];
    function moveleft(){
        var last=getLast(logolunboImgbox);
        var first=getFirst(logolunboImgbox);
        animate(logolunboImgbox,{left:-90},function(){
            logolunboImgbox.appendChild(first,last);
            logolunboImgbox.style.left=0
        })
    }
    function moveright(){
        var last=getLast(logolunboImgbox);
        var first=getFirst(logolunboImgbox);
        logolunboImgbox.style.left=-90+"px";
        logolunboImgbox.insertBefore(last,first);
        animate(logolunboImgbox,{left:0});
    }
    var s=setInterval(moveleft,2000);
    lunbozuojian.onmouseover=lunboyoujian.onmouseover=function(){
        clearInterval(s);
    }
    lunbozuojian.onmouseout=lunboyoujian.onmouseout=function(){
        s=setInterval(moveleft,2000);
    }
    lunboyoujian.onclick=function(){
        moveright();
    }
    lunbozuojian.onclick=function(){
        moveleft();
    }
}
var logolunbobox=$(".logolunbobox");
    //alert(logolunbobox.length);
    for(var a=0;a<logolunbobox.length;a++){
     logolunbo(a);
 }



 /*******************************************/
 var shanFather=$(".shan-father");
 var shan=$(".shan");
 for(var i=0;i<shanFather.length;i++){
    shanFather[i].index=i;
    shanFather[i].onmouseover=function(){
        numsh=this.index
        animate(shan[this.index],{opacity:0.3},300,function(){
            shan[numsh].style.opacity=0;
        });
        
    }
}





})


