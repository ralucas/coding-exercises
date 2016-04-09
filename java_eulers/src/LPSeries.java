import java.io.*;
import java.math.BigInteger;
import java.util.*;

public class LPSeries {

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
