const header = document.querySelector("#header h1");
header.style.textAlign = "center";
header.style.fontSize = "50px";
header.style.letterSpacing = "4px";

const sections = document.querySelectorAll('section');

for (const section of sections){
    section.style.border = '2px solid tomato';
    section.style.margin = '10px 2px';
    section.style.padding = '20px';
    section.style.borderRadius = '10px';
    section.style.background = 'lightgray';
}


const main = document.getElementById("main");
main.classList.add("main");