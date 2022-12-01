
import fastify from "fastify";
import { dbConnector } from "./plugins/postgres";

import {tasksRoutes} from "./plugins/tasksRoutes";
import { usersRoutes } from "./plugins/usersRoutes";



const app = fastify({logger:true});

app.register(dbConnector);
app.register(usersRoutes,{prefix:'/user'});
app.register(tasksRoutes, { prefix:'/tasks'});

 const  start = async () => {
 
   app.listen({ port: 3000 }, (err: any, address: any) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
      console.log(`Server listening at ${address}`)
    });

  };
start();



