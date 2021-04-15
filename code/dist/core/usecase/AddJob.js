"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddJob {
    constructor(queueRepository) {
        this.queueRepository = queueRepository;
    }
    async execute(job) {
        return await this.queueRepository.addJob(job);
    }
}
exports.default = AddJob;
