"use strict";
const o =Object.create(null, {
  'x': {
    value: 1,
    configurable: true
  }
});
delete o.x;