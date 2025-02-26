import LinkedList from "./linked-list"
import { TaskStatus } from "./task";

export default class TaskList {
    constructor() {
        this.tasks = new LinkedList();
    }

    getTasks() {
        return this.tasks.toArray();
    }

    addTask(task, index = null) {
        if(index === null) {
            this.tasks.addAtEnd(task);
            return;
        }
        if(!this.tasks.get(index)) {
            return;
        }
        this.tasks.addAtPosition(index, task);
    }

    getTasksByTag = (tag) => {
        let current = this.tasks.head;
        const tasksByTag = [];

        while(current) {
            if(current.value.tag === tag) {
                tasksByTag.push(current.value);
            }
            current = current.next;
        }

        return tasksByTag;
    }

    getTaskById = (id) => {
        let current = this.tasks.head;

        while(current) {
            if(current.value.id === id) {
                return current.value;
            }
            current = current.next;
        }

        return null;
    }

    removeTaskById = (id) => {
        const taskItem = this.getTaskById(id);
        if(taskItem) {
            this.tasks.remove(taskItem);
        }
        return null;
    }

    setTaskToCompleted = (id) => {
        const taskItem = this.getTaskById(id);
        if(taskItem) {
            taskItem.setStatus(TaskStatus.COMPLETED);
        }
        return taskItem;
    }
}