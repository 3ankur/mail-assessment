import "reflect-metadata";
import express from 'express';
import mongoose from "mongoose";
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';
import { UserResolver } from "./resolvers/user";
// import schema from './schema';

const main = async () =>{


    const app = express();

    const mongoURI = ' mongodb://127.0.0.1:27017/jobportal';

  mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


const server = new ApolloServer({
  schema: await buildSchema({
      resolvers:[HelloResolver,UserResolver],
      validate:false
  }),
  validationRules: [depthLimit(7)],
    context: ({ req, res }) => ({ req, res }),
});
app.use('*', cors());
app.use(compression());
server.applyMiddleware({ app, path: '/graphql' });
const httpServer = createServer(app);
httpServer.listen(
  { port: 7000 },
  (): void => console.log(`\n🚀      GraphQL is now running on http://localhost:3000/graphql`));
}

try{

    main()
    
}catch(e){
console.log(e)
}
