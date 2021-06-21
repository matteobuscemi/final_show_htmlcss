const api_url = "https://finalshowcase.herokuapp.com/final-work/get-all";

async function getapi(url) {
    const response = await fetch(url);

    var data = await response.json();
    
    show(data);
}

getapi(api_url);

function show(data) {
    let projecten = `
    <img class="coverphoto" src="../../img/dummyphotosr.png">
            
            <h2>Title Title</h2>
            <h3>Firstname Lastname</h3>
            <h4>Beschrijving</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat<span id="dots">...</span>
                <span id="meer">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button onclick="myFunction()" id="myBtn">Lees meer</button>
    `

for (let project of data) {
    var tekst2 = project.description.split(".");
    var tekst1 = tekst2.shift();
    if(project.cluster == "web"){
        document.querySelector(".projecten").innerHTML = `
        <img class="coverphoto" src="${project.images}">
        <h2>${project.name}</h2>
        <h3>${project.username}</h3>
        <h4>Beschrijving</h4>
        <p>${tekst1}<span id="dots">...</span><span id="meer">${tekst2}</span></p>
        <button onclick="myFunction()" id="myBtn">Lees meer</button>
        `;
    }

    

    // document.querySelector(".projecten").innerHTML = `
    // <img class="coverphoto" src="${project.images}">
    // <h2>${project.name}</h2>
    // <h3>${project.username}</h3>
    // <h4>Beschrijving</h4>
    // <p>${tekst1}<span id="dots">...</span><span id="meer">${tekst2}</span></p>
    // <button onclick="myFunction()" id="myBtn">Lees meer</button>
    // `;
}

}




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

  