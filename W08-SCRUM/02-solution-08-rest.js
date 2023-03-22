/**
 * 08
 * Write a function that removes duplicates from an array using the REST parameter syntax and the Set data structure
 * 
 * removeDuplicates(1, 2, 3, 1, 2, 3, 4, 5, 6); // Output: [1, 2, 3, 4, 5, 6]
 * 
 * TIP: explore what is a SET is Javascript
 */

function removeDuplicates(...items) {

    const newASet = new Set([1, 2, 3, 4, 3, 2, 3, 4, 5])
    console.log("🚀 ~ newASet:", ...newASet)

    
}

removeDuplicates(1, 2, 3, 1, 2, 3, 4, 5, 6);