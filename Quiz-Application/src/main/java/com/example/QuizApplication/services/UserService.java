package com.example.QuizApplication.services;

import com.example.QuizApplication.entities.Users;

public interface UserService {

	boolean emailExist(String email);

	void addUser(Users users);

	boolean validateUser(String email, String password);

	String userRole(String email);

}
