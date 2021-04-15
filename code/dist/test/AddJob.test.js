"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AddJob_1 = __importDefault(require("../core/usecase/AddJob"));
const GetJobs_1 = __importDefault(require("../core/usecase/GetJobs"));
const QueueRepositoryMemory_1 = require("../infra/repository/QueueRepositoryMemory");
test("Should be add a job", async () => {
    const queueRepositoryMemory = new QueueRepositoryMemory_1.QueueRepositoryMemory();
    const addJob = new AddJob_1.default(queueRepositoryMemory);
    const job = {
        id: 1,
        payload: {
            filename: "file1.txt",
            body: "exemplo de conteudo 1",
        },
    };
    const parsedJob = await addJob.execute(job);
    expect(parsedJob).toEqual(expect.arrayContaining([expect.objectContaining(job)]));
});
test.only("Should be get jobs", async () => {
    const queueRepositoryMemory = new QueueRepositoryMemory_1.QueueRepositoryMemory();
    const addJob = new AddJob_1.default(queueRepositoryMemory);
    for (let i = 0; i <= 1; i++) {
        const job = {
            id: i,
            payload: {
                filename: `file ${i}.txt`,
                body: `exemplo de conteudo do arquivo ${i}`,
            },
        };
        const queue = await addJob.execute(job);
        console.log("Fila ficou como: ", queue);
    }
    const queueRepository = new GetJobs_1.default(queueRepositoryMemory);
    const parsedJobs = await queueRepository.execute();
    console.log("JObs na fila: ", parsedJobs);
}, 30000);
