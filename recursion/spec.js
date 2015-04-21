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

});

