"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemoveJob {
    constructor(queueRepository) {
        this.queueRepository = queueRepository;
    }
    async execute(id) {
        return await this.queueRepository.removeJob(id);
    }
}
exports.default = RemoveJob;
