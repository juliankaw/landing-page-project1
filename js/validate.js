// Wait for the DOM to be ready
$(function() {
   $('#form').validate({
       rules: {
           nome:{
            required: true,
            minlength: 4
           },
           email:{
            required: true,
            email: true
           },
           telefone: {
               required: true,
               number: true
           }

       },
       messages: {
        nome: "Por favor coloque seu nome",
        email: "coloque um email verdadeiro",
        telefone: {
            required: "por favor colocar um telefone",
            number: "somente números"
        },
    },
    submitHandler: function(form) {
        form.submit();
      }
   });

   $('input').focus(function(){
        $(this).removeClass('error');
        $(this).css('color','#000');
   })
   


});

