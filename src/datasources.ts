import { DataSources as GraphQLDatasources } from "apollo-server-core/dist/graphqlOptions";
import { DataSource as AuthorsDataSource } from "./app/authors";

export interface DataSources {
  Authors: typeof AuthorsDataSource;
}

export function dataSources() {
  return {
    Authors: AuthorsDataSource,
  } as GraphQLDatasources<DataSources>;
}
