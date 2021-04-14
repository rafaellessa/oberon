import { JobAttributes } from "../core/entity/Queue";
import AddJob from "../core/usecase/AddJob";
import GetQueue from "../core/usecase/GetQueue";
import QueueRepositoryMemory from "../infra/repository/QueueRepositoryMemory";

test("Should be add jobs in queue", async () => {
  const queueRepositoryMemory = new QueueRepositoryMemory();
  const addJob = new AddJob(queueRepositoryMemory);
  const job: JobAttributes = {
    id: "1",
    payload: {
      body: "test a insert job",
      filename: "test.txt",
    },
  };
  await addJob.execute(job);
  const getQueue = new GetQueue(queueRepositoryMemory);
  const queue = await getQueue.execute();

  console.log("queue esperada: ", queue);

  expect(queue).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: "1",
      }),
    ])
  );
});
