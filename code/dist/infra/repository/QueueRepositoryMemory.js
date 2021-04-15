"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueRepositoryMemory = void 0;
const Queue_1 = __importDefault(require("../../core/entity/Queue"));
class QueueRepositoryMemory {
    constructor() {
        this.jobs = [];
    }
    async getJobs() {
        const instance = new Queue_1.default(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(this.jobs);
                }, 1000);
            });
        });
        await instance.getJobs();
        return this.jobs;
    }
    async addJob(job) {
        const instance = new Queue_1.default((_job) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(new Date(), job);
                    this.jobs.push(_job);
                    resolve(this.jobs);
                }, 1000);
            });
        });
        await instance.addJob(job);
        return this.jobs;
    }
}
exports.QueueRepositoryMemory = QueueRepositoryMemory;
