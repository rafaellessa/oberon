import { QueueRepositoryMemory } from "../src/infra/repository/QueueRepositoryMemory";
import AddJob from "../src/core/usecase/AddJob";
import GetJobs from "../src/core/usecase/GetJobs";
import RemoveJob from "../src/core/usecase/RemoveJob";
import RemoveAllJobs from "../src/core/usecase/RemoveAllJobs";

const queueRepository = new QueueRepositoryMemory();
const addJobUseCase = new AddJob(queueRepository);
const getJobsUseCase = new GetJobs(queueRepository);
const removeJobUseCase = new RemoveJob(queueRepository);
const removeAllJobsUseCase = new RemoveAllJobs(queueRepository);

const addJob = async () => {
  for (let i = 0; i <= 4; i++) {
    const job = {
      id: i,
      payload: {
        filename: `file${i}.txt`,
        body: `exemplo de conteudo do arquivo ${i}`,
      },
    };

    await addJobUseCase.execute(job);
  }
};

const getJobs = async () => {
  await getJobsUseCase.execute();
};

const removeJob = async () => {
  await removeJobUseCase.execute(3);
};

const removeAllJobs = async () => {
  await removeAllJobsUseCase.execute();
};

const managerQueue = async () => {
  await addJob();
  await getJobs();
  await removeJob();
  await removeAllJobs();
};

managerQueue();
