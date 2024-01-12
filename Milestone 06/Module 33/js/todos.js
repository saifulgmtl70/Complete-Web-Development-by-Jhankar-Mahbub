function loadTodo(){
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => showTodO(data))
}

function showTodO(todos){
    const todoContainer = document.getElementById("todo_container");
    for (const todo of todos) {
        const todoDiv  = document.createElement("div");
        todoDiv.innerHTML = `
        <h3>ID: ${todo.id}</h3>
        <h2>Title: ${todo.title}</h2>
        <p>Task: ${todo.completed === true ? 'completed': 'Not Completed..'}</p>
        <br>
        `;
        todoContainer.appendChild(todoDiv);
    }
}

loadTodo()