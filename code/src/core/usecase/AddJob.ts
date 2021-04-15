import { JobAttributes } from "../entity/Queue";
import QueueRepository from "../repository/QueueRepository";

export default class AddJob {
  queueRepository: QueueRepository;
  constructor(queueRepository: QueueRepository) {
    this.queueRepository = queueRepository;
  }

  execute(job: JobAttributes) {
    return this.queueRepository.addJob(job);
  }
}
