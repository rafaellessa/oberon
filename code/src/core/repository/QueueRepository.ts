import Queue, { JobAttributes } from "../entity/Queue";

export default interface QueueRepository {
  addJob(job: JobAttributes): Promise<JobAttributes[]>;
  getJobs(): Promise<JobAttributes[]>;
  removeJob(id: number): Promise<JobAttributes[]>;
  removeAllJobs(): Promise<JobAttributes[]>;
}
