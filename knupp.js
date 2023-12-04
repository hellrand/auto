// koodi autor: https://www.w3schools.com/howto/howto_js_read_more.asp
// Kogemused
// Antud nupp väljastab ning peidab statistika küsimustikus välja toodud vastused. Küsimus: "Mille pärast teil sõiduärevus väljendub (või väljendus)?"
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Kuva statistika";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Näita vähem";
      moreText.style.display = "inline";
    }
  }