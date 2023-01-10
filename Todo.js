function addTask() {
    // Get the task input
    var task = document.getElementById("task").value;
  
    // Create a new list item
    var li = document.createElement("li");
    li.innerHTML = task;
  
    // Create a checkbox
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("onclick", "markTaskComplete(this)");
  
    // Append the checkbox to the list item
    li.insertBefore(checkbox, li.firstChild);
  
    // Create a delete button
    var deleteBtn = document.createElement("a");
    deleteBtn.innerHTML = "x";
    deleteBtn.setAttribute("href", "#");
    deleteBtn.setAttribute("onclick", "deleteTask(this)");
  
    // Append the delete button to the list item
    li.appendChild(deleteBtn);
  
    // Append the list item to the tasks list
    document.getElementById("tasks").appendChild(li);
  
    // Clear the task input
    document.getElementById("task").value = "";
  }
  
  function deleteTask(e) {
    var task = e.parentElement;
    task.remove();
  }
  
  function markTaskComplete(e) {
    var task = e.parentElement;
    task.style.textDecoration = "line-through";
  
    // Create a delete button for completed tasks
    var deleteBtn = document.createElement("a");
    deleteBtn.innerHTML = "x";
    deleteBtn.setAttribute("href", "#");
    deleteBtn.setAttribute("onclick", "deleteTask(this)");
  
    // Append the delete button to the list item
    task.appendChild(deleteBtn);
  }
  
  function deleteCompletedTasks() {
    var tasks = document.getElementById("tasks");
    var completedTasks = tasks.getElementsByTagName("li");
  
    // Loop through the completed tasks and delete them
    for (var i = completedTasks.length - 1; i >= 0; i--) {
      var task = completedTasks[i];
      if (task.style.textDecoration === "line-through") {
        tasks.removeChild(task);
      }
    }
  }
  
