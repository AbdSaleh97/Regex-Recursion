
function division(number, divideBy) {
    // i tried to include the negatvie and decimlaes cases but i don't want to shorten my life span  
    // especially after checking these methods: https://stackoverflow.com/questions/5386377/division-without-using
    if (divideBy == 0) {
        return "can't divide by zero";
    }
    if (number == divideBy) {
        return 1;
    }
    if (number < divideBy) {
        return 0;
    }
    let quot = 1.0 + division(number - divideBy, divideBy);
    return quot;
}

// console.log(division(12,2));

function pow(x, n) {
    let res = 1;
    if (n < 1) {
        return res;
    }
    res *= x * pow(x, n - 1);
    return res;
}
// console.log(pow(2, 5));

function fibonacci(n) {
    let base = 0;
    let base2 = 1;
    let arr = [];
    arr.push(base);
    arr.push(base2);

    // i used another function insied this functoin to avoid loosing the data in the above variables with each new call
    function calculate(n) {
        if (n <= 0) {
            return arr[n - 1];
        }
        arr.push(base + base2);
        base = base2;
        base2 = arr[arr.length - 1];
        // console.log(base2);
        calculate(n - 1);
        return arr[n - 1];
    }
    return calculate(n + 1);
}

// console.log(fibonacci(10));


//source code:
//https://stackoverflow.com/questions/9960908/permutations-in-javascript?page=1&tab=scoredesc#tab-top
//actually i didn't fully understood what the requierments are, like what n supposed to be? 
//so i figured that i have to generate the premutation array from the array that i pass in the function then 
//return the element on the k index.
// ah and this solution works with characters as well which is pretty cool.
const permutator = (inputArr, k) => {
    let result = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }
    permute(inputArr)
    return [result[k - 1],result];
}
console.log(permutator(['c', 'a', 't'], 3));
