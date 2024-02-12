package com.example.QuizApplication.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.QuizApplication.entities.QuizInfo;

@Repository
public interface QuizInfoRepository  extends JpaRepository<QuizInfo,Integer>{

}
