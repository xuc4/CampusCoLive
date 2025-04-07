package com.example.campuscolive;

import com.example.campuscolive.entity.User;
import com.example.campuscolive.entity.UserMongoDB;
import com.example.campuscolive.repository.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@SpringBootApplication
@EnableMongoRepositories
public class CampusCoLiveApplication {

	@Autowired
	UserRepository userRepo;

	List<UserMongoDB> userList = new ArrayList<>();
	public static void main(String[] args) {
		SpringApplication.run(CampusCoLiveApplication.class, args);
	}

	public void run(String... args) throws Exception {
		/**
	 	createUser();
	 	showAllUsers();
		getUserByRole("Seller");
		findCountOfUsers();
		updateRole("User Role");
		getUserByRole("Seller");
		findCountOfUsers();
		deleteUser("1");
		findCountOfUsers();
		**/
	}

	 void createUser() {
		System.out.println("Data creation started...");

		// creates timestamp
		LocalDateTime timeStampForNow = LocalDateTime.now();

		// creates uniqueId for _id field
		ObjectId uniqueId = new ObjectId();


		// parses string into LocalDate for birthday field
		String birthdayDateString = "1991-05-24";
		LocalDate birthdayLocalDate = LocalDate.parse(birthdayDateString);

		userRepo.save(new UserMongoDB(uniqueId.toString(), "Matthew", "R", "Caudill", "yeet", "body type 2", birthdayLocalDate,
				"5551234567", "caudilmr@mail.uc.edu", "hello its me ur brother", "Renter", timeStampForNow, timeStampForNow));

		System.out.println("Data creation complete...");
	}

	public void showAllUsers() {
		userList = userRepo.findAll();

		userList.forEach(user -> System.out.println(getUserDetails(user)));
	}

	public void getUserByRole(String role) {
			System.out.println("Getting users that have the role " + role);
			List<UserMongoDB> list = userRepo.findAll(role);

			list.forEach(user -> System.out.println("User Name: " + user.getFirstName() + " " + user.getLastName()));
	}

	public void findCountOfUsers() {
		long count = userRepo.count();
		System.out.println("Number of documents in the collection = " + count);
	}

	public void updateRole(String role) {
		String newRole = "Seller";

		List<UserMongoDB> list = userRepo.findAll(role);

		list.forEach(user -> {
			user.setRole(newRole);
				}
		);

		List<UserMongoDB> userRoleUpdated = userRepo.saveAll(list);

		if(userRoleUpdated != null)
			System.out.println("Successfully updated " + userRoleUpdated.size() + " user roles.");
	}

	public void deleteUser(String id) {
		userRepo.deleteById(id);
		System.out.println("Item with id " + id + " deleted...");
	}

	public String getUserDetails(UserMongoDB user) {
		System.out.println(
				"User: " + user.getFirstName() + " " + user.getMiddleInitial() + " " + user.getLastName() +
						", \nBirthday: " + user.getBirthDate() +
						", \nPhone: " + user.getPhone() +
						", \nEmail: " + user.getEmail() +
						", \nDate Created: " +user.getCreateDate()
		);
		return "";
	}

}
