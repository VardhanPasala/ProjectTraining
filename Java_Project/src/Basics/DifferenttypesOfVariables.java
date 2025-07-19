package Basics;

public class DifferenttypesOfVariables {
	
	// This Java program demonstrates the use of different variable types: primitive and non-primitive.
	// Primitive data types include int, double, boolean, etc.
	// Non-primitive data types include String, arrays, etc.
	public static void addition () {
		int num1=20;
		int num2=30;
		int sum = num1 + num2;
		System.out.println("Sum of " + num1 + " and " + num2 + " is: " + sum);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int a = 10; // Primitive data type
     String name = "John"; // Non-primitive data type
		double price = 19.99; // Primitive data type
		boolean isAvailable = true; // Primitive data type
		int[] numbers = { 1, 2, 3, 4, 5 }; // Non-primitive data type (array)

		System.out.println("Integer: " + a);
		System.out.println("String: " + name);
		System.out.println("Double: " + price);
		System.out.println("Boolean: " + isAvailable);
		System.out.print("Array: ");
		for (int num : numbers) {
			System.out.print(num + " ");
		}
		
		
		DifferenttypesOfVariables.addition();
		
	}

}
