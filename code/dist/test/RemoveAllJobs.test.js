"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AddJob_1 = __importDefault(require("../core/usecase/AddJob"));
const RemoveAllJobs_1 = __importDefault(require("../core/usecase/RemoveAllJobs"));
const QueueRepositoryMemory_1 = require("../infra/repository/QueueRepositoryMemory");
test("Should be remove all jobs", async () => {
    const queueRepositoryMemory = new QueueRepositoryMemory_1.QueueRepositoryMemory();
    const removeAllJobs = new RemoveAllJobs_1.default(queueRepositoryMemory);
    const addJob = new AddJob_1.default(queueRepositoryMemory);
    let jobs;
    for (let i = 0; i <= 1; i++) {
        const job = {
            id: i,
            payload: {
                filename: `file${i}.txt`,
                body: `exemplo de conteudo do arquivo ${i}`,
            },
        };
        jobs = await addJob.execute(job);
    }
    jobs = await removeAllJobs.execute();
    expect(jobs).toHaveLength(0);
});
