import { Document, RootFilterQuery, Types, UpdateQuery } from "mongoose";

export default interface iTurbinate<T> {
  create(data: T): Promise<T>;
  update(filter: RootFilterQuery<T>, data: UpdateQuery<T>): Promise<T | null>;
  replace(_id: Types.ObjectId, data: T): Promise<T | null>;
  read(filters: RootFilterQuery<T>): Promise<Document<T> | null>;
  search(filters: RootFilterQuery<T>): Promise<T[]>;
  remove(_id: Types.ObjectId): Promise<T | null>;
}
