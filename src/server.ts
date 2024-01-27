import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AppointmentResolver } from "./resolvers/appointment.resolver";
import path from "node:path";
import CustomerResolver from "./resolvers/customer.resolver";

async function bootstrapp() {
  const schema = await buildSchema({
    validate: { forbidUnknownValues: false },
    resolvers: [
      AppointmentResolver,
      CustomerResolver
    ],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({schema});

  const { url } = await server.listen();

  console.log(`Server running on ${url}`);
}

bootstrapp()
