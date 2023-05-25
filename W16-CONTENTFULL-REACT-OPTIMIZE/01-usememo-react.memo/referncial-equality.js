const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log("🚀 ~ arr1===arr2", arr1 == arr2);

const arr3 = arr1;
console.log("🚀 ~ arr3===arr1", arr3 == arr1);

function A() {
  console.log("🚀 ~ arr1===arr2", arr1 == arr2);
}
function B() {
  console.log("🚀 ~ arr1===arr2", arr1 == arr2);
}
console.log("🚀 ~ A===B", A == B);
