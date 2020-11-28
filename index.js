let lion = document.getElementById('lion');
let blue = document.getElementById('blue');
let girl = document.getElementById('girl');
let fortnite = document.getElementById('fortnite');

window.addEventListener('scroll', function ()
{
    var value = window.scrollY;

    lion.style.top = value * 0.5 + 'px';
    blue.style.top = value * 0.5 + 'px';
    girl.style.top = value * 0.25 + 'px';
    fortnite.style.top = value * 0.2 + 'px';
})