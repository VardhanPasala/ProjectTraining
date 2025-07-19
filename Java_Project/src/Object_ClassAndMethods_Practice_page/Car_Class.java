package Object_ClassAndMethods_Practice_page;

public class Car_Class {
	public String Car_Brand;
	public String Car_Model;
	public int Launchig_Year;
	public String Car_mileage;
	
	public Car_Class(String C_Brand, String C_Model, int L_Year, String C_mileage) {
		// Use of Super keyword to call the constructor of the parent class and can be
		// used to access parent class methods and variables.
		// Here instead of super(), we can also use this() to call the constructor of
		// the same class.

		super();
		Car_Brand = C_Brand;
		Car_Model = C_Model;
		Launchig_Year = L_Year;
		this.Car_mileage = C_mileage;
	}

	public void DisplayDetailsOfCar() {
		System.out.println("Car Brand: " + Car_Brand);
		System.out.println("Car Model: " + Car_Model);
		System.out.println("Launching Year: " + Launchig_Year);
		System.out.println("Car Mileage: " + Car_mileage);
	}
	

}
