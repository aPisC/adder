"use strict";

/**
 * Implement the dict() function
 *
 * Author: Ronen Ness.
 * Since: 2016.
 */

// include jsface for classes
var jsface = require("./../../dependencies/jsface"),
  Class = jsface.Class,
  extend = jsface.extend;

// include errors
var Errors = require("./../../errors");

// require the core stuff
var Core = require("./../../core");

// require misc utils
var Utils = require("./../../utils");

// export the function
module.exports = Core.BuiltinFunc.create(
  function () {
    var startobj = {};
    var arg = Utils.toArray(arguments);
    for (var i = 1; i < arg.length; i += 2) {
      startobj[arg[i - 1]] = arg[i];
    }
    return new Core.Dict(this._context, startobj);
  },
  null,
  null,
  false
);
