package com.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.dao.UserServices;
import com.model.Customer;
import com.model.UserLogin;

/**
 * Servlet implementation class GetUserDetails
 */
public class GetUserDetails extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetUserDetails() {
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
			response.setContentType("application/json");
			//Reading data from request object
			StringBuffer sb = new StringBuffer();
			BufferedReader reader=request.getReader();
			JSONParser parser = new JSONParser();
		    JSONObject joUser = null;
			String line=null;
			while((line=reader.readLine())!=null){
				sb.append(line);			
			}		
		    joUser = (JSONObject) parser.parse(sb.toString());		
		    String username = (String) joUser.get("username");
		    String password = (String) joUser.get("phone");	
			Customer customer=new UserServices().getProfileDetails(username,password);	//check for user id and password from DB		
			//if(user.getId().equals(username) && user.getPassword().equals(password)){
				JSONObject result = new JSONObject();
				result.put("fname",customer.getFname());
				result.put("lname",customer.getLname() );
				result.put("dob",customer.getDob() );
				result.put("email",customer.getEmail());
				result.put("gender",customer.getGender() );
				result.put("type",customer.getType() );
				//result.put("dateofjoining",customer.getDateOfJoining() );
				String jsonResult = JSONObject.toJSONString(result);
				PrintWriter out= response.getWriter();
				out.print(jsonResult);
				out.flush();			
			}
				
			catch(Exception e){
				System.out.println("Technical Error");
			}
		}


		
		
	}

