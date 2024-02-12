package com.example.QuizApplication.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.example.QuizApplication.entities.QuestionWrapper;
import com.example.QuizApplication.entities.Quiz;
import com.example.QuizApplication.entities.QuizInfo;
import com.example.QuizApplication.entities.Response;

public interface QuizService {

	ResponseEntity<String> createQuiz(String category, int numQ, String title);

	ResponseEntity<List<QuizInfo>> showAllQuiz();

	ResponseEntity<String> deleteQuiz(int id);

	ResponseEntity<List<QuestionWrapper>> getQuizQuestions(int id);

	ResponseEntity<Integer> calculateResult(int id, List<Response> responses);

	

}
