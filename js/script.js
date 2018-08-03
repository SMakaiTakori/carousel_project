 $(document).ready(function($){
   $('.nav button').on('click', function(){ 
   var whichButton = $(this).data('nav'); 
   console.log(whichButton);
   });
});