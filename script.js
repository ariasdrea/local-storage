(function() {
    let body = $('body');
    let circle = $('#container');
    let span = $('span');
    let light = $('#light');
    let dark = $('#dark');

    let backgroundColor = localStorage.getItem('backgroundColor');
    let color = localStorage.getItem('color');

    body.css({
        background: backgroundColor,
        color: color
    });

    circle.css({
        border: `2px solid ${color}`
    });

    span.css({
        border: `2px solid ${color}`
    });

    // STYLING FOR LIGHT THEME
    light.on('click', () => {
        localStorage.setItem('backgroundColor', '#cbf1f5');
        localStorage.setItem('color', 'black');

        body.css({
            background: localStorage.getItem('backgroundColor'),
            color: localStorage.getItem('color')
        });

        circle.css({
            border: `2px solid ${localStorage.getItem('color')}`
        });

        span.css({
            border: `2px solid ${localStorage.getItem('color')}`
        });

    });

    // STYLING FOR DARK THEME
    dark.on('click', () => {
        localStorage.setItem('backgroundColor', '#18284a');
        localStorage.setItem('color', '#f0f0f0');

        body.css({
            background: localStorage.getItem('backgroundColor'),
            color: localStorage.getItem('color')
        });

        circle.css({
            border: `2px solid ${localStorage.getItem('color')}`
        });

        span.css({
            border: `2px solid ${localStorage.getItem('color')}`
        });
    });
})();
