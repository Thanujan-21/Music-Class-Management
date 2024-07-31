package com.example.demo.service.impl;

import com.example.demo.Mapper.TeacherMapper;
import com.example.demo.dto.TeacherDto;
import com.example.demo.entity.Teacher;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.TeacherRepository;
import com.example.demo.service.TeacherService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TeacherServiceImpl implements TeacherService {

    private TeacherRepository teacherRepository;

    @Override
    public TeacherDto createTeacher(TeacherDto teacherDto) {
        Teacher teacher = TeacherMapper.mapToTeacher(teacherDto);
        Teacher savedTeacher = teacherRepository.save(teacher);
        return TeacherMapper.mapToTeacherDto(savedTeacher);
    }

    @Override
    public TeacherDto getTeacherById(Long TeacherId) {
        Teacher teacher = teacherRepository.findById(TeacherId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Teacher is not exists with the given Id: "+TeacherId));
        return TeacherMapper.mapToTeacherDto(teacher);
    }

    @Override
    public List<TeacherDto> getAllTeacher() {
        List<Teacher> teachers = teacherRepository.findAll();
        return teachers.stream().map((teacher) -> TeacherMapper.mapToTeacherDto(teacher))
                .collect(Collectors.toList());
    }

    @Override
    public TeacherDto updateTeacher(Long teacherId, TeacherDto updateTeacher) {

        Teacher teacher = teacherRepository.findById(teacherId).orElseThrow(
                () -> new ResourceNotFoundException("Teacher is not exists with the given Id: " +teacherId)
        );

        teacher.setFirstName(updateTeacher.getFirstName());
        teacher.setLastName(updateTeacher.getLastName());
        teacher.setGender(updateTeacher.getGender());
        teacher.setEmail(updateTeacher.getEmail());
        teacher.setPhoneNumber(updateTeacher.getPhoneNumber());
        teacher.setQualification(updateTeacher.getQualification());
        teacher.setCourse(updateTeacher.getCourse());

        Teacher updateTeacherObj = teacherRepository.save(teacher);

        return TeacherMapper.mapToTeacherDto(updateTeacherObj);
    }

    @Override
    public void deleteTeacher(Long teacherId) {
        Teacher teacher = teacherRepository.findById(teacherId).orElseThrow(
                () -> new ResourceNotFoundException("Teacher is not exists with the given Id: "+teacherId)
        );

        teacherRepository.deleteById(teacherId);
    }

}
