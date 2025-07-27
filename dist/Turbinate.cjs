"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/Turbinate.ts
var Turbinate_exports = {};
__export(Turbinate_exports, {
  default: () => Turbinate
});
module.exports = __toCommonJS(Turbinate_exports);
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
