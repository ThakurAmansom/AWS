function changeHeading(){
    const heading = document.getElementById("main-heading");
    heading.textContent = "Welcome to KIET Deemed to be University Website";
}
function changecolor(){
    const card = document.getElementById("card-1");
    card.style.backgroundColor = "lightblue";
}
function changecolor1(){
    const card = document.getElementById("card-2");
    card.style.backgroundColor = "lightgreen";
}
function changecolor2(){
    const card = document.getElementById("card-3");
    card.style.backgroundColor = "lightyellow";
}
function changeCardColor(cardId) {
    const card = document.getElementById(cardId);
    card.style.backgroundColor = "lightblue";
}