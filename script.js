
function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Enter a task");
    return;
  }

  let li = document.createElement("li");
  li.innerText = taskText;

  li.onclick = function () {
    li.classList.toggle("completed");
  };

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";

  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});