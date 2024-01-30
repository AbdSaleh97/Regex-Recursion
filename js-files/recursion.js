
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
    for (let i = 0; i < n; i++) {
        res *= x;
    }
    return res;
}
// console.log(pow(10,2));

function fibonacci(n) {
    let base = 1;
    let base2 = 1;
    let arr = [];
    arr.push(1);
    arr.push(1);
    for (let i = 2; i < n; i++) {
        arr.push(base + base2);
        base = base2;
        base2 = arr[i];
    }
    return arr[n - 1];
}

// console.log(fibonacci(10));


function permutations(n, k) {
    //"It should return a list of possible combinations"

}
