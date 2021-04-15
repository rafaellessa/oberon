import Queue, { JobAttributes } from "../../core/entity/Queue";
import QueueRepository from "../../core/repository/QueueRepository";

export class QueueRepositoryMemory implements QueueRepository {
  jobs: Array<JobAttributes>;
  constructor() {
    this.jobs = [];
  }

  async addJob(job: JobAttributes): Promise<JobAttributes[]> {
    const instance = new Queue((_job) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.jobs.push(_job);
          resolve(this.jobs);
          console.log("Jobs: ", this.jobs);
        }, 1000);
      });
    });
    const response = await instance.addJob(job);
    console.log("Repsonse: ", response);
    return this.jobs;
  }
}
