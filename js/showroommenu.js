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