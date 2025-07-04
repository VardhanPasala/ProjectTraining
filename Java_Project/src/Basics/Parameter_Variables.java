package Basics;

public class Parameter_Variables {
	//Create a method for two parameters and print the values of the parameters
	public void printParameters(String param1, int param2) {
		System.out.println("Parameter 1: " + param1);
		System.out.println("Parameter 2: " + param2);
	}

	public void LoginDeatials(String username, String password) {
		System.out.println("Username: " + username);
		System.out.println("Password: " + password);
	}
	public static void main(String[] args) {
		// Create an instance of the class
		Parameter_Variables pv = new Parameter_Variables();

		// Call the method with different parameters
		pv.printParameters("Hello", 42);
		pv.printParameters("World", 100);

		// You can also call the method with variables
		String myString = "Test String";
		int myInt = 123;
		pv.printParameters(myString, myInt);
		// Call the LoginDeatials method	
		
		pv.LoginDeatials("admin", "admin123");
		pv.LoginDeatials("user", "user123");
	}
}
