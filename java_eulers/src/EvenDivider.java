// Project Euler #5 - smallest multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

public class EvenDivider {

  public static void main(String[] args) {
    int N = Integer.parseInt(args[0]);
    int out = ed(N);
    System.out.println(out);
  }
    
  private static int ed(int N) {
    int[] divs = new int[N-2];
    // setup the divs array
    for (int i = 0; i <= N-3; i++) {
      divs[i] = i + 3;
    }
    
    int count = 2;
    int output = 0;
    
    while (count < 10000000) {
      int j = 0; 
      while(j <= N-3) {
        if (count % divs[j] == 0) {
          if (j == (N-3)) {
            output = count;
            return output; 
          }
          j++;
        } else {
          j = 0;
          count += 2;
        }
      }
    }
    return output;
  }
}
