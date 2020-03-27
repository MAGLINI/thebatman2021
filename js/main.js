/* дом дерево готово, выполняем скрипты */
$(document).ready(function () 
{
    var tabsItem = $('.tabs-item');
    tabsItem.on('click', function(event)
    {
        event.preventDefault(); // Отменяет все что происходит при стандартном действии
        var activeContent = $(this).attr('href');
        console.log(activeContent);  // Элемент по которому мы кликнули какой там атрибут
        $('.visible').toggleClass('visible');   // находим єлемент у которого есть класс visible то отключаем ему visible
        $(activeContent).toggleClass('visible');    // найдем элемент который имеет id как activeContent и ему присвоим класс visible
        $('.tabs-item-active').toggleClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active');
    })
});