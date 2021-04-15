import QueueRepository from "../repository/QueueRepository";

export default class GetJobs {
  queueRepository: QueueRepository;

  constructor(queueRepository: QueueRepository) {
    this.queueRepository = queueRepository;
  }

  execute() {
    return this.queueRepository.getJobs();
  }
}
