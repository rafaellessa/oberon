export interface JobAttributes {
  id: string;
  payload: {
    filename: string;
    body: string;
  };
}

export default class Queue {
  queue: Array<JobAttributes> = [];
  myWorker: (_job?: JobAttributes | undefined) => Promise<void | Queue>;

  constructor(myWorker: (_job?: JobAttributes) => Promise<void | Queue>) {
    this.myWorker = myWorker;
  }

  async addJob(job: JobAttributes) {
    return await this.myWorker(job);
  }

  async removeJob() {}
  async removeAllJobs() {}
  async getJobs() {}

  async getQueue() {
    return await this.myWorker();
  }
}
