

 export async function dbConnector( app:any, opts:any){

  app.register(import('@fastify/postgres'), {
      connectionString: `postgres://POSTGRES_USER:POSTGRES_PASSWORD@POSTGRES_SERVICE:POSTGRES_PORT/POSTGRES_DB`,
    });
 
 
}



