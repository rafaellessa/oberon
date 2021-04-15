import QueueRepository from "../repository/QueueRepository";

export default class RemoveAllJobs {
  queueRepository: QueueRepository;
  constructor(queueRepository: QueueRepository) {
    this.queueRepository = queueRepository;
  }

  async execute() {
    return await this.queueRepository.removeAllJobs();
  }
}
