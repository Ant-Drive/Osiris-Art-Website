var main = function(){
    $('.nav-bar a').hover(

      function() {$(this).css("background-color", "white");
                  $(this).css("color","black");},
                  
      function() {$(this).css("background-color", "black");
                  $(this).css("color","white");}

    );
    
    $(".art a").hover(

      function () {$('.menu-container').show();},
      function () {$('.menu-container').hide();}
     );
    
    var subMenu = $('.menu-container');

    subMenu.hover(
        function () {$(this).show();
                     $('.art a').css("background-color", "white");
                     $('.art a').css("color","black");},
        function () {$(this).hide();
                     $('.art a').css("background-color", "black");
                     $('.art a').css("color","white");}
    );
      
      /* LOADING IMAGES */
      
                for(var i = 1; i < 10;i++){
                  var imageString = 'image' + i;

                  $('.thumbnail-grid :nth-child('+i+')').css("background-image","url(images/Landscapes/"+imageString+".jpg)");
                }

                var boxNum = $('.selected').index() + 1;                
                var imageString = 'image'+boxNum;
                $('.image-viewer').css('background-image','url(images/landscapes/'+imageString+'.jpg)');    


                $('.grid-box').hover(
                    function(){
                        var prevBox = $('.selected');
                        prevBox.removeClass('selected');
                        $(this).addClass('selected');
                        
                        
                        var boxNum = $('.selected').index() + 1;                
                        var imageString = 'image'+boxNum;
                        $('.image-viewer').css('background-image','url(images/landscapes/'+imageString+'.jpg)');    
                });
        
              
                
          
};

$(document).ready(main);