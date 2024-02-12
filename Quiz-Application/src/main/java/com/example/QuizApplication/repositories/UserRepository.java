package com.example.QuizApplication.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.QuizApplication.entities.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {
    public Users findByEmail(String email);
}
