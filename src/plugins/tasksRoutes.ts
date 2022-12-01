import fastify from "fastify";



  export async function tasksRoutes(app: any,opts: any,done:any){
  app.get('/',async (request:any,reply:any) => {
    return {heloo: "world 222222"};

  });
  app.post('/',async (request:any,reply:any) => {
    const data = request.body;
    return {name: data};
    
  });
  app.put('/task/:id',async (request:any,reply:any)=> {
    return {update: "updatetask"};
    
  });
  app.delete('/task/:id',async (request:any,reply:any)=> {
    return{post: "delete task"};
    
  });
  done();
}
