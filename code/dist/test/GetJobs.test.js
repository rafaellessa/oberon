"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AddJob_1 = __importDefault(require("../core/usecase/AddJob"));
const GetJobs_1 = __importDefault(require("../core/usecase/GetJobs"));
const QueueRepositoryMemory_1 = require("../infra/repository/QueueRepositoryMemory");
test("Should be get a jobs", async () => {
    const queueRepositoryMemory = new QueueRepositoryMemory_1.QueueRepositoryMemory();
    const addJob = new AddJob_1.default(queueRepositoryMemory);
    const getJobs = new GetJobs_1.default(queueRepositoryMemory);
    for (let i = 0; i <= 2; i++) {
        const job = {
            id: i,
            payload: {
                filename: `file${i}.txt`,
                body: `exemplo de conteudo do arquivo ${i}`,
            },
        };
        await addJob.execute(job);
    }
    const jobs = await getJobs.execute();
    expect(jobs).toHaveLength(3);
});
