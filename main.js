let sum = 0;
let solved = false;
let n = Infinity;

for (let i = 0; i < n; i++) { //increments real numbers

        sum += i; //incriments triangle number

        let factorsArr = [];
        for (let j = sum - 1; j > 0; j--) {
            if (sum % j === 0) { //finds factors
                factorsArr.push(j);
            }
        }
        if (factorsArr.length > 500) { //finds triangle numbers with more than 500 factors
            console.log(sum)
            n = i;
        }

}
