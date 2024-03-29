// Given a non-negative integer, 3 for example, return a string with a murmur: 
// "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.

const countSheep = (num) => {
    let sheepNum = []
    for (let i = 1; i <= num; i++) {
        sheepNum = [...sheepNum, `${i} sheep...`]
    }
    return sheepNum.join('')
}

console.log(countSheep(0));
