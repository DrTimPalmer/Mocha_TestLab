describe("codeWars_DigitalRoot", function () {

    it("Returns the sum of all the digits", function () {
      assert.equal(DigitalRoot(1), 1);
      assert.equal(DigitalRoot(12), 3);
      assert.equal(DigitalRoot(123), 6);
    });
  
    it("Returns the recursive sum of all the digits if answer > 9", function () {
        assert.equal(DigitalRoot(91), 1);
        assert.equal(DigitalRoot(12345), 6);
        assert.equal(DigitalRoot(54321), 6);
      });
    
  });