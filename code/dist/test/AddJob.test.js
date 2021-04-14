"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AddJob_1 = __importDefault(require("../core/usecase/AddJob"));
const GetQueue_1 = __importDefault(require("../core/usecase/GetQueue"));
const QueueRepositoryMemory_1 = __importDefault(require("../infra/repository/QueueRepositoryMemory"));
test("Should be add jobs in queue", async () => {
    const queueRepositoryMemory = new QueueRepositoryMemory_1.default();
    const addJob = new AddJob_1.default(queueRepositoryMemory);
    const job = {
        id: "1",
        payload: {
            body: "test a insert job",
            filename: "test.txt",
        },
    };
    await addJob.execute(job);
    const getQueue = new GetQueue_1.default(queueRepositoryMemory);
    const queue = await getQueue.execute();
    console.log("queue esperada: ", queue);
    expect(queue).toEqual(expect.arrayContaining([
        expect.objectContaining({
            id: "1",
        }),
    ]));
});
