//footer
(function(){
    var $ups=document.querySelectorAll(".footer-up");
    var footerCosle=document.querySelectorAll(".footer-cosle");
    var $html=document.documentElement;

        var i=0;
        for(var up of $ups){
            up.onclick=function(){
                if($html.scrollWidth<=991){
                this.nextElementSibling.style.display="block";
                }
            }
        }
        for(var dow of footerCosle){
            dow.onclick=function(){
                if($html.scrollWidth<=991){
                this.parentElement.style.display="none";
            }
        }
    }

})();
