package com.example.campuscolive.repository;

import com.example.campuscolive.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {

	@Query("{firstName:'?0'}")
	User findUserByFirstName(String firstName);

	@Query(value="{role: '?0'}", fields="{'firstName': 1, 'lastName': 1}")
	List<User> findAll(String role);

	public long count();
}