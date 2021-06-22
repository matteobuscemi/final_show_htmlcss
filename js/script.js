const api_url = "https://finalshowcase.herokuapp.com/final-work/get-all";

var buttons = document.querySelectorAll(".bottom-menu a");
var cluster = localStorage.getItem("cluster")||"web";
document.querySelector(`a.${cluster}`).classList.add("active");
buttons.forEach(button => {
    button.addEventListener("click", function(){
        cluster = button.classList[0];
        button.classList.add("active");
        var children = [].slice.call(button.parentNode.children);
        children.forEach(child => {
            if(child.classList[0] != cluster) {
                child.classList.remove("active");
            }
        });
        getapi(api_url);
    })
});



async function getapi(url) {
    const response = await fetch(url);

    var data = await response.json();
    
    show(data);
    
}

getapi(api_url);

function show(data) {
    var started = false;
    var projecten = data.filter(p => p.cluster == cluster);
    Array.prototype.next = function() {
        return this[++this.current];
    };
    Array.prototype.prev = function() {
        return this[--this.current];
    };
    Array.prototype.current = 0;
    document.querySelector(".hoeveelheid").innerHTML = `${projecten.current+1}/${projecten.length}`;
    var project = projecten[0];
    var nextProject = document.querySelector(".right");
    var previousProject = document.querySelector(".left");
    nextProject.addEventListener("click", function(){
        project = projecten.next();
        document.querySelector(".hoeveelheid").innerHTML = `${projecten.current+1}/${projecten.length}`;
        console.log("text");
        document.querySelector(".projecten").innerHTML = `
        <img class="coverphoto" src="${project.images}">
        <h2>${project.name}</h2>
        <h3>${project.username}</h3>
        <h4>Beschrijving</h4>
        <p>${project.description}</p>
        `;
    });
    previousProject.addEventListener("click", function(){
        project = projecten.prev();
        document.querySelector(".hoeveelheid").innerHTML = `${projecten.current+1}/${projecten.length}`;
        console.log("text");
        document.querySelector(".projecten").innerHTML = `
        <img class="coverphoto" src="${project.images}">
        <h2>${project.name}</h2>
        <h3>${project.username}</h3>
        <h4>Beschrijving</h4>
        <p>${project.description}</p>
        `;
        
    });


    if(!started) {
        document.querySelector(".projecten").innerHTML = `
        <img class="coverphoto" src="${project.images}">
        <h2>${project.name}</h2>
        <h3>${project.username}</h3>
        <h4>Beschrijving</h4>
        <p>${project.description}</p>
        `;
        started = true;
    }
}
  