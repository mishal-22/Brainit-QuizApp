package com.example.QuizApplication.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class QuizInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String category;
	String title;
	int numQ;

	public QuizInfo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public QuizInfo(int id, String category, String title, int numQ) {
		super();
		this.id = id;
		this.category = category;
		this.title = title;
		this.numQ = numQ;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getNumQ() {
		return numQ;
	}

	public void setNumQ(int numQ) {
		this.numQ = numQ;
	}

	@Override
	public String toString() {
		return "QuizInfo [id=" + id + ", category=" + category + ", title=" + title + ", numQ=" + numQ + "]";
	}

}
