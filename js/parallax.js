let background = document.getElementById('bg');
    let moon = document.getElementById('moon');
    let mountain = document.getElementById('mountain');
    let text = document.getElementById('text')
    window.addEventListener('scroll', function(){
        var value = window.scrollY
        bg.style.top = value * 0.5 + 'px';
        moon.style.left = -value * 0.2 + 'px';
        mountain.style.bottom = value * 0.5 + 'px';
        text.style.top = value * 0.5 + 'px';
    })