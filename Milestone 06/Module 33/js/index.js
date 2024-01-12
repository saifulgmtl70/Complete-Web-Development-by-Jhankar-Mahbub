
// function anotherLoad(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())
//         .then(users => allUsers(users))
// }

document.getElementById("anotherLoad").addEventListener("click", function(allUsers){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => allUsers(users))



    
function allUsers(user){
        const name = document.getElementById("name_list");
        const email = document.getElementById("email_list");

        for (const userItem of user) {
            // console.log(userItem.name);
            const nameLi = document.createElement('li');
            nameLi.textContent = userItem.name
            name.appendChild(nameLi);

            const emaiLi = document.createElement('p');
            emaiLi.textContent = userItem.email;
            email.appendChild(emaiLi);
        }
    }
});
