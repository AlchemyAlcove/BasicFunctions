"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (object) {
  return Object.keys(object).reduce(function (classes, key) {
    return (object[key] ? classes + " " + key : classes).trim();
  }, "");
};