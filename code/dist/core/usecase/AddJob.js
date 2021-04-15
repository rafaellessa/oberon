"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddJob {
    constructor(queueRepository) {
        this.queueRepository = queueRepository;
    }
    execute(job) {
        return this.queueRepository.addJob(job);
    }
}
exports.default = AddJob;
