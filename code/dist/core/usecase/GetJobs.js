"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetJobs {
    constructor(queueRepository) {
        this.queueRepository = queueRepository;
    }
    async execute() {
        return await this.queueRepository.getJobs();
    }
}
exports.default = GetJobs;
