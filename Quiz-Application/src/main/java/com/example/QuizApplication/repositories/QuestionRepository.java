package com.example.QuizApplication.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.QuizApplication.entities.Questions;

@Repository
public interface QuestionRepository extends JpaRepository<Questions,Integer> {
	
	List<Questions> findByCategory(String category);

	
	@Query(value = "select * from questions q where q.category=:category order by rand() limit :numQ ",nativeQuery = true)
	List<Questions> findRandomQuestionbyCategory(String category, int numQ);

}
