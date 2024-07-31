package com.example.demo.Mapper;

import com.example.demo.dto.TeacherDto;
import com.example.demo.entity.Teacher;

public class TeacherMapper {
    public static TeacherDto mapToTeacherDto(Teacher teacher){
        return new TeacherDto(
                teacher.getT_id(),
                teacher.getFirstName(),
                teacher.getLastName(),
                teacher.getGender(),
                teacher.getEmail(),
                teacher.getPhoneNumber(),
                teacher.getQualification(),
                teacher.getCourse()
        );
    }

    public static Teacher mapToTeacher(TeacherDto teacherDto){
        return new Teacher(
                teacherDto.getId(),
                teacherDto.getFirstName(),
                teacherDto.getLastName(),
                teacherDto.getGender(),
                teacherDto.getEmail(),
                teacherDto.getPhoneNumber(),
                teacherDto.getQualification(),
                teacherDto.getCourse()
        );
    }
}
