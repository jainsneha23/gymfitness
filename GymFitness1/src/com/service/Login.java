package com.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.dao.UserServices;

import com.model.UserLogin;

/**
 * Servlet implementation class Login
 */
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public Login() {
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
	    String password = (String) joUser.get("password");	
		UserLogin user=new UserServices().authenticateUser(username,password);	//check for user id and password from DB		
	//if(user.getId().equals(username) && user.getPassword().equals(password)){
			JSONObject result = new JSONObject();
			result.put("type",user.getType());
			result.put("userid", user.getId());
			result.put("lockedstatus", user.getAccountLockedStatus());
			String jsonResult = JSONObject.toJSONString(result);
			PrintWriter out= response.getWriter();
			out.print(jsonResult);
			out.flush();			
	//	}

			
		}
			
		catch(Exception e){
			System.out.println("Technical Error");
		}
	}

}
		
			
		
		