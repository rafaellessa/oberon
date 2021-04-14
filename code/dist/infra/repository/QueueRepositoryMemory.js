"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Queue_1 = __importDefault(require("../../core/entity/Queue"));
class QueueRepositoryMemory {
    myWorker(_job) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(new Date(), _job);
                resolve();
            }, 1000);
        });
    }
    async addJob(job) {
        const queue = new Queue_1.default((_job) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(new Date(), _job);
                    queue.queue.push(_job);
                    resolve(queue);
                }, 2000);
            });
        });
        await queue.addJob(job);
    }
    getJobs() {
        throw new Error("Method not implemented.");
    }
    removeJob() {
        throw new Error("Method not implemented.");
    }
    removeAllJobs() {
        throw new Error("Method not implemented.");
    }
    async getQueue() {
        const queue = new Queue_1.default(() => {
            return new Promise((resolve) => {
                resolve(queue);
            });
        });
        console.log("Fila sera que vai agr: ", await queue.getQueue());
        return await queue.getQueue();
    }
}
exports.default = QueueRepositoryMemory;
