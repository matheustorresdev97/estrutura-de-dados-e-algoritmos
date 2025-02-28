import { Task, TaskStatus  } from "./task.js";
import TaskList from "./task-list.js";

const showTasks = (taskList) => {
    taskList.forEach(item => {
        showTask(item)
    });
}

const showTask = (item) => {
    if(item == null) {
        console.log("Task not found");
        return;
    }
    console.log(`ID: ${item.id}, Title: ${item.title}, Description: ${item.description}, Status: ${item.status}`);
}

const task1 = new Task(1, "Daily with a team", "meeting");
const task2 = new Task(2, "Prepare for presentation", "job", TaskStatus.COMPLETED);
const task3 = new Task(3, "Review progress", "project");
const task4 = new Task(4, "Update status report", "project", TaskStatus.COMPLETED);
const task5 = new Task(5, "Deploy a project", "job")

const taskList = new TaskList();


taskList.addTask(task1);
taskList.addTask(task2);
taskList.addTask(task3, 0);
taskList.addTask(task4);
taskList.addTask(task5, 2);

// 1 - Get all tasks
showTasks(taskList.getTasks())

// 2 - Get tasks by tag
console.log("Tasks by tag 'job':")
showTasks(taskList.getTasksByTag("job"));

console.log("Tasks by tag 'meeting':")
showTasks(taskList.getTasksByTag("meeting"));

console.log("Tasks by tag 'project':")
showTasks(taskList.getTasksByTag("project"));

// 3 - Get task by ID
console.log("Task with ID 3:")
showTask(taskList.getTaskById(3));

console.log("Task with ID 5:")
showTask(taskList.getTaskById(5));

// 4 - Remove task by ID
taskList.removeTaskById(4);
console.log("Tasks after removing task with ID 4:")
showTasks(taskList.getTasks());

// 5 - Update task status
taskList.setTaskToCompleted(3);
console.log("Task with ID 3 after completion:")
showTask(taskList.getTaskById(3));


// 6 - Update task data
const updatedTask = new Task(3, "Review progress with updated description", "project", TaskStatus.COMPLETED);
taskList.setTaskDataById(3, updatedTask);
console.log("Task with ID 3 after updating data:")
showTask(taskList.getTaskById(3));

// 7 - Move task
taskList.move(3, 0);
console.log("Tasks after moving task with ID 3 to the top:")
showTasks(taskList.getTasks());