package com.example.demo.Mapper;

import com.example.demo.dto.StudentDto;
import com.example.demo.entity.Student;

public class StudentMapper {
    public static StudentDto mapToStudentDto(Student student){
        return new StudentDto(
                student.getS_id(),
                student.getFirstName(),
                student.getLastName(),
                student.getGender(),
                student.getEmail(),
                student.getPhoneNumber(),
                student.getCourse()
        );
    }

    public static Student mapToStudent(StudentDto studentDto){
        return new Student(
                studentDto.getId(),
                studentDto.getFirstName(),
                studentDto.getLastName(),
                studentDto.getGender(),
                studentDto.getEmail(),
                studentDto.getPhoneNumber(),
                studentDto.getCourse()
        );
    }
}
