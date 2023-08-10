$(document).ready(function(){



	
     $(window).resize(function(){
     	var zoom = $('svg').attr('viewBox');
     	var width = $(window).width(), height = $(window).height();

     	if ( width <  500 ) {
     		zoom = $('svg').attr('viewBox','112 90 575 700');
            console.log ("On est à moins de 500 pixels");
     	}else{
     		zoom = $('svg').attr('viewBox','-115 90  800 700');
            console.log ("On est à plus de 500 pixels");
     	}
    });

    function depart(){
        var zoom = $('svg').attr('viewBox');
        var width = $(window).width(), height = $(window).height();

        if(width < 500){
            zoom = $('svg').attr('viewBox','112 90 575 700');
        }else{
            console.log('non');
            zoom = $('svg').attr('viewBox','-115 90  800 700');
        }
    }
        
        depart();

});
// Déclaration de variable et assignation de valeur
//var monArgent = 1;
//var prixCafe  = 1.2;

// Condition
// Si
/*if ( monArgent >= prixCafe) {
    console.log("J'ai assez d'argent pour boire un café.");
}
// Sinon
else {
    console.log("Je n'ai pas assez d'argent pour boire un café.");
}
/*$( document ).ready(function() {
    console.log( "ready!" );
});*/