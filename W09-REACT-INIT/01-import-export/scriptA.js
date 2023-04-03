// NAMED EXPORT
export function A() {
    console.log("🚀 ~ A here")
}
export default function D() {
    console.log("🚀 ~ D here")
}

export const address = {
    city: "Berlin",
    street: "abc"
}

const numA = 4
const numB = 5
const numC = 6
const numD = 7
const numE = 8

export {numA, numB, numC, numD, numE}