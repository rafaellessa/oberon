"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor(_myWork) {
        this.queue = [];
        this._myWork = _myWork;
    }
    async addJob(job) {
        await this._myWork(job);
        return await this.getQueue();
    }
    async getQueue() {
        return this.queue;
    }
}
exports.default = Queue;
