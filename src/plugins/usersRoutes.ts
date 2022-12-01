import { allUsers } from "src/schemas/userAll";


export const opts = {
  schema: {
    querystring:{},
    body: {
      type: 'object',
        properties: {
        name: { type: 'string'},
        email: { type: 'string'},
        password: { type: 'string'}
      },
      response:{
        200:{
          type: 'object',
          properties:{
            name: { type:'string'}
          }
        }
      }
    }
  }

}

 export async function usersRoutes(app: any,opts: any,done:any){
  app.get('/' ,function (req:any, reply:any) {
    app.pg.query(
      'SELECT * FROM users',
      function onResult (err:any, result:any) {
        reply.send(err || result)
      }
    )
  })
  
  app.post('/',opts,async (request:any,reply:any) => {
    const data = request.body;
    return {name: data};
    
  });
  app.put('/:id',async (request:any,reply:any)=> {
    return {update: "updateUser"};
    
  });
  app.post('/avatar',async (request:any,reply:any)=> {
    return{post: "createAvatar"};
    
  });
  done();
}
