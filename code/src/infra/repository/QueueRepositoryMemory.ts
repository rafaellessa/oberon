import Queue, { JobAttributes } from "../../core/entity/Queue";
import QueueRepository from "../../core/repository/QueueRepository";

export class QueueRepositoryMemory implements QueueRepository {
  getJobs(): Promise<JobAttributes[]> {
    const instance = new Queue(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(instance);
        }, 2000);
      });
    });

    return instance.getJobs();
  }
  async addJob(job?: JobAttributes): Promise<JobAttributes[]> {
    const instance = new Queue((_job) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Push job: ", _job);
          instance.queue.push(_job!);
          console.log("Sera: ", instance.queue);
          resolve(instance);
        }, 2000);
      });
    });
    return await instance.addJob(job);
  }
}
