"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor(myWorker) {
        this.queue = [];
        this.myWorker = myWorker;
    }
    async addJob(job) {
        return await this.myWorker(job);
    }
    async removeJob() { }
    async removeAllJobs() { }
    async getJobs() { }
    async getQueue() {
        return await this.myWorker();
    }
    setQueue(queue) {
        this.queue = queue;
    }
}
exports.default = Queue;
