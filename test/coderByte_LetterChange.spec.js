describe("coderByte_LetterChange", function () {

  it("Increments letters", function () {
    assert.equal(LetterChange("a"), "b");
    assert.equal(LetterChange("A"), "B");
    assert.equal(LetterChange("Z"), "A");
  });

  it("Capatilises vowels", function () {
    assert.equal(LetterChange("z"), "A");
    assert.equal(LetterChange("d"), "E");
    assert.equal(LetterChange("h"), "I");
    assert.equal(LetterChange("n"), "O");
    assert.equal(LetterChange("t"), "U");
    assert.equal(LetterChange("Z"), "A");
    assert.equal(LetterChange("D"), "E");
    assert.equal(LetterChange("H"), "I");
    assert.equal(LetterChange("N"), "O");
    assert.equal(LetterChange("T"), "U");
  });

  it("Ignores numbers and symbols", function () {
    assert.equal(LetterChange("1"), "1");
    assert.equal(LetterChange(12), 12);
    assert.equal(LetterChange("!"), "!");
    assert.equal(LetterChange("^"), "^");
  });

  it("Converts strings", function () {
    assert.equal(LetterChange("ABCDE"), "BCDEF");
    assert.equal(LetterChange("abcde"), "bcdEf");
    assert.equal(LetterChange("a =* 2"), "b =* 2");
    assert.equal(LetterChange("t1!z Ee"), "U1!A Ff");
  });

});