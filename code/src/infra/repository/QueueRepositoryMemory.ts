import Queue, { JobAttributes } from "../../core/entity/Queue";
import QueueRepository from "../../core/repository/QueueRepository";

export class QueueRepositoryMemory implements QueueRepository {
  async addJob(job: JobAttributes): Promise<JobAttributes[]> {
    const instance = new Queue((_job) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          instance.queue.push(_job);
          resolve(instance);
        }, 2000);
      });
    });
    return await instance.addJob(job);
  }
}
