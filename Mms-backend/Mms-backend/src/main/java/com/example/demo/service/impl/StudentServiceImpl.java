package com.example.demo.service.impl;

import com.example.demo.Mapper.StudentMapper;
import com.example.demo.Mapper.TeacherMapper;
import com.example.demo.dto.StudentDto;
import com.example.demo.entity.Student;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.StudentRepository;
import com.example.demo.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService {

    private StudentRepository studentRepository;

    @Override
    public StudentDto createStudent(StudentDto studentDto) {
        Student student = StudentMapper.mapToStudent(studentDto);
        Student savedStudent = studentRepository.save(student);
        return StudentMapper.mapToStudentDto(savedStudent);
    }

    @Override
    public StudentDto getStudentById(Long StudentId) {
        Student student = studentRepository.findById(StudentId).orElseThrow(()
                -> new ResourceNotFoundException("Teacher is not exists with the given Id: "+StudentId));
        return StudentMapper.mapToStudentDto(student);
    }

    @Override
    public List<StudentDto> getAllStudent() {
        List<Student> students = studentRepository.findAll();
        return students.stream().map((student) -> StudentMapper.mapToStudentDto(student))
                .collect(Collectors.toList());
    }

    @Override
    public StudentDto updateStudent(Long StudentId, StudentDto updateStudent) {

        Student student = studentRepository.findById(StudentId).orElseThrow(
                () -> new ResourceNotFoundException("Teacher is not exists with the given Id: "+StudentId)
        );

        student.setFirstName(updateStudent.getFirstName());
        student.setLastName(updateStudent.getLastName());
        student.setGender(updateStudent.getGender());
        student.setEmail(updateStudent.getEmail());
        student.setPhoneNumber(updateStudent.getPhoneNumber());
        student.setCourse(updateStudent.getCourse());

        Student updateStudentObj = studentRepository.save(student);

        return StudentMapper.mapToStudentDto(updateStudentObj);
    }

    @Override
    public void deleteStudent(Long StudentId) {
        studentRepository.findById(StudentId).orElseThrow(
                () -> new ResourceNotFoundException("Teacher is not exists with the given Id: "+StudentId)
        );

        studentRepository.deleteById(StudentId);
    }
}