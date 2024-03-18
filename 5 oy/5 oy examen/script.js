function addTodo() {
    var input = document.getElementById("todoInput");
    var text = input.value;
    if (text === "") {
        alert("Please enter a task!");
        return;
    }
    var todo = {
        id: new Date().getTime(),
        text: text,
        completed: false
    };
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodoList();
    input.value = "";
}

function toggleComplete(id) {
    var todoIndex = todos.findIndex(todo => todo.id == id);
    todos[todoIndex].completed = !todos[todoIndex].completed;
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodoList();
}

function deleteTodo(id) {
    var todoIndex = todos.findIndex(todo => todo.id == id);
    todos.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodoList();
}

function editTodo(id) {
    var todoIndex = todos.findIndex(todo => todo.id == id);
    var newText = prompt("Enter new text for this task:", todos[todoIndex].text);
    if (newText !== null) {
        todos[todoIndex].text = newText;
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodoList();
    }
}

function renderTodoList() {
    var todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
    todos.forEach(todo => {
        var listItem = document.createElement("li");
        listItem.className = "todo-item";
        if (todo.completed) {
            listItem.classList.add("completed");
        }
        listItem.innerHTML = `
            <span class="todo-text">${todo.text}</span>
            <button onclick="editTodo(${todo.id})">Edit</button>
            <button onclick="deleteTodo(${todo.id})">Delete</button>
        `;
        listItem.addEventListener("click", function() {
            toggleComplete(todo.id);
        });
        todoList.appendChild(listItem);
    });
}

var todos = JSON.parse(localStorage.getItem("todos")) || [];
renderTodoList();

