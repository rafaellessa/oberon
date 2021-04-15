import AddJob from "../core/usecase/AddJob";
import { QueueRepositoryMemory } from "../infra/repository/QueueRepositoryMemory";

test("Should be add a job", async () => {
  const queueRepositoryMemory = new QueueRepositoryMemory();
  const addJob = new AddJob(queueRepositoryMemory);
  const job = {
    id: 1,
    payload: {
      filename: "file1.txt",
      body: "exemplo de conteudo 1",
    },
  };
  const parsedJob = await addJob.execute(job);
  expect(parsedJob).toEqual(
    expect.arrayContaining([expect.objectContaining(job)])
  );
});
