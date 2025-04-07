package com.example.campuscolive;

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
public class CampusCoLiveApplication implements CommandLineRunner {

	@Autowired
	UserRepository userRepo;

	List<UserMongoDB> userMongoDBList = new ArrayList<UserMongoDB>();
	public static void main(String[] args) {
		SpringApplication.run(CampusCoLiveApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		createUser();
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

		userRepo.save(new UserMongoDB(uniqueId, "Matthew", "R", "Caudill", "yeet", "body type 2", birthdayLocalDate,
				"5551234567", "caudilmr@mail.uc.edu", "hello its me ur brother", "Renter", timeStampForNow, timeStampForNow));

		System.out.println("Data creation complete...");
	}

}
