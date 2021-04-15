import { JobAttributes } from "../entity/Queue";
import QueueRepository from "../repository/QueueRepository";

export default class AddJob {
  queueRepository: QueueRepository;

  constructor(queueRepository: QueueRepository) {
    this.queueRepository = queueRepository;
  }

  async execute(job: JobAttributes) {
    return await this.queueRepository.addJob(job);
  }
}
