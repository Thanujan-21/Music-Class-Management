package com.example.demo.service;

import com.example.demo.dto.StudentDto;

import java.util.List;

public interface StudentService {
    StudentDto createStudent(StudentDto studentDto);

    StudentDto getStudentById(Long StudentId);

    List<StudentDto> getAllStudent();

    StudentDto updateStudent(Long StudentId, StudentDto updateStudent);

    void deleteStudent(Long StudentId);
}
