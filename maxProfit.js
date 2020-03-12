// [128, 97, 121, 123, 98, 97, 105]
// -31
// 24
// 2
// -25
// -1
// 8

const shares = [128, 97, 121, 123, 98, 97, 105]

const maxProfit = function(arr) {
    let max = null;
    for (let i = 0; i < arr.length - 1; i++) {
        let profit = arr[i + 1] - arr[i];
        
        if (!max) {
            max = profit;
        }

        if (max < profit) {
            max = profit;
        }
    }
    return max;
}

console.log(maxProfit(shares))