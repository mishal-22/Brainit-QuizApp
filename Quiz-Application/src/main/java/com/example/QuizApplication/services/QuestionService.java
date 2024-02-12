package com.example.QuizApplication.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.example.QuizApplication.entities.Questions;

public interface QuestionService {

	ResponseEntity<String> addQuestion(Questions questions);

	ResponseEntity<List<Questions>> showQuestions();

	ResponseEntity<List<Questions>> showQuestionsByCategory(String category);

	ResponseEntity<String> deleteQuestion(int id);

//	ResponseEntity<String> updateQuestion(int id);

}
