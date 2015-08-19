describe("Testing Recursion", function() {

  describe("#1 Factorial Recursion", function() {
    var answer = factorial(5);
  
    it('should equal 120', function() {
      expect(answer).toBe(120);
    });
  
  });

  describe("#3 Integers in a Range Recursion", function() {
    var answer = range(2, 9);
  
    it('should be an array', function() {
      expect(typeof(answer)).toBe('array');
    });
  
    it('should have a length of 6', function() {
      expect(answer.length).toBe(6);
    });
  
    it('should contain 3 and 7', function() {
      expect(answer).toContain(3);
      expect(answer).toContain(7);
    });
  
  });

  describe('#4 Sum of an array', function() {
    var array = [1, 2, 3, 4, 5, 6];
    it('should return 21', function() {
      var ans = reduce(array);
      expect(ans).toEqual(21);
    });
  });
});

