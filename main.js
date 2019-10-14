document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mainHeader").onmouseover = function() {
      this.style.color = 'orange' 
    }
  })
$( document ).ready(function() {
$( "#mainHeader" ).click(function() {
    $( "#mainHeader" ).fadeOut( "slow", function() {
    });
});
});