// Menu

$(window).scroll(function() {

  var menuTop = $('.menu:eq(0)').offset().top;

  if (menuTop === 0) {

    $('.menu:eq(0)').removeClass('transparencia');
  }

  if (menuTop > 0) {

    $('.menu:eq(0)').addClass('menu transparencia');
  } 
});// Portfolio

  // Navegação

    $('.section.portfolio .laptop .nav-right').click(function() {

      $('.section.portfolio ul').css('left', '-100%');
    });

    $('.section.portfolio .laptop .nav-left').click(function() {

      $('.section.portfolio ul').css('left', '0');
    });


  // Mostrar sites

    function mostraImagem(arg) {

      $('.icone.'+arg).click(function() {
        $('.laptop-site').fadeOut(function() {

          $('.laptop-site').attr('src', 'assets/img/Portfolio/'+arg+'.jpg');
        });
        
        $('.laptop-site').fadeIn();
      });
    }

    mostraImagem('estudio-avante');
    mostraImagem('pousada-domus');
    mostraImagem('pizzaria-doritos');
    mostraImagem('descubra-ubatuba');
    mostraImagem('vilago-imoveis');
    mostraImagem('raddar');
    mostraImagem('a-maca');
    mostraImagem('papilon');
    mostraImagem('preventser');
    mostraImagem('apave');
// Equipe

function mostrarDescricao(arg) {

  $('.membro.'+arg+'').hover(function() {

    if ($('.descricao-membro.'+arg+'').css('display') != 'list-item') {

      $('.descricao-membro').slideUp();
      $('.descricao-membro.'+arg+'').slideDown();
    }

  console.log();
});
}

mostrarDescricao('alvaro');
mostrarDescricao('gabriel');
mostrarDescricao('jessica');
mostrarDescricao('joao');
mostrarDescricao('junior');