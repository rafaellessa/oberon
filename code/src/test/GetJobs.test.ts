import AddJob from "../core/usecase/AddJob";
import GetJobs from "../core/usecase/GetJobs";
import { QueueRepositoryMemory } from "../infra/repository/QueueRepositoryMemory";

test("Should be get a jobs", async () => {
  const queueRepositoryMemory = new QueueRepositoryMemory();
  const addJob = new AddJob(queueRepositoryMemory);
  const getJobs = new GetJobs(queueRepositoryMemory);

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
