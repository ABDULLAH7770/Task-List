let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    const prioritySelect = document.getElementById('prioritySelect').value;

    if (taskInput === "") {
        alert("الرجاء إدخال مهمة");
        return;
    }

    const newTask = {
        task: taskInput,
        priority: prioritySelect,
        completed: false
    };

    tasks.push(newTask);
    displayTasks();

    // مسح المدخلات
    document.getElementById('taskInput').value = "";
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.toggle('completed', task.completed);
        li.innerHTML = `
            <span>${task.task} - ${task.priority}</span>
            <button onclick="toggleComplete(${index})">${task.completed ? 'إلغاء' : 'تم'}</button>
        `;
        taskList.appendChild(li);
    });
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function filterTasks() {
    const filterValue = document.getElementById('filterOptions').value;
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        if (filterValue === "all" || (filterValue === "completed" && task.completed) || (filterValue === "incomplete" && !task.completed)) {
            const li = document.createElement('li');
            li.classList.toggle('completed', task.completed);
            li.innerHTML = `
                <span>${task.task} - ${task.priority}</span>
                <button onclick="toggleComplete(${index})">${task.completed ? 'إلغاء' : 'تم'}</button>
            `;
            taskList.appendChild(li);
        }
    });
}

function clearAll() {
    tasks = [];
    displayTasks();
}





function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}

// تغيير النص والإيموجي عند التبديل بين الأوضاع
const toggleNightModeBtn = document.getElementById('toggleNightMode');
const body = document.body;

toggleNightModeBtn.addEventListener('click', () => {
    body.classList.toggle('night-mode');

    const modeText = body.classList.contains('night-mode') ? '🌜' : '🌞'; // استخدام الإيموجي
    toggleNightModeBtn.querySelector('span').textContent = modeText;
});



