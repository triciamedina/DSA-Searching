// [128, 97, 121, 123, 98, 97, 105]

const shares = [128, 97, 121, 123, 98, 97, 105]

const maxProfit = function(arr) {
    let minElement = arr[0];
    let maxDiff = arr[1] - arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        if ((arr[i] - minElement) > maxDiff) {
            maxDiff = arr[i] - minElement;
        }

        if (arr[i] < minElement) {
            minElement = arr[i]
        }
    }
    return maxDiff;
}

console.log(maxProfit(shares))