import { JobAttributes } from "../core/entity/Queue";
import AddJob from "../core/usecase/AddJob";
import { QueueRepositoryMemory } from "../infra/repository/QueueRepositoryMemory";

test("Should be add a job", async () => {
  const queueRepositoryMemory = new QueueRepositoryMemory();
  const addJob = new AddJob(queueRepositoryMemory);
  let jobs: JobAttributes[] = [];
  for (let i = 0; i <= 2; i++) {
    const job = {
      id: i,
      payload: {
        filename: `file${i}.txt`,
        body: `exemplo de conteudo do arquivo ${i}`,
      },
    };
    jobs = await addJob.execute(job);
  }
  expect(jobs).toHaveLength(3);
});
