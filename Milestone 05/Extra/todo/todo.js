const todoInputField = document.getElementById("inpuField");
const toDoList = document.getElementById("to_do_list");
const addButton = document.getElementById("addBtn");

addButton.addEventListener("click", function(){
    const toDotext = todoInputField.value.trim();
    
    if(toDotext !== ""){
        const toDoItem = document.createElement("li");
        toDoItem.textContent = toDotext;
        toDoItem.className = "flex justify-between items-center mb-3 text-slate-900 font-semibold text-xl";
        toDoList.appendChild(toDoItem);


        const removeBtn = document.createElement("button");
        removeBtn.textContent = "";
        removeBtn.className = "fas fa-trash-alt text-rose-500 font-bold text-xl";
        toDoItem.appendChild(removeBtn);

        removeBtn.addEventListener("click", function(){
            toDoList.remove(toDoItem);
        });
        todoInputField.value = "";
    }
    else{
        alert("Please enter name first");
    }

 
})