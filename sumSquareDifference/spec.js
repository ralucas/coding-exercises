describe("LetterCount", function() {
  it("should return -1", function() {
    expect(LetterCount.letterCountbyWord("How are you")).toEqual(-1);
  });
});

describe("LetterCount", function() {
  it("should return 'here'", function() {
    expect(LetterCount.letterCountbyWord("Here I am")).toEqual('Here');
  });
});

describe("LetterCount", function() {
  it("should return 6", function() {
    expect(LetterCount.letterCounter("falafel")).toEqual(6);
  });
});

describe("LetterCount", function() {
  it("should return 'cheeseburger'", function() {
    expect(LetterCount.letterCountbyWord("cheeseburger")).toEqual('cheeseburger');
  });
});

describe("LetterCount", function() {
  it("should return 'greatest'", function() {
    expect(LetterCount.letterCountbyWord("Today, is the greatest day ever!")).toEqual('greatest');
  });
});