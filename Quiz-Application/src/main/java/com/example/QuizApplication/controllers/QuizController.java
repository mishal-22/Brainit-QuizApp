package com.example.QuizApplication.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.QuizApplication.entities.QuestionWrapper;
import com.example.QuizApplication.entities.Questions;
import com.example.QuizApplication.entities.Quiz;
import com.example.QuizApplication.entities.QuizInfo;
import com.example.QuizApplication.entities.Response;
import com.example.QuizApplication.services.QuizService;

@RestController
@RequestMapping("quiz")
@CrossOrigin("*")
public class QuizController {
	
	@Autowired
	QuizService quizService;
	
	@PostMapping("create")
	public ResponseEntity<String> createQuiz(@RequestParam String category,@RequestParam int numQ,@RequestParam String title){
		return quizService.createQuiz(category,numQ,title);
	}
	
	@GetMapping("get")
	public ResponseEntity<List<QuizInfo>> showAllQuiz(){
		return quizService.showAllQuiz();
	}
	
	@DeleteMapping("delete/{id}")
	public ResponseEntity<String> deleteQuiz(@PathVariable int id){
		return quizService.deleteQuiz(id);
	}
	
	@GetMapping("get/{id}")
	public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(@PathVariable int id){
		return quizService.getQuizQuestions(id);
	}
	
	@PostMapping("submit/{id}")
	public ResponseEntity<Integer> submitQuiz(@PathVariable int id,@RequestBody List<Response> responses){
		return quizService.calculateResult(id,responses);
	}

	
	
}






