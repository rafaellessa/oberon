"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemoveAllJobs {
    constructor(queueRepository) {
        this.queueRepository = queueRepository;
    }
    async execute() {
        return await this.queueRepository.removeAllJobs();
    }
}
exports.default = RemoveAllJobs;
