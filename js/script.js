if (window.SimpleSlide) {
  new SimpleSlide({
    slide: 'quote', // nome do atributo data-slide="principal"
    time: 15000, // tempo de transição dos slides
  });

  new SimpleSlide({
    slide: 'portifolio',
    time: 3000,
    nav: true,
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}
