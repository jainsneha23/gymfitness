package com.model;

import java.sql.Date;

public class UserLogin {
	String id;
	String password;
	String type;
	int attempt;
	Date lastLogin;
	String accountLockedStatus;
	public String getAccountLockedStatus() {
		return accountLockedStatus;
	}
	public void setAccountLockedStatus(String string) {
		this.accountLockedStatus = string;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getAttempt() {
		return attempt;
	}
	public void setAttempt(int attempt) {
		this.attempt = attempt;
	}
	public Date getLastLogin() {
		return lastLogin;
	}
	public void setLastLogin(Date lastLogin) {
		this.lastLogin = lastLogin;
	}

}
