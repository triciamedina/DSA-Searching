// 1. How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 
// and using the recursive binary search algorithm, 
// identify the sequence of numbers that each recursive 
// call will search to try and find 8.

// First call => [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
//      start = 0
//      end = 10
//      index = 5 
//      item = 12
// Second call => [3, 5, 6, 8, 11]
//      start = 0
//      end = 4
//      index = 2
//      item = 6
// Third call => [8, 11]
//      start = 3
//      end = 4
//      index = 3
//      item = 8

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 
// and using the recursive binary search algorithm, 
// identify the sequence of numbers that each recursive 
// call will search to try and find 16.

// First call => [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
//      start = 0
//      end = 10
//      index = 5 
//      item = 12
// Second call => [14, 15, 17, 18]
//      start = 6
//      end = 10
//      index = 8
//      item = 17
// Third call => [14, 15, 17, 18]
//      start = 6
//      end = 9
//      index = 7
//      item = 15
// Fourth call => [17, 18]
//      start = 8
//      end = 9
//      index = 8
//      item = 17
// Fifth call => [17]
//      start = 8
//      end = 7
//      return -1 not found 

function binarySearch(array, value, start, end) {
    // start = 0
    var start = start === undefined ? 0 : start;
    // end = 10
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    // index = 2
    const index = Math.floor((start + end) / 2);
    // item == 6
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};