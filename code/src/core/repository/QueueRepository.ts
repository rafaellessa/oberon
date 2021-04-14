import Queue, { JobAttributes } from "../entity/Queue";

export default interface QueueRepository {
  getQueue(): Promise<void | Queue>;
  addJob(job: JobAttributes): void;
  getJobs(): void;
  removeJob(): void;
  removeAllJobs(): void;
}
