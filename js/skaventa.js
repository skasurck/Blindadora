$(function(lanzaderaa){
    var index=0;
    var index1=0;
    var index2=0;
    var camio1 =["images/venta/Bmw2.jpg","images/venta/Bmw3.jpg","images/venta/Bmw4.jpg","images/venta/Bmw5.jpg","images/venta/Bmw.jpg"];
    var camio2 =["images/venta/infini2.jpg","images/venta/infini3.jpg","images/venta/infini4.jpg","images/venta/infini.jpg"];
    var camio3 =["images/tucson2.jpg","images/tucson1.jpg","images/tucson3.jpg"];
    var time = 2500;
    
    $(function lanzaderaa (){
        
        $(function unoo() {});
        $(function doos() {});
        $(function tres() {});
        $(function cuatro (){});
    });
    
   $(function unoo (){
       
    
       setInterval(function(){
           $("#imagenventa1").attr("src", camio1[index]);
           index++;
           if(index==camio1.length){
               index=0;
           }
       }, time );
   });

    $(function doos (){
        
    
       setInterval(function(){
           $("#imagenventa2").attr("src", camio2[index1]);
           index1++;
           if(index1==camio2.length){
               index1=0;
           }
       }, time );
   });
     $(function tres (){
        
    
       setInterval(function(){
           $("#imagenventa3").attr("src", camio3[index2]);
           index2++;
           if(index2==camio3.length){
               index2=0;
           }
       }, time );
   });
    
    $(function cuatro (){
        var navtop = $('.header2').offset().top;
        console.log(navtop);
        
        $(window).scroll(function(){
            if($(window).scrollTop() > navtop ){
                $('.header2').css({'position':'fixed','top':'0'})
            } else{
                $('.header2').css({'position':'','top':'35px'})
            }
        });
        
    });
});