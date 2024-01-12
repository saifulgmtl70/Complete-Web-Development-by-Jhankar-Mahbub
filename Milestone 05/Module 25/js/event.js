function makeYellow(){
    document.body.style.backgroundColor = "yellow";
}

function makeGreen(){
    document.body.style.backgroundColor = "Green"
}


const purpleColor = document.getElementById('makePurple');
purpleColor.addEventListener("click", makePurple);

function makePurple(){
    document.body.style.backgroundColor = "purple";
}

const TomatooColor = document.getElementById('makeTomato');
TomatooColor.addEventListener("click", function makeTomatoo(){
    document.body.style.backgroundColor = "tomato";
});


document.getElementById("makeGolden").addEventListener("click",function(){
    document.body.style.backgroundColor = "goldenrod";
})


function makeGray(){
    document.body.style.backgroundColor = "gray";
}