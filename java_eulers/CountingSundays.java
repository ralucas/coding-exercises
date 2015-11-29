//You are given the following information, but you may prefer to do some research for yourself.
//
//1 Jan 1900 was a Monday.
//Thirty days has September,
//April, June and November.
//All the rest have thirty-one,
//Saving February alone,
//Which has twenty-eight, rain or shine.
//And on leap years, twenty-nine.
//A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
//How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

public class CountingSundays {
  
  public static void main(String[] args) {
    int year = Integer.parseInt(args[0]);
    int beginYear = Integer.parseInt(args[1]);
    int day = Integer.parseInt(args[2]);
    int out = countSundays(year, beginYear, day);
    System.out.println("sundays " + out);
  }
  
  private static int countSundays(int year, int beginYear, int day) {
    int initialYear = year;
    int firstDay = day;
    int firstSundays = 0;
    
    int[] months = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    String[] monthNames = {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"};
    String[] days = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
    // for each year, go thru each month
    for (int i = initialYear; i < 2001; i++) {
      // it's a leap year
      if (i % 4 == 0 && i != 1900) {
        months[1] = 29;
      } else {
        months[1] = 28;
      }
      //System.out.println("Feb: " + months[1] + ", " + i);
      for (int j = 0; j < 12; j++) {
        int rem = months[j] % 7;
        firstDay = rem + firstDay;
        if (firstDay > 6) {
          firstDay = firstDay - 7;
        }
        int m = j + 1 < 12 ? j + 1 : 0;
        System.out.println("FirstDay: " + days[firstDay] + ", " + monthNames[m] + ", " + i);
        if (firstDay == 0 && i >= beginYear) {
          firstSundays++;
        }
      }
    }
    return firstSundays;
  }
}
