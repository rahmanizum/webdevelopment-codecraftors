function findLargest(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > c) {
        return b;
    } else {
        return c;
    }
}


console.log(findLargest(5, 10, 7)); 
