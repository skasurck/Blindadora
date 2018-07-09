$(document).ready(function(onLoad){
   
    
    
    
    $(function onLoad() {
         var index=0;
    var imgs=["images/mb/blindaje1.jpg","images/mb/blindaje2.jpg","images/mb/blindaje3.jpg"];
        setInterval(function(){$("#lol").attr("src", imgs[index]);
        index++;if(index == 3){index = 0;}}, 3000);
        var index1=0;
        var imgs1=["images/Vidrios/1.jpg","images/Vidrios/2.jpg","images/Vidrios/3.jpg"];
         setInterval(function(){$("#lol3").attr("src", imgs1[index1]);
        index1++;if(index1 == 3){index1 = 0;}}, 3000);
    
    });
 

    
});

$(function(){
   
       if ($(window).width() <= 720) { 
          
           $("#vp1").remove();
            
       }
    else{
             
         $("#banner").css('background-image', 'none');
        
    }
});



/*function changeImage() {
  
 
   $('#imagen').attr("src", misImagenes[index]);
                  
   index++;
                  
   if(index == 2)
      index = 0;
    
    
} */
   
