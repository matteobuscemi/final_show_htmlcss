//Navigatie pagina van showroom is op andere HTML pagina dan waar de API word ingeladen en afgeprint, dus keuze van deze navigatie wordt doormiddel van localStorage opgeslagen en naar showroom-web.html gestuurd.
var menubuttons = document.querySelectorAll("button");
var menucluster = "web";
menubuttons.forEach(button => {
    button.addEventListener("click", function(){
        menucluster = button.classList[0];
        console.log(menucluster);
        localStorage.setItem("cluster", menucluster);
        window.location.href = "showroom-web.html"
    })
})