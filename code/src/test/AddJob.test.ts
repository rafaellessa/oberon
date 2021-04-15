import AddJob from "../core/usecase/AddJob";
import { QueueRepositoryMemory } from "../infra/repository/QueueRepositoryMemory";

test("Should be add a job", async () => {
  const queueRepositoryMemory = new QueueRepositoryMemory();
  const addJob = new AddJob(queueRepositoryMemory);

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
