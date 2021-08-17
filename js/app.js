//Scroll Suave usando Jquery

$('nav a').click(function (e) { // seleciona a nav
    e.preventDefault(); // previne atualização da pag
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top, //offset() retorna o top e o lef

        menuAltura = $('nav').innerHeight();
    console.log(targetOffset);
    $('html, body').animate({
        scrollTop: targetOffset - menuAltura
    }, 500);
});