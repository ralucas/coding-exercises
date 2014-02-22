describe("levenshtein compares hello to cello", function() {
  it("should return 1", function() {
    expect(levenshtein('hello', 'cello')).toEqual(1);
  });
});

describe("levenshtein compares billed to bilked", function() {
  it("should return 1", function() {
    expect(levenshtein('billed', 'bilked')).toEqual(1);
  });
});

describe("levenshtein compares walk to wall", function() {
  it("should return 1", function() {
    expect(levenshtein('walk', 'wall')).toEqual(1);
  });
});

describe("levenshtein compares hollywood to farmer", function() {
  it("should return 0", function() {
    expect(levenshtein('hollywood', 'farmer')).toEqual(0);
  });
});