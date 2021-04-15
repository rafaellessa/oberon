import AddJob from "../core/usecase/AddJob";
import GetJobs from "../core/usecase/GetJobs";
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

test.only("Should be get jobs", async () => {
  const queueRepositoryMemory = new QueueRepositoryMemory();
  const addJob = new AddJob(queueRepositoryMemory);

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

  const queueRepository = new GetJobs(queueRepositoryMemory);
  const parsedJobs = await queueRepository.execute();
  console.log("JObs na fila: ", parsedJobs);
}, 30000);
