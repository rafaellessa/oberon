import QueueRepository from "../repository/QueueRepository";

export default class GetQueue {
  queueRepository: QueueRepository;
  constructor(queueRepository: QueueRepository) {
    this.queueRepository = queueRepository;
  }

  async execute() {
    const queue = await this.queueRepository.getQueue();
    console.log("Queue no usecase: ", queue);
    return queue;
  }
}
