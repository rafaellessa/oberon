export interface JobAttributes {
  id: number;
  payload: {
    filename: string;
    body: string;
  };
}

export default class Queue {
  private _myWorker: (arg?: any) => Promise<JobAttributes[]>;

  constructor(myWorker: (arg?: any) => Promise<JobAttributes[]>) {
    this._myWorker = myWorker;
  }

  async addJob(job: JobAttributes) {
    return await this._myWorker(job);
  }

  async getJobs() {
    return await this._myWorker();
  }

  async removeJob(id: number) {
    return await this._myWorker(id);
  }

  async removeAllJobs() {
    return await this._myWorker();
  }
}
