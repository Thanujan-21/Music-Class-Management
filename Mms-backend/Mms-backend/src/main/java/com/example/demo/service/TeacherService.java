package com.example.demo.service;

import com.example.demo.dto.TeacherDto;

import java.util.List;

public interface TeacherService {
    TeacherDto createTeacher(TeacherDto teacherDto);

    TeacherDto getTeacherById(Long TeacherId);

    List<TeacherDto> getAllTeacher();

    TeacherDto updateTeacher(Long teacherId, TeacherDto updateTeacher);

    void deleteTeacher(Long teacherId);
}
