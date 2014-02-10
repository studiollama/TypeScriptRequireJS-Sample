require.config({
    baseUrl: '/',
    paths: {
        'jQuery': 'Scripts/jquery-2.1.0.min'
    },
    shim: {
        jQuery: {
            exports: '$'
        },
    }
});

require(['Source/main', 'jQuery'],
    (main?, $?) => {
        var app = new main.Main();
    });
