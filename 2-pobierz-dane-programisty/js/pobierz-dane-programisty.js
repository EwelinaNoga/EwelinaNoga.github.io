'use strict';

$(document).ready(function() {
    


    $("button").click(function(){
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", 
                  function(data){
            $("body").append("<div id=dane-programisty>imie: "+ data.imie +"</div>");
            
            $("body").append("<div id=dane-programisty>nazwisko: "+ data.nazwisko +"</div>");
            
            $("body").append("<div id=dane-programisty>zawod: "+ data.zawod +"</div>");
            
            $("body").append("<div id=dane-progarmisty>firma: "+ data.firma +"</div>");
            });
        });
    
    
});
