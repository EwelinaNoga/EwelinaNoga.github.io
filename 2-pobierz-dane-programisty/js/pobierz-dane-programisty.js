'use strict';

$(document).ready(function() {
    


    $("button").click(function(){
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", 
                  function(data){
            $("body").append("<div id=dane-programisty>imie: "+ data.imie + "," + " nazwisko:" + data.nazwisko +"," + " zawod: " + data.zawod + "," + " firma: " + data.firma +"</div>");
            

            });
        });
    
    
});
