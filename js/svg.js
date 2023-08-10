function afficher( ref, type ) {
var legende = "L"+ref.id.charAt(1);
var arche = "A"+ref.id.charAt(1);
document.getElementById(legende).classList.add("st6");
document.getElementById(arche).classList.add("Noir");

}
function masquer( ref, type ) {
var legende = "L"+ref.id.charAt(1);
var arche = "A"+ref.id.charAt(1);
document.getElementById(legende).classList.remove("st6");
document.getElementById(arche).classList.remove("Noir");
}

// //var zoom = document.getElementsByTagName("svg")[0];
    
//     var svg = document.querySelector('svg');
//     var box = svg.getAttribute('viewBox');
//     var zozo = document.querySelector('#fond')

//        function resizePage(){
//     var Largeur = $(window).width();
//     if(Largeur < 667) {
//         //shape = document.getElementsByTagName("svg")[0];
//     //zoom.setAttribute("viewBox", "-130 90 300 700");
//     //svg.setAttribute("viewBox", "-130 90 500 700");
//     box="0, 0, 500, 500"; 
//     }
// }
//       $(window).resize(resizePage);
//       resizePage(); // Appel de la fonction à l'affichage de la page.-->

