import { AnyKeys, Model, RootFilterQuery, Types } from "mongoose";

export default class Turbinate<T> {
  constructor(protected model: Model<T>) {}

  create(data: T): Promise<T> {
    return this.model.create(data);
  }

  read(filters: RootFilterQuery<T>, fields?: AnyKeys<T>): Promise<T | null> {
    return this.model.findOne(filters).select(fields || []);
  }

  update(data: AnyKeys<T>, _id: Types.ObjectId, fields?: AnyKeys<T>, unset?: AnyKeys<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(_id, { $set: data, $unset: unset || {} }, { new: true }).select(fields || []);
  }

  replace(data: T, _id: Types.ObjectId, fields?: AnyKeys<T>): Promise<T | null> {
    return this.model.findOneAndReplace(_id, data, { new: true }).select(fields || []);
  }

  search(filters: RootFilterQuery<T>, fields?: AnyKeys<T>): Promise<T[]> {
    return this.model.find(filters).select(fields || []);
  }

  remove(_id: Types.ObjectId): Promise<T | null> {
    return this.model.findOneAndDelete({ _id });
  }
}
