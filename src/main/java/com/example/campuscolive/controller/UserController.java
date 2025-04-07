package com.example.campuscolive.controller;

import com.example.campuscolive.entity.User;
import com.example.campuscolive.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

    @RestController
    @RequestMapping("/api/user")
    public class UserController {

        @Autowired
        UserService userService;

        @PostMapping("/save")
        public ResponseEntity<User> saveUser(@RequestBody User user) {
            user = userService.saveUser(user);

            return new ResponseEntity<>(user, HttpStatus.OK);
        }
}
