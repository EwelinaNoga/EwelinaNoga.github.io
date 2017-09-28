'use strict';

$(document).ready(function () {


    $("button").click(function () {
        $("div").animate({
            left: '100px',
            width: '100px',
            height: '100px',
            duration: '3000',

        }).queue(function (next) {
            $("div").css("background-color", "blue", "5000");
            $("div").append("<h2> Animacja zakończona </h2>");
            next();

        });
    });

});