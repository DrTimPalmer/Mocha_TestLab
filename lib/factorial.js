function factorial(n) {
    // Validation
    if (isNaN(n)) return NaN;

    if (n < 0) return NaN;

    if (n % 1 != 0) return NaN;

    // Execution
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i;
    }
    return res;
}