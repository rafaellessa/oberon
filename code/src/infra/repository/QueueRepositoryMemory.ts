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
          console.log(new Date(), job);
          this.jobs.push(_job!);
          resolve(this.jobs);
        }, 1000);
      });
    });
    await instance.addJob(job);
    return this.jobs;
  }

  async getJobs(): Promise<JobAttributes[]> {
    const instance = new Queue(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Getting all jobs: ", this.jobs);
          resolve(this.jobs);
        }, 1000);
      });
    });
    await instance.getJobs();
    return this.jobs;
  }

  async removeJob(id: number): Promise<JobAttributes[]> {
    const instance = new Queue((id) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Removing job with id: ", id);
          const filtredJobs: JobAttributes[] = this.jobs.filter(
            (item: JobAttributes) => item.id !== id
          );
          this.jobs = filtredJobs.slice();
          console.log("Jobs after delete: ", this.jobs);
          resolve(filtredJobs);
        }, 1000);
      });
    });

    await instance.removeJob(id);
    return this.jobs;
  }

  async removeAllJobs(): Promise<JobAttributes[]> {
    const instance = new Queue(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Deleting all jobs", new Date());
          this.jobs = [];
          console.log("Jobs after delete", this.jobs);
          resolve(this.jobs);
        }, 1000);
      });
    });

    await instance.removeAllJobs();
    return this.jobs;
  }
}
