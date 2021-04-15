import { JobAttributes } from "../entity/Queue";
import QueueRepository from "../repository/QueueRepository";

export default class RemoveJob {
  queueRepository: QueueRepository;

  constructor(queueRepository: QueueRepository) {
    this.queueRepository = queueRepository;
  }

  async execute(id: number) {
    return await this.queueRepository.removeJob(id);
  }
}
