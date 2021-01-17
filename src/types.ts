import { IResolvers } from "apollo-server";
import { DataSources } from "./datasources";
export type ID = string | undefined;

export type Context = {
  dataSources: DataSources;
  [field: string]: any;
};

export interface Resolvers<Source> extends IResolvers<Source, Context> {}
