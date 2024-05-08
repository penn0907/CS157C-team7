package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.UserRepository;
import com.model.User;

@Service
public class LoginService {
	
	@Autowired
    private UserRepository userRepository;

    public User checkUserCredentials(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }
    
    public User registerUser(String name, String email, String password, String username, String zipcode) {
        return userRepository.registerUser(name, email, password, username, zipcode);
    }

}
