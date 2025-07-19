package Basics;

public class AssignmentOfVariables {
	
	//public  int num1 = 10; // Instance variable
	//public  int num2 = 20;
	public  static int sum;
	public  static int total;
	public  static int difference;
	public  static float quotient;// Instance variable
	
	public static int addition(int num1, int num2) {
		// This method takes two integers as input and returns their sum.
		
		 // Local variable
		sum= num1 + num2;
		System.out.println("Addition of " + num1 + " and " + num2 + " is: " + sum);
		return sum ;
		
	}
	public static int multiplication(int num1, int num2) {
		total= num1 * num2; // Local variable
		
		System.out.println("Multiplication of " + num1 + " and " + num2 + " is: "+ total);
		return total;
	}
	public static int subtraction(int num1, int num2) {
		difference = num1 - num2; // Local variable
		System.out.println("Subtraction of " + num1 + " and " + num2 + " is: "+ difference);
		return difference;
	}
	public static float division(int num1, int num2) {
		quotient = (float) num1 / num2; // Local variable
		System.out.println("Division of " + num1 + " and " + num2 + " is: "+ quotient);
		return quotient;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		AssignmentOfVariables obj = new AssignmentOfVariables();
		AssignmentOfVariables.addition(20, 30);
		obj.multiplication(20, 30);
		obj.subtraction(20, 30);
		obj.division(20, 30);
	
		
		

	}

}
