package com.example.QuizApplication.entities;

public class Response {
int id;
String response;
public Response() {
	super();
	// TODO Auto-generated constructor stub
}
public Response(int id, String response) {
	super();
	this.id = id;
	this.response = response;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getResponse() {
	return response;
}
public void setResponse(String response) {
	this.response = response;
}
@Override
public String toString() {
	return "Response [id=" + id + ", response=" + response + "]";
}

}
