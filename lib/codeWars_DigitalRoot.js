function digital_root(n) {
    // Convert to array of integers
    let digits = String(n).split("").map(Number);
    // Sum array
    let sumOfDigits = digits.reduce((x, y) => x + y);

    // Repeat until single digit
    if (sumOfDigits > 9){
        return digital_root(sumOfDigits);
    }
    else {
        return sumOfDigits;
    }
  }