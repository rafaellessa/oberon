import { JobAttributes } from "../core/entity/Queue";
import AddJob from "../core/usecase/AddJob";
import RemoveAllJobs from "../core/usecase/RemoveAllJobs";
import { QueueRepositoryMemory } from "../infra/repository/QueueRepositoryMemory";

test("Should be remove all jobs", async () => {
  const queueRepositoryMemory = new QueueRepositoryMemory();
  const removeAllJobs = new RemoveAllJobs(queueRepositoryMemory);
  const addJob = new AddJob(queueRepositoryMemory);
  let jobs: JobAttributes[];

  for (let i = 0; i <= 1; i++) {
    const job = {
      id: i,
      payload: {
        filename: `file${i}.txt`,
        body: `exemplo de conteudo do arquivo ${i}`,
      },
    };
    jobs = await addJob.execute(job);
  }

  jobs = await removeAllJobs.execute();

  expect(jobs).toHaveLength(0);
});
