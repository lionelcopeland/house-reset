const API_URL = "https://script.google.com/macros/s/AKfycbyL_nALBvFprKNxGHogWV1JpSmwUaTmxnMNHcDKaWZA_IyDELYDYQ1QVq5ppI4ZBKjwsw/exec";

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const categoryInput = document.getElementById("category-input");
const taskList = document.getElementById("task-list");

async function loadTasks() {
  const response = await fetch(`${API_URL}?action=list`);
  const data = await response.json();

  renderTasks(data.tasks);
}

function renderTasks(tasks) {
  taskList.innerHTML = "";

  const categories = {};

  tasks.forEach(task => {
    if (!categories[task.category]) {
      categories[task.category] = [];
    }

    categories[task.category].push(task);
  });

  Object.entries(categories).forEach(([category, tasks]) => {
    const categorySection = document.createElement("section");
    categorySection.className = "category";

    const heading = document.createElement("h2");
    heading.textContent = category;

    categorySection.appendChild(heading);

    tasks.forEach(task => {
      const taskElement = document.createElement("div");
      taskElement.className = "task";

      if (task.completed) {
        taskElement.classList.add("completed");
      }

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;

      checkbox.addEventListener("change", async () => {
        await updateTask(task.id, checkbox.checked);
      });

      const taskText = document.createElement("span");
      taskText.textContent = task.task;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "🗑";
      deleteButton.className = "delete-button";

      deleteButton.addEventListener("click", async () => {
        await deleteTask(task.id);
      });

      taskElement.appendChild(checkbox);
      taskElement.appendChild(taskText);
      taskElement.appendChild(deleteButton);

      categorySection.appendChild(taskElement);
    });

    taskList.appendChild(categorySection);
  });
}

taskForm.addEventListener("submit", async event => {
  event.preventDefault();

  const task = taskInput.value.trim();
  const category = categoryInput.value.trim() || "General";

  if (!task) {
    return;
  }

  await sendRequest({
    action: "add",
    task,
    category
  });

  taskInput.value = "";
  categoryInput.value = "";

  await loadTasks();
});

async function updateTask(id, completed) {
  await sendRequest({
    action: "toggle",
    id,
    completed
  });

  await loadTasks();
}

async function deleteTask(id) {
  await sendRequest({
    action: "delete",
    id
  });

  await loadTasks();
}

async function sendRequest(data) {
  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data)
  });
}

loadTasks();