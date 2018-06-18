describe("codeWars_DigitalRoot", function () {

    it("Returns the sum of all the digits", function () {
      assert.equal(digital_root(1), 1);
      assert.equal(digital_root(12), 3);
      assert.equal(digital_root(123), 6);
    });
  
    it("Returns the recursive sum of all the digits if answer > 9", function () {
        assert.equal(digital_root(91), 1);
        assert.equal(digital_root(12345), 6);
        assert.equal(digital_root(54321), 6);
      });
    
  });