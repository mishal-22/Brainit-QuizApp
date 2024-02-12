package com.example.QuizApplication.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.QuizApplication.entities.Quiz;

@Repository
public interface QuizRepository  extends JpaRepository<Quiz, Integer> {

}
