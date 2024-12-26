$(document).ready(function(){
    var n = $(".nav-item").length;
  
    for(var i=0;i<n;i++) {
        $(".nav-item")[i].addEventListener("click",function call(){
           alert( );
           this.addClass(".clicked");
           
        })


    }

});
