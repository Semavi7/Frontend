const from = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");
let todos = [];

runEvents();

function runEvents(){
    from.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    secondCardBody.addEventListener("click", removeTodoToUI);
    clearButton.addEventListener("click", clearAllTodos);
    filterInput.addEventListener("keyup", filter);
}

function pageLoaded(){
    checkTodoFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    });
}

function filter(e){
    const filterValue = e.target.value.toLowerCase().trim();
    const todoLists = document.querySelectorAll(".list-group-item");
    if(todoLists.length > 0){
        todoLists.forEach(function(todo){
            if(todo.textContent.toLowerCase().trim().includes(filterValue)){
                todo.setAttribute("style", "display: block");
            }
            else{
                todo.setAttribute("style", "display: none !important");
            }
        });
    }
    else{
        showAlert("warning", "Arama yapmak için en az bir todo olmalıdır.");
    }
}

function clearAllTodos(){
    const todolists = document.querySelectorAll(".list-group-item");
    if(todolists.length > 0){
        todolists.forEach(function(todo){
            todo.remove();
        });

        todos = [];
        localStorage.removeItem("todos", JSON.stringify(todos));
        showAlert("success", "Tüm todo'lar başarıyla silindi.");
    }
    else{
        showAlert("warning", "Silmek için en az bir todo olmalıdır.");
    }
}

function removeTodoToUI(e){
    if(e.target.className === "fa fa-remove"){
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        
        removeTodoToStorage(todo.textContent);

        showAlert("success", "Todo başarıyla silindi.");
    }
}

function removeTodoToStorage(removeTodo){
    checkTodoFromStorage();
    todos.forEach(function(todo,index){
        if(removeTodo === todo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(e){
    const inputText = addInput.value.trim();
    if(inputText == null || inputText == ""){
        showAlert("warning", "Lütfen boş bırakmayınız!");
    }
    else{
        addTodoToUI(inputText);
        addTodoToStorage(inputText);
        showAlert("success", "Todo başarıyla eklendi.");
    }
    e.preventDefault();
}

function addTodoToUI(newTodo){
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";
}

function addTodoToStorage(newTodo){
    checkTodoFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function checkTodoFromStorage(){
    if(localStorage.getItem("todos")===null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));

    }
}

function showAlert(type, message){
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    const hr = document.createElement("hr");
    firstCardBody.appendChild(hr);
    firstCardBody.appendChild(div);
    setTimeout(function(){
        div.remove();
        hr.remove();
    }, 2500);
}