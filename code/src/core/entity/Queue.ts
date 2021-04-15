export interface JobAttributes {
  id: number;
  payload: {
    filename: string;
    body: string;
  };
}

export default class Queue {
  queue: JobAttributes[] = [];
  private _myWork: (_job?: JobAttributes) => Promise<Queue>;

  constructor(_myWork: (_job?: JobAttributes) => Promise<Queue>) {
    this._myWork = _myWork;
  }

  async addJob(job?: JobAttributes): Promise<JobAttributes[]> {
    await this._myWork(job);
    return await this.getQueue();
  }

  async getJobs(): Promise<JobAttributes[]> {
    await this._myWork();
    return await this.getQueue();
  }

  async getQueue() {
    return this.queue;
  }
}
