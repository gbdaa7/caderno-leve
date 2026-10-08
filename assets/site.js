
(function(){
  // filtro por tema no catálogo
  var chips = document.querySelectorAll('.filter');
  chips.forEach(function(c){ c.addEventListener('click', function(){
    chips.forEach(function(x){ x.classList.remove('is-on'); });
    c.classList.add('is-on');
    var f = c.getAttribute('data-filter');
    document.querySelectorAll('.card-book').forEach(function(card){
      card.hidden = !(f === '*' || card.getAttribute('data-selo') === f);
    });
  }); });
  // barra de compra fixa no celular: aparece depois que o card de preço sai da tela
  var bar = document.querySelector('.buybar'), s = document.getElementById('sentinela-compra');
  if (bar && s && 'IntersectionObserver' in window){
    new IntersectionObserver(function(e){ bar.classList.toggle('show', !e[0].isIntersecting && e[0].boundingClientRect.top < 0); }).observe(s);
  }
  // botões sem link de checkout ainda: não navegam
  document.querySelectorAll('[data-kiwify-checkout=""]').forEach(function(a){
    a.addEventListener('click', function(ev){ ev.preventDefault(); });
  });
  // seletor de idioma: fecha ao clicar fora
  var ls = document.querySelector('.langsw');
  if (ls){ document.addEventListener('click', function(ev){ if (ls.open && !ls.contains(ev.target)) ls.open = false; }); }
})();
