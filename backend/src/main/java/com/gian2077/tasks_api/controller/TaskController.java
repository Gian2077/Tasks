package com.gian2077.tasks_api.controller;

import com.gian2077.tasks_api.dto.TaskRequestDTO;
import com.gian2077.tasks_api.dto.TaskResponseDTO;
import com.gian2077.tasks_api.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class TaskController {
    @Autowired
    private TaskService taskService;
    // Endpoints
    @GetMapping("/tasks")
    public List<TaskResponseDTO> findAll() {
        return taskService.findAll();
    }
    @GetMapping("/tasks/daily")
    public List<TaskResponseDTO> findDaily() {
        return taskService.findDaily();
    }
    @GetMapping("/tasks/weekly")
    public List<TaskResponseDTO> findWeekly() {
        return taskService.findWeekly();
    }
    @GetMapping("/tasks/monthly")
    public List<TaskResponseDTO> findMonthly() {
        return taskService.findMonthly();
    }
    @GetMapping("/tasks/yearly")
    public List<TaskResponseDTO> findYearly() {
        return taskService.findYearly();
    }
    @GetMapping("/tasks/{id}")
    public TaskResponseDTO findById(@PathVariable Long id) {
        return taskService.findById(id);
    }
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TaskResponseDTO create(@RequestBody TaskRequestDTO dto) {
        return taskService.create(dto);
    }
    @PutMapping
    public TaskResponseDTO update(@PathVariable Long id, @RequestBody TaskRequestDTO dto) {
        return taskService.update(id, dto);
    }
    @DeleteMapping("/tasks/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        taskService.delete(id);
    }
}
