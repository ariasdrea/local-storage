// NO LOCAL STORAGE
(function() {
    let body = $('body');
    let circle = $('#container');
    let span = $('span');
    let light = $('#light');
    let dark = $('#dark');

    // STYLING FOR LIGHT THEME
    light.on('click', () => {
        body.css({
            background: '#cbf1f5',
            color: 'black'
        });

        circle.css({
            border: '2px solid black'
        });

        span.css({
            border: '2px solid black'
        });

    });

    // STYLING FOR DARK THEME
    dark.on('click', () => {
        body.css({
            background: '#18284a',
            color: '#f0f0f0'
        });

        circle.css({
            border: '2px solid #f0f0f0'
        });

        span.css({
            border: '2px solid #f0f0f0'
        });
    });
})();
