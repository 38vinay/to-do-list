const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
    if (inputbox.value === '') {
        alert("You must write something");
    } else {
        // Create list item
        let li = document.createElement("li");
        li.classList.add("todo-item");

        // Task text
        let taskText = document.createElement("span");
        taskText.innerText = inputbox.value;
        taskText.classList.add("flex-grow-1");

        // Complete button
        let completeBtn = document.createElement("button");
        completeBtn.innerText = "Done";
        completeBtn.title = "Mark as Complete";
        completeBtn.classList.add("done");
        completeBtn.onclick = function () {
            taskText.classList.toggle("text-decoration-line-through");
            taskText.classList.toggle("text-muted");
        };

        // Delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.title = "Delete Task";
        deleteBtn.classList.add("del");
        deleteBtn.onclick = function () {
            li.remove();
        };

        // Buttons container
        let btnGroup = document.createElement("div");
        btnGroup.classList.add("btn-group");
        btnGroup.appendChild(completeBtn);
        btnGroup.appendChild(deleteBtn);

        // Add everything to li
        li.appendChild(taskText);
        li.appendChild(btnGroup);

        // Add li to list
        listcontainer.appendChild(li);

        // Clear input
        inputbox.value = "";
    }
}
