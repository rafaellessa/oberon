import Queue, { JobAttributes } from "../../core/entity/Queue";
import QueueRepository from "../../core/repository/QueueRepository";

export default class QueueRepositoryMemory implements QueueRepository {
  myWorker(_job: JobAttributes) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(new Date(), _job);
        resolve();
      }, 1000);
    });
  }

  async addJob(job: JobAttributes): Promise<void> {
    const queue = new Queue((_job: any) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(new Date(), _job);
          queue.queue.push(_job);
          resolve(queue);
        }, 2000);
      });
    });

    await queue.addJob(job);
  }
  getJobs(): void {
    throw new Error("Method not implemented.");
  }
  removeJob(): void {
    throw new Error("Method not implemented.");
  }
  removeAllJobs(): void {
    throw new Error("Method not implemented.");
  }
  async getQueue(): Promise<void | Queue> {
    const queue = new Queue(() => {
      return new Promise((resolve) => {
        resolve(queue);
      });
    });

    console.log("Fila sera que vai agr: ", await queue.getQueue());
    return await queue.getQueue();
  }
}
