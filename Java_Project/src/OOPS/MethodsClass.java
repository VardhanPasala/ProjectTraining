package OOPS;

public class MethodsClass {
	
	private double balance;
	//private double amount;
	
	// create a constructor
	
	public void MethodsClass(double InitalBalance, double amount){
		this.balance=InitalBalance;
		//this.amount=amount;
		
	}
	
	//create a method for deposit Money.
	public void deposit(double amount) {
		if(amount >0) {
		balance +=amount;
		System.out.println("Deposited"+ amount);
		
	}
		
	}
	public void withdraw(double amount) {
		if(amount>0 && amount < balance) {
			balance -=amount;
			System.out.println("Withdraw"+ amount);
			
		}else {
			System.out.println("Insufficient Funds");
		}
		
	
		
		
	}
	
	public void DisplayBalance() {
		System.out.println("Avalable Balance"+ balance);
		
	}
	
	
	public static void main(String[] args) {
		
	MethodsClass acountBalance= new MethodsClass();
	acountBalance.deposit(1000);
	acountBalance.withdraw(500);
	acountBalance.DisplayBalance();
	
	
		
	}

}

