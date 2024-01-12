// function Loading(){
//     const url = 'https://jsonplaceholder.typicode.com/todos/1';
//     fetch(url)
//         .then(response => response.json())
//         .then(json => console.log(json))
// }



function loadUuser(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => displayUSer(data));
}

function displayUSer(data){
    console.log(data);
}