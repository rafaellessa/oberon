"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueRepositoryMemory = void 0;
const Queue_1 = __importDefault(require("../../core/entity/Queue"));
class QueueRepositoryMemory {
    getJobs() {
        const instance = new Queue_1.default(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(instance);
                }, 2000);
            });
        });
        return instance.getJobs();
    }
    async addJob(job) {
        const instance = new Queue_1.default((_job) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log("Push job: ", _job);
                    instance.queue.push(_job);
                    console.log("Sera: ", instance.queue);
                    resolve(instance);
                }, 2000);
            });
        });
        return await instance.addJob(job);
    }
}
exports.QueueRepositoryMemory = QueueRepositoryMemory;
