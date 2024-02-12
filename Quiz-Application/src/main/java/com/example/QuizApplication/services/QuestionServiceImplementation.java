package com.example.QuizApplication.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.QuizApplication.entities.Questions;
import com.example.QuizApplication.repositories.QuestionRepository;

@Service
public class QuestionServiceImplementation  implements QuestionService{
	@Autowired
	QuestionRepository questionRepository;

	@Override
	public ResponseEntity<String> addQuestion(Questions questions) {
		questionRepository.save(questions);
		return new ResponseEntity<>("Succsess",HttpStatus.OK);
	}

	@Override
	public ResponseEntity<List<Questions>> showQuestions() {
		List<Questions> questions=questionRepository.findAll();
		return new ResponseEntity<List<Questions>>(questions,HttpStatus.OK);
	}

	@Override
	public ResponseEntity<List<Questions>> showQuestionsByCategory(String category) {
		
		return new ResponseEntity<List<Questions>>(questionRepository.findByCategory(category),HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> deleteQuestion(int id) {
		questionRepository.deleteById(id);
		
		return new ResponseEntity<String>("Deleted",HttpStatus.OK);
	}

//	@Override
//	public ResponseEntity<String> updateQuestion(int id) {
//		int id
//		return null;
//	}

}
