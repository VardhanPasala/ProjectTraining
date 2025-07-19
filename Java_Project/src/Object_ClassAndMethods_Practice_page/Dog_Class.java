package Object_ClassAndMethods_Practice_page;

public class Dog_Class {
	
	String Dog_Name;
	String Dog_Breed;
	int Dog_Age;

	public Dog_Class(String D_Name, String D_Breed, int D_Age) {
		// Use of Super keyword to call the constructor of the parent class and can be used to access parent class methods and variables.
		// Here instead of super(), we can also use this() to call the constructor of the same class.
	
		super();
		Dog_Name = D_Name;
		Dog_Breed = D_Breed;
		Dog_Age = D_Age;
	}

	public void DisplayDetailsOfDog() {
		System.out.println("Dog Name: " + Dog_Name);
		System.out.println("Dog Breed: " + Dog_Breed);
		System.out.println("Dog Age: " + Dog_Age);
	}

}
