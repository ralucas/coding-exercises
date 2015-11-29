import java.io.*;
import java.math.BigInteger;
import java.util.*;

public class LPSeries {
  
  //public int Number = 7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450;

  public static void main(String[] args) {
    String file = args[0];
    int digits = Integer.parseInt(args[1]);
    System.out.println(file);
    try {
      FileReader filereader = new FileReader(file);
      
      BufferedReader bufreader = new BufferedReader(filereader);
      long highest = 0;
      String[] ha = new String[digits];
      String line = "";
      int linect = 0;
      while (linect < 20) {
        line += bufreader.readLine();
        linect++;
      }
      if (linect <= 10) {
        bufreader.close();
        System.out.println(line.length() + " " + linect); 
        return;
      }
      System.out.println(line.length() + " " + linect); 
      bufreader.close();
      String nums[] = line.toString().split("");
    
      top: for (int j = 1; j < nums.length-(digits-1); j++) {
        long test = 1;
        String[] ta = new String[digits];
        for (int k = 0; k < digits; k++) {
          long num = Long.parseLong(nums[j+k]);
          if (num == 0) {
            continue top;
          }
          ta[k] = nums[j+k];
          test *= num;
        }
        System.out.println("Test: " + test + " " + Arrays.toString(ta) + " " + Arrays.toString(ta).replace(", ", ""));
        if (test > highest) {
          highest = test;
          ha = ta;
        }
      } 
      System.out.println("Highest: " + highest + Arrays.toString(ha));
    } catch (FileNotFoundException ex) {
      System.out.println(ex);
    } catch (IOException ex) {
      System.out.println(ex);
    }
  }
}
