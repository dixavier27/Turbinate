// src/Turbinate.ts
var Turbinate = class {
  constructor(model, parentModel) {
    this.model = model;
    this.parentModel = parentModel;
  }
  create(data) {
    return this.model.create(data);
  }
  update(filter, data, unset) {
    data.$unset = unset || {};
    return this.model.findOneAndUpdate(filter, data, {
      overwriteDiscriminatorKey: true,
      new: true
    });
  }
  replace(_id, data) {
    return this.model.findOneAndReplace(_id, data, { new: true });
  }
  read(filters) {
    if (this.parentModel) return this.parentModel.findOne(filters);
    return this.model.findOne(filters);
  }
  search(filters) {
    return this.parentModel ? this.parentModel.find(filters) : this.model.find(filters);
  }
  remove(_id) {
    return this.model.findOneAndDelete({ _id });
  }
};
export {
  Turbinate as default
};
