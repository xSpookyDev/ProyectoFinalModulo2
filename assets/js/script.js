//scripte para esconder parrafos en cards
$(document).ready(function(){
    $(".img-fluid").click(function(e){
        e.preventDefault(); 
        
        $(this).closest(".card").find(".card-text").toggle();
    });
});

//script smooth scroll, aunque me gustaba mas en html
$(document).ready(function() {
   
    $('header nav ul.navbar-nav li a.nav-link').on('click', function(event) {
      
      event.preventDefault();

     
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      
      if (target.length) {
      
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000); 
      }
    });
  });

  //simular envio de formulario
  $(document).ready(function() {
    $('#enviarBtn').on('click', function() {
      setTimeout(function() {
        alert('¡El formulario ha sido enviado con éxito!');
        $('#enviarBtn').text('Enviado').attr('disabled', 'disabled');
      }, 1500);
    });
  });