import QueueRepository from "../repository/QueueRepository";

export default class GetJobs {
  queueRepository: QueueRepository;

  constructor(queueRepository: QueueRepository) {
    this.queueRepository = queueRepository;
  }

  async execute() {
    return await this.queueRepository.getJobs();
  }
}
