package OOPS;

public class CarClass {
	// Create an Instance variables
	
	private String brand;
	private String Mielage;
	private int Model;
	
	// Craete a parameterized constructor for initailizing the Instance variables.
	public CarClass(String brand, String Mielage, int Model) {
		
		// Use "This keyword" for accessing the instance variables into constructor.
		this.brand=brand;
		this.Mielage=Mielage;
		this.Model=Model;
		
	}
	
	public void DisplayCarsInfo() {
		
		System.out.println("Car Brand:"+ brand);
		System.out.println("Car Mielage:"+ Mielage);
		System.out.println("Car model:"+ Model);
		
	}
	
	public static void main(String[] args) {
		
		CarClass Car1= new  CarClass("Rolls Royce", "23 KMPL", 2025);
		CarClass car2= new CarClass("Ford", "20 KMPL", 2025);
		Car1.DisplayCarsInfo();
		
		car2.DisplayCarsInfo();
		
	}
	

}
