var SAMPLE_ARRAY = ['cat', 'then', 'hen', 'end', 'dog'];

var ans1 = 'Cathen',
    ans2 = 'thend',
    ans3 = 'cathenend';

describe("arrayCheck will check through array", function() {
  it("should return valid", function() {
    expect(arrayCheck(SAMPLE_ARRAY, ans1)).toEqual('valid');
  });
  it("should return not valid", function() {
    expect(arrayCheck(SAMPLE_ARRAY, ans2)).toEqual('not valid');
  });
  it("should return valid", function() {
    expect(arrayCheck(SAMPLE_ARRAY, ans3)).toEqual('valid');
  });
});
