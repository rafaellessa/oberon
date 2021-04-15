"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AddJob_1 = __importDefault(require("../core/usecase/AddJob"));
const RemoveJob_1 = __importDefault(require("../core/usecase/RemoveJob"));
const QueueRepositoryMemory_1 = require("../infra/repository/QueueRepositoryMemory");
test("Should be remove a job", async () => {
    const queueRepositoryMemory = new QueueRepositoryMemory_1.QueueRepositoryMemory();
    const removeJob = new RemoveJob_1.default(queueRepositoryMemory);
    const addJob = new AddJob_1.default(queueRepositoryMemory);
    let jobs = [];
    for (let i = 0; i <= 5; i++) {
        const job = {
            id: i,
            payload: {
                filename: `file${i}.txt`,
                body: `exemplo de conteudo do arquivo ${i}`,
            },
        };
        await addJob.execute(job);
    }
    jobs = await removeJob.execute(2);
    jobs = await removeJob.execute(3);
    console.log("Jobs filtrados: ", jobs);
    expect(jobs).toHaveLength(4);
}, 500000);
