package com.example.demo.controller;

import com.example.demo.dto.TeacherDto;
import com.example.demo.service.TeacherService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/Teacher")
public class TeacherController {

    private TeacherService teacherService;

    //Build Add Teacher REST API
    @PostMapping
    public ResponseEntity<TeacherDto> createTeacher(@RequestBody TeacherDto teacherDto){
        TeacherDto savedTeacher = teacherService.createTeacher(teacherDto);
        return new ResponseEntity<>(savedTeacher, HttpStatus.CREATED);
    }

    //Build Get Teacher REST API
    @GetMapping("{id}")
    public ResponseEntity<TeacherDto> getTeacherById(@PathVariable("id") Long TeacherId){
        TeacherDto teacherDto = teacherService.getTeacherById(TeacherId);
        return ResponseEntity.ok(teacherDto);
    }

    //Build Get All Teacher REST API
    @GetMapping
    public ResponseEntity<List<TeacherDto>> getAllTeaher(){
        List<TeacherDto> teachers = teacherService.getAllTeacher();
        return ResponseEntity.ok(teachers);
    }

    //Build update Teacher REST API
    @PutMapping("{id}")
    public ResponseEntity<TeacherDto> updateTeacher(@PathVariable("id") Long teacherId,
                                                    @RequestBody  TeacherDto updateTeacher){
        TeacherDto teacherDto = teacherService.updateTeacher(teacherId, updateTeacher);
        return ResponseEntity.ok(teacherDto);
    }

    //Build Delete Teacher REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTeacher(@PathVariable("id") Long teacherId){
        teacherService.deleteTeacher(teacherId);
        return ResponseEntity.ok("Teacher deleted Successfully! ");
    }
}
