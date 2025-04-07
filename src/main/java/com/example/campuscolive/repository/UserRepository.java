package com.example.campuscolive.repository;

import com.example.campuscolive.entity.UserMongoDB;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface UserRepository extends MongoRepository<UserMongoDB, String> {

	@Query("{firstName:'?0'}")
	UserMongoDB findUserByFirstName(String firstName);

	@Query(value="{role: '?0'}", fields="{'firstName': 1, 'lastName': 1}")
	List<UserMongoDB> findAll(String role);

	public long count();
}