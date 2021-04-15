export interface JobAttributes {
  id: number;
  payload: {
    filename: string;
    body: string;
  };
}

export default class Queue {
  private _myWorker: (job?: JobAttributes) => Promise<JobAttributes[]>;

  constructor(myWorker: (job?: JobAttributes) => Promise<JobAttributes[]>) {
    this._myWorker = myWorker;
  }

  async addJob(job: JobAttributes) {
    return await this._myWorker(job);
  }

  async getJobs() {
    return await this._myWorker;
  }
}
