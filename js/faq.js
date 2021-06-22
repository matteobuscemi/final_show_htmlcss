"use strict";
document.getElementById("vraag1").addEventListener('click', function(e){
    e.preventDefault;
    console.log('succes!');
    document.getElementById("titel").innerHTML = 'Wat is de Final Show?';
    document.getElementById("info").innerHTML = 'De Final Show is een evenement waar eindejaarsstudenten van de opleiding Multimedia & Communicatietechnologie aan de Erasmushogeschool Brussel in de spotlight worden gezet. Hier kunnen ze tonen waar ze de voorbije maanden mee bezig zijn geweest. Dit is ook de ideale gelegenheid om contacten te leggen tussen werkgevers en potentiële werknemers';
});
document.getElementById("vraag2").addEventListener('click', function(e){
    e.preventDefault;
    console.log('succes!');
    document.getElementById("titel").innerHTML = 'Hoe zal de Final Show doorgaan?';
    document.getElementById("info").innerHTML = 'Dit jaar zal de Final Show te zien zijn via een livestream. De livestream kan je bekijken zonder een account aan te maken. Enkel wanneer je wilt chatten zullen we je vragen om snel een account aan te maken.';
});
document.getElementById("vraag3").addEventListener('click', function(e){
    e.preventDefault;
    console.log('succes!');
    document.getElementById("titel").innerHTML = 'Waarom hapert de livestream?';
    document.getElementById("info").innerHTML = 'Een stabiele internetconnectie is nodig om de livestream vloeiend te kunnen bekijken. Sluit ook onnodige openstaande tabs af, dit kan uw toestel en dus de stream vertragen.';
});
document.getElementById("vraag4").addEventListener('click', function(e){
    e.preventDefault;
    console.log('succes!');
    document.getElementById("titel").innerHTML = 'Waar vind ik meer info over de opleiding?';
    document.getElementById("info").innerHTML = 'Meer info hierover kan je op de website van EHB vinden.';
});
document.getElementById("vraag5").addEventListener('click', function(e){
    e.preventDefault;
    //console.log('succes!');
    document.getElementById("titel").innerHTML = 'Hoe kan ik de school contacteren?';
    document.getElementById("info").innerHTML = 'Meer info hierover kan je op de website van EHB vinden.';
});