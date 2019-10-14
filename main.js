// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("mainHeader").onmouseover = function() {
//       this.style.color = 'orange' 
//     }
//   })
$( document ).ready(function() {
$( "#fadeButton" ).click(function() {
    $( "#all" ).fadeOut( "slow", function() {
    });
});
});
