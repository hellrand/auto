// koodi autor: https://www.w3schools.com/howto/howto_js_read_more.asp
// Antud JS väljastab nupuvajutusel rohkem teksti, kui algselt nähtaval on.
// Pealeht

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Näita rohkem";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Näita vähem";
      moreText.style.display = "inline";
    }
  }