"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor(myWorker) {
        this._myWorker = myWorker;
    }
    async addJob(job) {
        return await this._myWorker(job);
    }
    async getJobs() {
        return await this._myWorker;
    }
    async removeJob(id) {
        return await this._myWorker(id);
    }
}
exports.default = Queue;
