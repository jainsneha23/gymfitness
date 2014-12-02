package com.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import com.globals.Global;


public class DatabaseDao {
	
	String DB_URL=Global.DB_URL;
	String db_user=Global.db_user;
	String db_pwd=Global.db_pwd;
	String DB_driver=Global.DB_driver;
	
	Connection con=null;
	Connection createConnection() throws SQLException{
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			con=DriverManager.getConnection(DB_URL,db_user,db_pwd);
			if(con!=null){
				System.out.println("Conncetion established sucessfully");			
				return con;		
			}		
			else
				System.out.println("Failed to connect to DB");
			con.close();
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			con.close();
		}
		return con;
	

}
}
