package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class StudentService {
	
	private StudentRepository repository;
	
	public StudentService(StudentRepository repository) {
		this.repository=repository;
	}
	
	public Student addStudent(Student student) {
		return repository.save(student);
	}
	
	public List<Student> getStudents(){
		return repository.findAll();
	}
	
	public Student getStudent(int id) {
		return repository.findById(id).orElse(null);
	}
	
	public void deleteStudent(int id) {
		repository.deleteById(id);
	}
	
	public Student updateStudent(int id,Student student) {
		
		Student old=repository.findById(id).orElse(null);
		old.setName(student.getName());
		old.setEmail(student.getEmail());
		
		
		return repository.save(old);
		
	}
}
