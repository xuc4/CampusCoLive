package com.example.campuscolive;

import com.example.campuscolive.entity.UserMongoDB;
import com.example.campuscolive.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.ArrayList;
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

	}
}
