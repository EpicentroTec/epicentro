
// Detectar tela

var resolucao = window.innerWidth;
var numeroDeImagens = $('.jumbotron .banner .image-list li').length;

if (resolucao < 440) {

  $('.jumbotron .banner').removeClass('slider');
  $('.jumbotron').addClass('mobile');

} else {

  $('.jumbotron').removeClass('mobile');
  $('.jumbotron .banner').addClass('slider');
}

if ($('.jumbotron.mobile').length > 0) {

  console.log('mobile');

  $('.jumbotron.mobile .banner').remove();

  $('.jumbotron.mobile .menu').after('<div class="banner"><ul><li class="jumbo-bg"><div class="frase"><p>A Epicentro Tecnologia desenvolve sistemas e páginas Internet e Intranet, sistemas de gerenciamento de conteúdo, <em>web design</em> e <em>design </em>gráfico</p></div></li></ul></div>');

  $('.jumbo-bg').css('background-image','url("assets/img/Jumbotron/jumbotron'+Math.floor((Math.random() * numeroDeImagens) + 1)+'640.jpg")');
}


// Slider

$(function() {
  var slider = $('.slider').unslider({
    dots: true,
    delay: 8000,
    speed: 800,
    fluid: true,
    keys: false
  });

  var data = slider.data('unslider');
  $('.thumbs')
  .on('click', 'li', function() {
    data.move($(this).index());
  })
  .on('mouseover', function() {
   	data.stop();
  })
  .on('mouseout', function() {
   	data.start();
  });
});


// Menu

  // Transparencia

    // $(window).scroll(function() {

    //   var menuTop = $('.menu:eq(0)').offset().top;

    //   if (menuTop === 0) {

    //     $('.menu:eq(0)').removeClass('transparencia');
    //   }

    //   if (menuTop > 0) {

    //     $('.menu:eq(0)').addClass('menu transparencia');
    //   } 
    // });

  // Mobile

    var isActive = false;

    $('.menu-bar').click(function() {

      console.log(isActive);

      if (isActive === false) {
        
        $('.menu-bar').attr('src','assets/img/Menu/menu-bar-active.png');
        $('.menu ul').slideDown();
        isActive = true;

      } else if (isActive === true) {
        
        $('.menu-bar').attr('src','assets/img/Menu/menu-bar.png');
        $('.menu ul').slideUp();
        isActive = false;
      }
      
      
      // 
    });

    // $('.rotate').click(function() {

    //   alert('saco');
      
    //   // $('.icone-menu.rotate').removeClass('icone-menu rotate');
    //   // $('.menu ul').slideUp();
    // });

  // Trocar Logo

    if ($(window).width() < 786) {

      $('.menu .logo').attr('src', 'assets/img/Menu/icone.png');
    }

  // Aumentar largura

    var activate = $(window).height();

    $(window).scroll(function() {

      var menuTop = $('.menu:eq(0)').offset().top;

      if (menuTop < activate) {

        $('.menu:eq(0)').removeClass('full');
      }

      if (menuTop > activate) {

        $('.menu:eq(0)').addClass('menu full');
      } 
    });
// Portfolio

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
mostrarDescricao('junior');hidemap();
  
function hidemap() {
  var c = document.getElementById('ifr_mapa');
  var d = document.getElementById('iframe');
  var e = document.getElementById('fechamapa');
  var f = document.getElementById('formul');

  c.style.visibility = "hidden";
  c.style.display = "none";
  d.style.visibility = "hidden";
  d.style.display = "none";
  e.style.top = "176px";
  e.innerHTML = "<a class='close' onclick='showmap()'>Exibir mapa</a>";
  
  var nav = detect();
  if (nav == "Chrome")
    f.style.visibility = "initial";
  else
    f.style.top = "0";
}

function showmap() {
  var c = document.getElementById('ifr_mapa');
  var d = document.getElementById('iframe');
  var e = document.getElementById('fechamapa');
  var f = document.getElementById('formul');

  c.style.visibility = "visible";
  c.style.display = "initial";
  d.style.visibility = "visible";
  d.style.display = "initial";
  e.innerHTML = "<a class='close' onclick='hidemap()'>Fechar mapa</a>";

  var nav = detect();
  if (nav == "Chrome")
    f.style.visibility = "hidden";
  else
    f.style.top = "55%";
}

function detect () {
  var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  var isFirefox = typeof InstallTrigger !== 'undefined';
  var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
  var isChrome = !!window.chrome && !isOpera;
  var isIE = /*@cc_on!@*/false || !!document.documentMode;
  
  if (isOpera)
    return "Opera";
  else if (isFirefox)
    return "Firefox";
  else if (isSafari)
    return "Safari";
  else if (isChrome)
    return "Chrome";
  else if (isIE)
    return "Explorer";
}

function scroll(pixels) {
    window.scrollBy(0, pixels);
}