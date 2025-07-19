package Basics;

public class Mechanical_Class {
	String Student_Name;
	String Student_ID;
	String Student_Grade;
	
	public Mechanical_Class(String S_Name, String S_ID, String S_Grade) {
		super();
		Student_Name = S_Name;
		Student_ID = S_ID;
		Student_Grade = S_Grade;
	}

	public void DisplayDetailsOfStudent() {
        System.out.println("Student Name: " + Student_Name);
        System.out.println("Student ID: " + Student_ID);
        System.out.println("Student Grade: " + Student_Grade);
    }

	
}
