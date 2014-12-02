package com.service;

import java.io.IOException;
import java.sql.Date;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.Utility;
import com.dao.UserServices;
import com.model.Customer;
import com.model.UserLogin;

/**
 * Servlet implementation class UserRegister
 */
public class UserRegister extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserRegister() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		try {			
			response.setContentType("text/html");
			System.out.println("Inside user registration page");
			Customer customer= new Customer();
			customer.setId(request.getParameter("USERID"));
			customer.setAge(Integer.parseInt(request.getParameter("AGE")));
			customer.setFname(request.getParameter("FNAME"));
			customer.setLname(request.getParameter("LNAME"));
			//Date startDate=(Date) new SimpleDateFormat("yyyy-MM-dd").parse(request.getParameter("startDate")); //get the parameter convert it to a data type Date.

			//System.out.println(startDate);
			//customer.setDob(date);
			customer.setPhonenumber(request.getParameter("PHONE"));
			customer.setEmail(request.getParameter("EMAIL"));
		//	customer.setEnrollPackage(request.getParameter("ENROLLMENT"));
			customer.setGender(request.getParameter("GENDER"));
			customer.setImage(request.getParameter("IMAGE"));
			String password=new Utility().generateRandomPassword();
			customer.setPassword(password);
			boolean createuser= new UserServices().createUser(customer);
			if(createuser==true){				
				System.out.println("User created successfully");
				System.out.println("Temporary password is "+password);
			}
			
			
			
			HttpSession session = request.getSession();
			
			
		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}

}
