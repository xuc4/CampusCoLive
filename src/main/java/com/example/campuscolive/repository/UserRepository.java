package com.example.campuscolive.repository;

import com.example.campuscolive.entity.UserMongoDB;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface UserRepository extends MongoRepository<UserMongoDB, String> {

	@Query("{firstName:'?0'}")
	UserMongoDB findUserByFirstName(String firstName);

	long count();
}