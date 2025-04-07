package com.example.campuscolive.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document("user")
public class UserMongoDB {

	@Id
	private String id;

	private String firstName;
	private String middleInitial;
	private String lastName;
	private String password;
	private String gender;
	private LocalDateTime birthDate;
	private long phone;
	private String email;
	private String aboutMe;
	private String role;
	private LocalDateTime createDate;
	private LocalDateTime updateTime;

	public UserMongoDB(String id, String firstName, String middleInitial, String lastName, String password,
	String gender, LocalDateTime birthDate, long phone, String email, String aboutMe, String role,
					   LocalDateTime createDate, LocalDateTime updateTime) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.middleInitial = middleInitial;
		this.lastName = lastName;
		this.password = password;
		this.gender = gender;
		this.birthDate = birthDate;
		this.phone = phone;
		this.email = email;
		this.aboutMe = aboutMe;
		this.role = role;
		this.createDate = createDate;
		this.updateTime = updateTime;
	}

}