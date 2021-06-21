function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Lees meer";
      meer.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Lees minder";
      meer.style.display = "inline";
    }
  }