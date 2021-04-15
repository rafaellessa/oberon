"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AddJob_1 = __importDefault(require("../core/usecase/AddJob"));
const QueueRepositoryMemory_1 = require("../infra/repository/QueueRepositoryMemory");
test("Should be add a job", async () => {
    const queueRepositoryMemory = new QueueRepositoryMemory_1.QueueRepositoryMemory();
    const addJob = new AddJob_1.default(queueRepositoryMemory);
    for (let i = 0; i <= 2; i++) {
        const job = {
            id: i,
            payload: {
                filename: `file${i}.txt`,
                body: `exemplo de conteudo do arquivo ${i}`,
            },
        };
        const jobs = await addJob.execute(job);
        console.log("Jobsasasasasasasas: ", jobs);
    }
}, 500000);
