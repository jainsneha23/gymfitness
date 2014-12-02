package com.dao;

import java.sql.Connection;
//import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.model.Customer;
import com.model.UserLogin;


public class UserServices {
	
public UserLogin authenticateUser(String username, String password) throws SQLException{
		
		DatabaseDao connection= new DatabaseDao();
		Connection con= connection.createConnection();
		UserLogin user=new UserLogin();
		
		try{
		String query= "SELECT * FROM user WHERE USERID='"+username+"'";
		Statement smnt= con.createStatement();
		ResultSet rs=smnt.executeQuery(query);		
			while(rs.next()){
			user.setId(rs.getString("USERID"));
			user.setAttempt(rs.getInt("ATTEMPT"));
			user.setLastLogin(rs.getDate("LASTLOGIN"));
			user.setType(rs.getString("TYPE"));	
			user.setPassword(rs.getString("PASSWORD"));
			user.setAccountLockedStatus(rs.getString("LOCKED"));
			System.out.println("User id "+rs.getString("userId"));			
						
		}
			if(username.equals(user.getId()) && password.equals(user.getPassword()))
			{
				user.setAttempt(0);
				user.setAccountLockedStatus("N");
				boolean status=	accountUnLock(con,user.getId());//on successful login reset the login count to zero
				
			}
			else if(username.equals(user.getId()) && !password.equals(user.getPassword())){
				user.setAttempt(user.getAttempt()+1);
				updateAttempt(con,user.getAttempt(),user.getId());
				//check if user entered wrong id and password
				if(user.getAttempt()>=3)
				{
				boolean status=	accountLock(con,user.getId());
				user.setAccountLockedStatus("Y");
				//user.setAccountLockedStatus(user.getAccountLockedStatus());
				}
				
			}
			
		rs.close();
		smnt.close();
		con.close();
		return user;
		
	}
		catch(Exception e){
			System.out.println("User login access error");
			e.printStackTrace();
		}
		return null;

}

private void updateAttempt(Connection con,int attempt, String userid) throws SQLException {
	// TODO Auto-generated method stub
String query= "UPDATE gymfitness.user SET ATTEMPT='"+attempt+"' WHERE USERID='"+userid+"'";

	
	//System.out.println(query);

Statement smnt= con.createStatement();
int rs=smnt.executeUpdate(query);

	
}

private boolean accountUnLock(Connection con, String userid) throws SQLException {
	// TODO Auto-generated method stub
	int attempt=0;
	String query= "UPDATE gymfitness.user SET LOCKED='N', ATTEMPT='"+attempt+"' WHERE USERID='"+userid+"'";
	
	
	//System.out.println(query);

Statement smnt= con.createStatement();
int rs=smnt.executeUpdate(query);
if (rs!=0)
return true;
	return false;
}

private boolean accountLock(Connection con, String userid) throws SQLException {
	// TODO Auto-generated method stub
	String query= "UPDATE gymfitness.user SET LOCKED='Y' WHERE USERID='"+userid+"'";
	System.out.println(query);

Statement smnt= con.createStatement();
int rs=smnt.executeUpdate(query);
if (rs!=0)
return true;
return false;

}

public boolean createUser(Customer customer) throws SQLException{
	
	DatabaseDao connection= new DatabaseDao();
	Connection con= connection.createConnection();
	//UserLogin user=new UserLogin();
	System.out.println(customer.getId()+customer.getPassword()+customer.getFname()+customer.getLname()+customer.getPhonenumber()+customer.getEmail()+customer.getImage()+customer.getGender());
	
	try{
	String query= "INSERT INTO gymfitness.user (`USERID`,`PASSWORD`,`FNAME`,`LNAME`," +
			"`PHONE`,`EMAIL`,`IMAGE`,`GENDER`) VALUES ('"+customer.getId()+"','"+customer.getPassword()+"','"+customer.getFname()+"'," +
					"'"+customer.getLname()+"','"+customer.getPhonenumber()+"','"+customer.getEmail()+"','"+customer.getImage()+"','"+customer.getGender()+"');";
		
			System.out.println(query);

	Statement smnt= con.createStatement();
	int rs=smnt.executeUpdate(query);		
	System.out.println("Rsult"+rs);
	
	smnt.close();
	con.close();
	return true;
	
}
	catch(Exception e){
		System.out.println("User insertion error");
		e.printStackTrace();
	}	
	
	return false;
	
}

public Customer getCustomerDetailsByUserId(String userid) throws SQLException{
	String query= "SELECT * FROM user WHERE USERID='"+userid+"'";
	Customer customer=getCustomerDetails(query);
	return customer;
	
}
public Customer getCustomerDetailsByPhoneNo(String phoneno) throws SQLException{
	String query= "SELECT * FROM user WHERE PHONE='"+phoneno+"'";
	Customer customer=getCustomerDetails(query);
	return customer;
}
public Customer getCustomerDetails(String query) throws SQLException{
	DatabaseDao connection= new DatabaseDao();
	Connection con= connection.createConnection();
	//UserLogin user=new UserLogin();
	Customer customer= new Customer();
	
	try{
	Statement smnt= con.createStatement();
	ResultSet rs=smnt.executeQuery(query);		
	while(rs.next()){
		customer.setId(rs.getString("USERID"));
		customer.setFname(rs.getString("FNAME"));
		customer.setLname(rs.getString("LNAME"));
		customer.setAge(rs.getInt("AGE"));
		customer.setEmail(rs.getString("EMAIL"));
		customer.setGender(rs.getString("GENDER"));
	
	}
	rs.close();
	smnt.close();
	con.close();
	return customer;
	
}
	catch(Exception e){
		System.out.println("get customer details errror");
		e.printStackTrace();
	}
	return null;
}

public Customer getProfileDetails(String username, String phone) throws SQLException {
	// TODO Auto-generated method stub
	String query=null;
	if(username!=null)
	{
		query="SELECT * FROM user WHERE USERID='"+username+"'";
	}
	else if(phone!=null)
	{
		query="SELECT * FROM user WHERE PHONE='"+phone+"'";
	}
	DatabaseDao connection= new DatabaseDao();
	Connection con= connection.createConnection();
	Customer customer=new Customer();
	Statement smnt= con.createStatement();
	ResultSet rs=smnt.executeQuery(query);		
		while(rs.next()){
			customer.setFname(rs.getString("FNAME"));
			customer.setLname(rs.getString("LNAME"));
			//customer.setAge(rs.getInt("AGE"));
			customer.setDob(rs.getDate("DOB"));
			customer.setEmail(rs.getString("EMAIL"));
			customer.setPhonenumber(rs.getString("PHONE"));
			customer.setGender(rs.getString("GENDER"));
			customer.setId(rs.getString("USERID"));
		//	customer.setIllness(rs.getString(""))
			
		
	}
	
	return customer;
}
}
