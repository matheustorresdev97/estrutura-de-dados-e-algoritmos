export const TaskStatus = {
    PENDING: "Pending",
    COMPLETED: "completed"
}

export class Task {

    constructor( id, description, tag, status = TaskStatus.PENDING) {
        this.id = id;
        this.description = description;
        this.tag = tag;
        this.status = status;
    }

    getId() {
        return this.id;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getTag() {
        return this.tag;
    }

    setTag(tag) {
        this.tag = tag;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }

    toString = () => {
        return `Task ${this.id}: (${this.description}, ${this.tag}, ${this.status} `
    }

}