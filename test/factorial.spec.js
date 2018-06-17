describe("factorial", function() {

    it("returns the factorial of n", function() {
      assert.equal(factorial(1), 1);
      assert.equal(factorial(2), 2);
      assert.equal(factorial(3), 2 * 3);
      assert.equal(factorial(4), 2 * 3 * 4);
      assert.equal(factorial(5), 2 * 3 * 4 * 5);
    });
  
    it("returns 1 if n is 0", function() {
      assert.equal(factorial(0),1);
    });

    it("returns NaN if n is negative", function() {
      assert.isNaN(factorial(-1));
    });

    it("returns NaN if n is non-integer", function() {
      assert.isNaN(factorial(0.1));
      assert.isNaN(factorial(0.9));
      assert.isNaN(factorial(1.1));
      assert.isNaN(factorial(1.9));
    });

  });