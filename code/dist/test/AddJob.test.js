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
    const job = {
        id: 1,
        payload: {
            filename: "file1.txt",
            body: "exemplo de conteudo 1",
        },
    };
    const parsedJob = await addJob.execute(job);
    console.log("Parsed Job: ", parsedJob);
    expect(parsedJob).toEqual(expect.arrayContaining([expect.objectContaining(job)]));
});
