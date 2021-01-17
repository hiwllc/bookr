import { Schema, Model, Document, model } from "mongoose";

const AuthorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    id: true,
    timestamps: true,
  }
);

export interface Author {
  id?: string;
  name: string;
}

export interface AuthorDocument extends Author, Document {}

export type AuthorModel = Model<AuthorDocument>;

export default model<AuthorDocument, AuthorModel>("Author", AuthorSchema);
