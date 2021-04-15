import { JobAttributes } from "../core/entity/Queue";
import AddJob from "../core/usecase/AddJob";
import RemoveJob from "../core/usecase/RemoveJob";
import { QueueRepositoryMemory } from "../infra/repository/QueueRepositoryMemory";

test("Should be remove a job", async () => {
  const queueRepositoryMemory = new QueueRepositoryMemory();
  const removeJob = new RemoveJob(queueRepositoryMemory);
  const addJob = new AddJob(queueRepositoryMemory);
  let jobs: JobAttributes[] = [];
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
