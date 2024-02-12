package com.example.QuizApplication.services;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.QuizApplication.entities.QuestionWrapper;
import com.example.QuizApplication.entities.Questions;
import com.example.QuizApplication.entities.Quiz;
import com.example.QuizApplication.entities.QuizInfo;
import com.example.QuizApplication.entities.Response;
import com.example.QuizApplication.repositories.QuestionRepository;
import com.example.QuizApplication.repositories.QuizInfoRepository;
import com.example.QuizApplication.repositories.QuizRepository;

@Service
public class QuizServiceImplementation implements QuizService {

	@Autowired
	QuizInfoRepository quizInfoRepository;
	
	@Autowired
	QuizRepository quizRepository;
	
	@Autowired
	QuestionRepository questionRepository;

	@Override
	public ResponseEntity<String> createQuiz(String category, int numQ, String title) {
		List<Questions> noOfQ=questionRepository.findByCategory(category);
		int availableQuestions=Math.min(numQ, noOfQ.size());
		List<Questions> questions=questionRepository.findRandomQuestionbyCategory(category,availableQuestions);
		Quiz quiz=new Quiz();
		quiz.setQuestions(questions);
		quiz.setTitle(title);
		quizRepository.save(quiz);
		QuizInfo quizInfo=new QuizInfo();
		quizInfo.setCategory(category);
		quizInfo.setTitle(title);
		quizInfo.setNumQ(availableQuestions);
		quizInfoRepository.save(quizInfo);
		return new ResponseEntity<String>("success",HttpStatus.OK);
	}

	@Override
	public ResponseEntity<List<QuizInfo>> showAllQuiz() {
		List<QuizInfo> quizInfos=quizInfoRepository.findAll();
		
		return new ResponseEntity<List<QuizInfo>>(quizInfos,HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> deleteQuiz(int id) {
		quizInfoRepository.deleteById(id);
		return new ResponseEntity<String>("deleted successfully",HttpStatus.OK);
	}

	@Override
	public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(int id) {
		Optional<Quiz>  quiz=quizRepository.findById(id);
		if(quiz.isPresent()) {
			List<Questions> questionsFromDB=quiz.get().getQuestions();
			List<QuestionWrapper> questionForUser=new ArrayList<QuestionWrapper>();
			for(Questions q:questionsFromDB) {
				QuestionWrapper questionWrapper=new QuestionWrapper(q.getId(),q.getQuestionTitle(),q.getOption1(),q.getOption2(),q.getOption3(),q.getOption4());
				questionForUser.add(questionWrapper);
			}
			return new ResponseEntity<List<QuestionWrapper>>(questionForUser,HttpStatus.OK);
		}else {
			
			throw new NoSuchElementException("Quiz not found for id: " + id);
		}
	}

	@Override
	public ResponseEntity<Integer> calculateResult(int id, List<Response> responses) {
		Quiz quiz=quizRepository.findById(id).get();
		List<Questions> questions=quiz.getQuestions();
		Set<String> correctAnswer=new HashSet<String>();
		for(Questions q:questions) {
			correctAnswer.add(q.getRightAnswer());
		}
		int right=0;
		for(Response response:responses) {
			if(correctAnswer.contains(response.getResponse())) {
				right++;
			}
		}
		return new ResponseEntity<Integer>(right,HttpStatus.OK);
	}

}
