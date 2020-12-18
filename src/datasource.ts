import { MongooseFilterQuery } from "mongoose";
import AuthorModel, { Author } from "./model";

export async function create(input: Author) {
  const author = await AuthorModel.create(input);
  return { author };
}

export async function destroy(id: string) {
  await AuthorModel.findByIdAndDelete(id);
  return { author: id };
}

export async function update({ id, ...input }: Author) {
  const author = await AuthorModel.findByIdAndUpdate(id, input, { new: true });
  return { author };
}

export async function load({ id }: Pick<Author, "id">) {
  return AuthorModel.findById(id);
}

export async function loader(query: MongooseFilterQuery<Author>) {
  return AuthorModel.find(query);
}
