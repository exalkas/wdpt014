const cache = {};

function memoizedAdd(a, b) {
  console.log("🚀 ~ a, b:", a, b);

  //   cache.'2, 3'
  if (cache[`${a}, ${b}`]) {
    console.log("🚀 ~ found in cache:");
    return cache[`${a}, ${b}`];
  } else {
    const result = a + b;

    cache[`${a}-----lasdkfjlkdj ${b}`] = result;
    console.log("🚀 ~ result added to cache:", result);
    console.log("🚀 ~ cache:", cache);
    return result;
  }
}

console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(2, 2));
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(2, 2));
