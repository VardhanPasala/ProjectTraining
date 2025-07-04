package Variables_And_Datatypes;

public class InstanceVariable {
	/*A variable declared inside the class but outside the body of the method,is called an instance variable.
	 *  It is not declared as static.

      It is called an instance variable because its value is instance-specific and is not shared 
      among instances.*/
	
	// defining instance variables inn the class.
	
	String name;
	int age;
	
	//Creating a default constructor for initializing the instance variables.
	
	public InstanceVariable() {
		
		// when we are initializing and accessing instance variables we need to use "This" Keyword.
		this.name="Vardhan";
		this.age=25;
		
	}
	
	public void InstanceVaribleMethod() {
		//this.name="Simhadri";
	
		
	}
	
	public static void main(String[] args) {
		
		// for creating the we just need "new InstanceVariable();"
		// for assigning the created object or instance to a variable "InstanceVariable  object1= new InstanceVariable()"
		
		InstanceVariable object1= new InstanceVariable();
		System.out.println("Employee name is:"+ object1.name);
		System.out.println("Employee age is :"+ object1.age);
		 
	
	}
	
	
	
	

}
