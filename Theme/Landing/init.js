(function($){
  $(function(){

    $('.sidenav').sidenav();

    //init slider
   
      $('.slider').slider({
        fullWidth:true,
        indicators:false,
        height:500,
        interval:6000
      });
    
         //form selector
         $('select').formSelect(); 

  }); // end of document ready
})(jQuery); // end of jQuery name space
