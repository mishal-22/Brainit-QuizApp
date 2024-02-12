package com.example.QuizApplication.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.QuizApplication.entities.Questions;
import com.example.QuizApplication.services.QuestionService;

@RestController
@RequestMapping("/questions")
@CrossOrigin("*")
public class QuestionController {
	@Autowired
	QuestionService questionService;
	
	@PostMapping("/add")
	public ResponseEntity<String> addQuestion(@RequestBody Questions questions){
		return  questionService.addQuestion(questions);
	}
	@GetMapping("showQuestions")
	public ResponseEntity<List<Questions>> showQuestions(){
		return questionService.showQuestions();
	}
	
	@GetMapping("showQuestions/{category}")
	public ResponseEntity<List<Questions>> showQuestionsByCategory(@PathVariable String category){
		return questionService.showQuestionsByCategory(category);
	}
	@DeleteMapping("delete/{id}")
	public ResponseEntity<String> deleteQuestion(@PathVariable int id){
		return questionService.deleteQuestion(id);
	}
	
//	@PutMapping("update/{id}")
//	public ResponseEntity<String> updateQuestion(@PathVariable int id){
//		return questionService.updateQuestion(id);
//	}
}
