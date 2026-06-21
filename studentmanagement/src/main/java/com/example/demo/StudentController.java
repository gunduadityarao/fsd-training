package com.example.demo;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/students")
public class StudentController {
	StudentService service;
	public StudentController(StudentService service) {
		this.service=service;
	}
	
	@GetMapping
	public List<Student> getStudents(){
		return service.getStudents();
	}
	
	@GetMapping("/{id}")
	public Student getStudent(@PathVariable int id) {
		return service.getStudent(id);
	}
	
	@PostMapping
	public Student addStudent(@RequestBody Student student) {
		return service.addStudent(student);
	}
	
	@DeleteMapping("/{id}")
	public String deleteStudent(@PathVariable int id) {
		service.deleteStudent(id);
		return "Student deleted successfully";
	}

	@PutMapping("/{id}")
	public Student updateStudent(@RequestBody Student student, @PathVariable int id) {
		return service.updateStudent(id, student);
	}
}
