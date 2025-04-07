package com.example.campuscolive.service;

import com.example.campuscolive.entity.UserMongoDB;
import com.example.campuscolive.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository repo;

    public UserMongoDB saveUser(UserMongoDB user){
        user = repo.save(user);

        return user;
    }

}
