
// 导航栏
(function() {
    var $search = document.getElementsByClassName("search_img")[0];
    var $search_box = document.getElementsByClassName("search_box")[0];
    var $width = $search_box.getAttribute("width");
    var n = 0;
    $search.onclick = function () {
        if (n % 2 === 0) {
            $search_box.style.left = "-140px";
            $search_box.style.opacity = "1";
            $search_box.style.width = "130px";
            n = 1;
        } else if (n % 2 === 1) {
            $search_box.style.left = "0";
            $search_box.style.opacity = "0";
            $search_box.style.width = "0";
            n = 2;
        }
    };

}());
(function(){
    var j=0,j1=0,j2=0,j3=0,j4=0;
    var $xiala= document.getElementsByClassName("nav-opt")[0].children;
    var $xiala1=document.getElementsByClassName("mini-nav-option")[0].children;
    var $vehicle_mode = document.getElementsByClassName("vehicle_mode")[0];
    $xiala[0].onclick = function () {
        if(j%2===0){
            $vehicle_mode.style.height = "800px";
            $CarSupport.style.height="0";
            $brand.style.height = "0";
            $CarBc.style.height = "0";
            $GXTX.style.height = "0";
            j++;
            j1=0;
            j2=0;
            j3=0;
            j4=0;
        }else if(j%2===1){
            $vehicle_mode.style.height = "0";
            j++;
        }
    };
    var $brand= document.getElementsByClassName("brand")[0];
    $xiala[1].onclick = function () {
        if(j1%2===0){
            $brand.style.height = "400px";
            $CarSupport.style.height="0";
            $vehicle_mode.style.height = "0";
            $CarBc.style.height = "0";
            $GXTX.style.height = "0";
            j1++;
            j=0;
            j2=0;
            j3=0;
            j4=0;
        }else if(j1%2===1){
            $brand.style.height = "0";
            j1++;
        }
    };
    var $CarSupport= document.getElementsByClassName("Car-support")[0];
    $xiala[2].onclick = function () {
        if(j2%2===0){
            $CarSupport.style.height = "500px";
            $brand.style.height = "0";
            $vehicle_mode.style.height = "0";
            $CarBc.style.height = "0";
            $GXTX.style.height = "0";
            j=0;
            j1=0;
            j3=0;
            j4=0;
            j2++;
        }else if(j2%2===1){
            $CarSupport.style.height = "0";
            j2++;
        }
    };
    var $CarBc= document.getElementsByClassName("Car-bc")[0];
    $xiala[4].onclick = function () {
        if(j3%2===0){
            $CarBc.style.height = "500px";
            $CarSupport.style.height = "0";
            $brand.style.height = "0";
            $vehicle_mode.style.height = "0";
            $GXTX.style.height = "0";
            j3++;
            j=j1=j2=j4=0;
        }else if(j3%2===1){
            $CarBc.style.height = "0";
            j3++;
        }
    };
    var $GXTX= document.getElementsByClassName("Car-GXTX")[0];
    $xiala[5].onclick = function () {
        if(j4%2===0){
            $GXTX.style.height = "500px";
            $CarBc.style.height = "0";
            $CarSupport.style.height = "0";
            $brand.style.height = "0";
            $vehicle_mode.style.height = "0";
            j4++;
            j=j1=j2=j3=0
        }else if(j4%2===1){
            $GXTX.style.height = "0";
            j4++;
        }
    };
    var $closes=document.getElementsByClassName("nav-close");
    for(var close of $closes){
        close.onclick = function(){
            $GXTX.style.height = "0";
            $CarBc.style.height = "0";
            $CarSupport.style.height = "0";
            $brand.style.height = "0";
            $vehicle_mode.style.height = "0";
            j1=0;j2=0;j3=0;j4=0;j=0;
        }
    }


    $xiala1[0].onclick = function () {
        if(j%2===0){
            $vehicle_mode.style.height = "800px";
            $CarSupport.style.height="0";
            $brand.style.height = "0";
            $CarBc.style.height = "0";
            $GXTX.style.height = "0";
            j++;
            j1=0;
            j2=0;
            j3=0;
            j4=0;
        }else if(j%2===1){
            $vehicle_mode.style.height = "0";
            j++;
        }
    };
    $xiala1[1].onclick = function () {
        if(j1%2===0){
            $brand.style.height = "400px";
            $CarSupport.style.height="0";
            $vehicle_mode.style.height = "0";
            $CarBc.style.height = "0";
            $GXTX.style.height = "0";
            j1++;
            j=0;
            j2=0;
            j3=0;
            j4=0;
        }else if(j1%2===1){
            $brand.style.height = "0";
            j1++;
        }
    };
    $xiala1[2].onclick = function () {
        if(j2%2===0){
            $CarSupport.style.height = "500px";
            $brand.style.height = "0";
            $vehicle_mode.style.height = "0";
            $CarBc.style.height = "0";
            $GXTX.style.height = "0";
            j=0;
            j1=0;
            j3=0;
            j4=0;
            j2++;
        }else if(j2%2===1){
            $CarSupport.style.height = "0";
            j2++;
        }
    };
    $xiala1[4].onclick = function () {
        if(j3%2===0){
            $CarBc.style.height = "500px";
            $CarSupport.style.height = "0";
            $brand.style.height = "0";
            $vehicle_mode.style.height = "0";
            $GXTX.style.height = "0";
            j3++;
            j=j1=j2=j4=0;
        }else if(j3%2===1){
            $CarBc.style.height = "0";
            j3++;
        }
    };
    $xiala1[5].onclick = function () {
        if(j4%2===0){
            $GXTX.style.height = "500px";
            $CarBc.style.height = "0";
            $CarSupport.style.height = "0";
            $brand.style.height = "0";
            $vehicle_mode.style.height = "0";
            j4++;
            j=j1=j2=j3=0
        }else if(j4%2===1){
            $GXTX.style.height = "0";
            j4++;
        }
    };
    // $xiala[0].onclick = function () {
    //     if(j%2===0){
    //         $vehicle_mode.style.height = "100%";
    //         j++
    //     }else if(j%2===1){
    //         $vehicle_mode.style.height = "0";
    //         j++;
    //     }
    // }
    var width=$("header").attr("white");
    console.log(width);
    var $mini=document.getElementsByClassName("mini-nav")[0];
    var $sm_nav=document.getElementsByClassName("mini-nav-option")[0];
    var i=0;
    $mini.onclick=function(){

        if(i%2===0){
            $sm_nav.style.display="block";
            i++;
        }else if(i%2===1){
            $sm_nav.style.display="none";
            i++;
        }

    }
}());
(function(){
    var $lis=document.getElementsByClassName("car-img")[0].children;
    var $mdCar=document.getElementsByClassName("md-car");
    for(var c of $lis){
        c.onmouseover=function(){
            var $lgCar=this.children[1];
            $lgCar.style.display="block";
        };
        c.onmouseout=function(){
            var $lgCar=this.children[1];
            $lgCar.style.display="none";
        }
    }
}());



//轮播图
(function(){
    var lus=document.getElementsByClassName("lunbo")[0];
    var imgs=lus.children;
    var $btns=document.getElementsByClassName("lunan")[0].children;
    function task(){
      var $show=lus.querySelector("a.show");
      $show.className="";
      var $nextshow=$show.nextElementSibling;
        if($nextshow!=null){
            $nextshow.className="show";
            var imgIndexs=document.getElementsByClassName("show")[0];
            var imgIndex=imgIndexs.getAttribute("data-imgIndex");
            clearActive();
            $btns[imgIndex].className="active"
        }else{
            lus.firstElementChild.className="show";
            imgIndexs=document.getElementsByClassName("show")[0];
            imgIndex=imgIndexs.getAttribute("data-imgIndex");
            clearActive();
            $btns[imgIndex].className="active"
        }
    }
    var timer=setInterval(task,3000);
    lus.onmouseover=function(){
        clearInterval(timer)
        };
    lus.onmouseout=function(){
        timer=setInterval(task,3000)
        };

    var clearLun=function(){
        for(var n=0;n<imgs.length;n++){
            imgs[n].className="";
        }
    };
    var clearActive=function(){
        for(var n=0;n<$btns.length;n++){
            $btns[n].className=""
        }
    };
        for(var i=0;i<$btns.length;i++){
            $btns[i].addEventListener("click",function(){
                var pointIndex=this.getAttribute("data-index");
                clearActive();
                clearLun();
                this.className="active";
                imgs[pointIndex].className="show";
                console.log(imgs)
            })
        }
})();


//footer
(function(){
    var $ups=document.querySelectorAll(".footer-up");
    var footerCosle=document.querySelectorAll(".footer-cosle");
    var $footer_option=$(".footer-option")
    var $html=document.documentElement;
    var i=0;
    
    $(window).resize(function() {
        var heights = $(window).height();
        var widths = $(window).width();
    for(var up of $ups){
        if(widths<=991){
            $footer_option.css("display","none");
            up.onclick=function(){
                this.nextElementSibling.style.display="block";
                }
            }else if(widths>991){
                $footer_option.css("display","block");
            }
    }

    for(var dow of footerCosle){
        if(widths<=991){
        dow.onclick=function(){
                this.parentElement.style.display="none";
            }
        }
    }
})       
        

})();



