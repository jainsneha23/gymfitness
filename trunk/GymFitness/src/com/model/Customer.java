package com.model;

import java.sql.Date;

public class Customer extends Person{
	Date dateOfJoining;
	String enrollPackage;
	String bodyMassIndex;
	String illness;
	String majorOperation;
	int heightFoot;
	int heighInch;
	public Date getDateOfJoining() {
		return dateOfJoining;
	}
	public void setDateOfJoining(Date dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}
	public String getEnrollPackage() {
		return enrollPackage;
	}
	public void setEnrollPackage(String enrollPackage) {
		this.enrollPackage = enrollPackage;
	}
	public String getBodyMassIndex() {
		return bodyMassIndex;
	}
	public void setBodyMassIndex(String bodyMassIndex) {
		this.bodyMassIndex = bodyMassIndex;
	}
	public String getIllness() {
		return illness;
	}
	public void setIllness(String illness) {
		this.illness = illness;
	}
	public String getMajorOperation() {
		return majorOperation;
	}
	public void setMajorOperation(String majorOperation) {
		this.majorOperation = majorOperation;
	}
	public int getHeightFoot() {
		return heightFoot;
	}
	public void setHeightFoot(int heightFoot) {
		this.heightFoot = heightFoot;
	}
	public int getHeighInch() {
		return heighInch;
	}
	public void setHeighInch(int heighInch) {
		this.heighInch = heighInch;
	}
	
	

}
