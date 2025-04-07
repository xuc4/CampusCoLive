package com.example.campuscolive;

import com.example.campuscolive.entity.UserMongoDB;
import com.example.campuscolive.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

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

		LocalDateTime now = LocalDateTime.now();

		userRepo.save(new UserMongoDB("1", "Example", "R", "Coyote", "yeet", "body type 2", now,
				1234567, "a@mail.uc.edu", "hello its me ur brother", "Renter", now, now));

		System.out.println("Data creation complete...");
	}

}
