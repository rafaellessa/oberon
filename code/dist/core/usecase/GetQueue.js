"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetQueue {
    constructor(queueRepository) {
        this.queueRepository = queueRepository;
    }
    async execute() {
        const queue = await this.queueRepository.getQueue();
        console.log("Queue no usecase: ", queue);
        return queue;
    }
}
exports.default = GetQueue;
