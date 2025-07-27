import { AnyKeys, Document, Model, RootFilterQuery, Types, UpdateQuery } from "mongoose";

export interface iTurbinate<T> {
  create(data: T): Promise<T>;
  update(filter: RootFilterQuery<T>, data: UpdateQuery<T>): Promise<T | null>;
  replace(_id: Types.ObjectId, data: T): Promise<T | null>;
  read(filters: RootFilterQuery<T>): Promise<Document<T> | null>;
  search(filters: RootFilterQuery<T>): Promise<T[]>;
  remove(_id: Types.ObjectId): Promise<T | null>;
}

export default class Turbinate<T> implements iTurbinate<T> {
  constructor(protected model: Model<T>, protected parentModel?: Model<T>) {}

  create(data: T): Promise<T> {
    return this.model.create(data);
  }

  update(filter: RootFilterQuery<T>, data: UpdateQuery<T>, unset?: AnyKeys<T>): Promise<T | null> {
    data.$unset = unset || {};
    return this.model.findOneAndUpdate(filter, data, {
      overwriteDiscriminatorKey: true,
      new: true,
    });
  }

  replace(_id: Types.ObjectId, data: T): Promise<T | null> {
    return this.model.findOneAndReplace(_id, data, { new: true });
  }

  read(filters: RootFilterQuery<T>): Promise<Document<T> | null> {
    if (this.parentModel) return this.parentModel.findOne(filters);
    return this.model.findOne(filters);
  }

  search(filters: RootFilterQuery<T>): Promise<T[]> {
    return this.parentModel ? this.parentModel.find(filters) : this.model.find(filters);
  }

  remove(_id: Types.ObjectId): Promise<T | null> {
    return this.model.findOneAndDelete({ _id });
  }
}
