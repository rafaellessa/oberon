"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetJobs {
    constructor(queueRepository) {
        this.queueRepository = queueRepository;
    }
    execute() {
        return this.queueRepository.getJobs();
    }
}
exports.default = GetJobs;
