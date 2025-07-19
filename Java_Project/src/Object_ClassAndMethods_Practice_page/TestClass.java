package Object_ClassAndMethods_Practice_page;

public class TestClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Creating an object of Dog_Class
		Dog_Class dog = new Dog_Class("Buddy", "Golden Retriever", 5);
		// Calling the method to display dog details
		dog.DisplayDetailsOfDog();
		System.out.println(""
				+ "");
		Car_Class car = new Car_Class("Toyota", "Camry", 2020, "30 MPG");
		// Calling the method to display car details
		car.DisplayDetailsOfCar();

	}

}
