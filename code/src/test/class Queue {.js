class Queue {
  myWorker;
  queue = [];
  constructor(myWorker){
    this.myWorker = myWorker;
  }

  async addJob(job){
    await this.myWorker(job);
  }

  async getQueue(){
    await this.myWorker();
  }
}

class QueueRepository {

  async teste(obj){
    setTimeout(() => {
      console.log("Agr nao vai: ", obj)
    });
  }

  async addJob(job){

    const queue = new Queue(async (_job)=> {
      console.log("Aqui o job ta como? ". _job)
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Vai inserir um job na fila")
          console.log(new Date(), _job);
          resolve(queue.queue.push(_job));
          console.log("Update: ", queue)
        }, 2000)
      })
    });

    await queue.addJob(job);
  }

  getQueue(){
    const queue = new Queue(() => {
      return new Promise((resolve) => {
        resolve(queue)
      })
    })

    queue.getQueue();
  }
}

async function testar (){

  const queueRepository = new QueueRepository();
  await queueRepository.addJob({
    id: "1",
    payload: {
      body: "test a insert job",
      filename: "test.txt",
    },
  });

  const queueSelected = await queueRepository.getQueue();
  console.log("Queue: ", queueSelected)
}

testar();
