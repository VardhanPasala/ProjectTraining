package Basics;

public class PrimitiveDataTypes {
	
	public void NonPrimitiveDataTypes() {
		// Non-primitive data types are not declared here as per the request
		// They include classes, interfaces, arrays, etc.
		System.out.println("Non-primitive data types are not declared in this example.");
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// Create an instance of the class to access non-primitive data types method
		PrimitiveDataTypes pdt = new PrimitiveDataTypes();
		pdt.NonPrimitiveDataTypes(); // Call the method to demonstrate non-primitive data types	
		System.out.println("Demonstrating primitive data types in Java:");
		// Primitive data types in Java
		// Declare and initialize primitive data types
		int intValue = 42; // Integer
		double doubleValue = 3.14; // Double
		char charValue = 'A'; // Character
		boolean booleanValue = true; // Boolean
		byte byteValue = 100; // Byte
		short shortValue = 30000; // Short
		long longValue = 123456789L; // Long
		float floatValue = 2.718f; // Float
		// Print the values of the primitive data types
		System.out.println("Integer value: " + intValue);
		System.out.println("Double value: " + doubleValue);
		System.out.println("Character value: " + charValue);
			
		System.out.println("Boolean value: " + booleanValue);
		System.out.println("Byte value: " + byteValue);
		System.out.println("Short value: " + shortValue);
		System.out.println("Long value: " + longValue);
		System.out.println("Float value: " + floatValue);
		// Example of type casting
		int castedValue = (int) doubleValue; // Casting double to int
		System.out.println("Casted value (double to int): " + castedValue);
		// Example of arithmetic operations
		int sum = intValue + 10; // Addition
		double product = doubleValue * 2; // Multiplication
		System.out.println("Sum of intValue and 10: " + sum);
		System.out.println("Product of doubleValue and 2: " + product);
		// Example of boolean operations
		boolean isTrue = booleanValue && false; // Logical AND	
		System.out.println("Result of boolean operation (true AND false): " + isTrue);
		// Example of character operations
		char nextChar = (char) (charValue + 1); // Increment character
		System.out.println("Next character after '" + charValue + "': " + nextChar);
		// Example of byte overflow
		byte overflowByte = (byte) (byteValue + 200); // This will overflow
		System.out.println("Overflowed byte value: " + overflowByte);
		

	}

}
