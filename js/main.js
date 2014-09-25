require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery/dist/jquery.min',
        html5shiv: 'html5shiv/dist/html5shiv.min',
        respond: 'respond/dest/respond.min'
    }
});

require(['jquery', 'html5shiv', 'respond', 'social-tab'], function($, html5shiv, respond, socialTab) {

  var module1 = new socialTab();

  $('body').append("social dziala je");
});
