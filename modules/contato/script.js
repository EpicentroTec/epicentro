hidemap();

function hidemap() {
  var c = document.getElementById('ifr_mapa');
  var d = document.getElementById('iframe');
  var e = document.getElementById('fechamapa');
  var f = document.getElementById('formul');

  var browser = navigator.appName;
  
  c.style.visibility = "hidden";
  c.style.display = "none";
  d.style.visibility = "hidden";
  d.style.display = "none";
  e.style.top = "176px";
  e.innerHTML = "<a class='close' onclick='showmap()'>Exibir mapa</a>";
  var nav = detect();
  if (nav == "Chrome")
  {
    scroll(70);
    f.style.visibility = "initial";
    var h = document.getElementById('topless');
    h.style.marginTop = "40px";
  }
  else
    f.style.top = "0";
}

function showmap() {
  var c = document.getElementById('ifr_mapa');
  var d = document.getElementById('iframe');
  var e = document.getElementById('fechamapa');
  var f = document.getElementById('formul');

//  var modulo = document.getElementsByClassName('contato')[0];
//  var titulo = document.getElementsByClassName('contato')[0].getElementsByTagName('h1')[0];

//  var browser = navigator.appName;

//  modulo.style.paddingTop = 0;
//  titulo.style.marginTop = 0;
  
  c.style.visibility = "visible";
  c.style.display = "initial";
  d.style.visibility = "visible";
  d.style.display = "initial";
  e.innerHTML = "<a class='close' onclick='hidemap()'>Fechar mapa</a>";

  var nav = detect();
  if (nav == "Chrome")
  {
    scroll(-70);
    e.style.top = "106px";
    f.style.visibility = "hidden";
    var g = document.getElementById('topless');
    g.style.marginTop = "-30px";
  }
  else
  {
    f.style.top = "55%";
    var g = document.getElementsByClassName('mapa')[0];
    g.style.top = "33px";
  }
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
