import { RootFilterQuery, UpdateQuery, Types, Document, Model, AnyKeys } from 'mongoose';

interface iTurbinate<T> {
    create(data: T): Promise<T>;
    update(filter: RootFilterQuery<T>, data: UpdateQuery<T>): Promise<T | null>;
    replace(_id: Types.ObjectId, data: T): Promise<T | null>;
    read(filters: RootFilterQuery<T>): Promise<Document<T> | null>;
    search(filters: RootFilterQuery<T>): Promise<T[]>;
    remove(_id: Types.ObjectId): Promise<T | null>;
}
declare class Turbinate<T> implements iTurbinate<T> {
    protected model: Model<T>;
    protected parentModel?: Model<T> | undefined;
    constructor(model: Model<T>, parentModel?: Model<T> | undefined);
    create(data: T): Promise<T>;
    update(filter: RootFilterQuery<T>, data: UpdateQuery<T>, unset?: AnyKeys<T>): Promise<T | null>;
    replace(_id: Types.ObjectId, data: T): Promise<T | null>;
    read(filters: RootFilterQuery<T>): Promise<Document<T> | null>;
    search(filters: RootFilterQuery<T>): Promise<T[]>;
    remove(_id: Types.ObjectId): Promise<T | null>;
}

export { Turbinate as default, type iTurbinate };
