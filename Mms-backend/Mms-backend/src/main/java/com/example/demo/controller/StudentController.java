package com.example.demo.controller;

import com.example.demo.dto.StudentDto;
import com.example.demo.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/Student")
public class StudentController {

    private StudentService studentService;

    //Build Add Teacher REST API
    @PostMapping
    public ResponseEntity<StudentDto> createStudent(@RequestBody StudentDto studentDto){
        StudentDto savedStudent = studentService.createStudent(studentDto);
        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<StudentDto> getStudentById(@PathVariable("id") Long StudentId){
        StudentDto studentDto = studentService.getStudentById(StudentId);
        return ResponseEntity.ok(studentDto);
    }

    @GetMapping
    public ResponseEntity<List<StudentDto>> getAllStudent(){
        List<StudentDto> students = studentService.getAllStudent();
        return ResponseEntity.ok(students);
    }

    @PutMapping("{id}")
    public  ResponseEntity<StudentDto> updateStudent(@PathVariable("id") Long StudentId,
                                                     @RequestBody StudentDto updateStudent){
        StudentDto studentDto = studentService.updateStudent(StudentId, updateStudent);
        return  ResponseEntity.ok(studentDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable("id") Long StudentId){
        studentService.deleteStudent(StudentId);
        return  ResponseEntity.ok("Student deleted Successfully");
    }
}
