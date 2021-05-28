
function ativaScroolSuave(selector){
    $(selector).click(function(event){
        event.preventDefault();
        var target = $(this).attr("href");
        /* ou
        var target = this.href;
        */
       $('html, body').animate({
           scrollTop: $(target).offset().top
       }, 1000)
    });
}

ativaScroolSuave("a[href*=content-section]");
ativaScroolSuave("a[href*=speakers-section]");
ativaScroolSuave("a[href*=form-section]");