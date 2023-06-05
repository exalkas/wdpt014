// Common Modules JS
// export default in ES6 Modules

// This is like export default
module.exports = { address: "123", age: 22 };

// Only one default export
module.exports = { address: "Berlin", age: 22 };

// // Named export
module.exports.namedFunction = function (a, b) {
  return a + b;
};

module.exports.anyname = 3;
