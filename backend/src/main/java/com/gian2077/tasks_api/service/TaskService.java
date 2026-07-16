package com.gian2077.tasks_api.service;

import com.gian2077.tasks_api.dto.TaskRequestDTO;
import com.gian2077.tasks_api.dto.TaskResponseDTO;
import com.gian2077.tasks_api.model.Task;
import com.gian2077.tasks_api.model.Type;
import com.gian2077.tasks_api.repository.TaskRepository;
import com.gian2077.tasks_api.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private TypeRepository typeRepository;
    // Constructor
    public TaskService(TaskRepository taskRepository, TypeRepository typeRepository) {
        this.taskRepository = taskRepository;
        this.typeRepository = typeRepository;
    }
    public List<TaskResponseDTO> findAll() {
        // return taskRepository.findAll().stream().map(TaskResponseDTO::new).toList();
        return toDTOList(taskRepository.findAll());
    }
    public List<TaskResponseDTO> findDaily() {
        return toDTOList(taskRepository.findDailyTasks());
    }
    public List<TaskResponseDTO> findWeekly() {
        return toDTOList(taskRepository.findWeeklyTasks());
    }
    public List<TaskResponseDTO> findMonthly() {
        return toDTOList(taskRepository.findMonthlyTasks());
    }
    public List<TaskResponseDTO> findYearly() {
        return toDTOList(taskRepository.findYearlyTasks());
    }
    public TaskResponseDTO findById(Long id) {
        Optional<Task> task = taskRepository.findById(id);
        if(task.isPresent()) {
            Task t = task.get();
            return toDTO(t);
        }
        return null;
    }
    public TaskResponseDTO create(TaskRequestDTO dto) {
        Type type = typeRepository.findById(dto.getTypeId()).orElseThrow(() -> new RuntimeException("Task Type not found"));
        Task task = new Task();
        task.setTitle(dto.getTitle());
        task.setDescription(dto.getDescription());
        task.setTaskType(type);
        Task savedTask = taskRepository.save(task);
        return toDTO(savedTask);
    }
    public TaskResponseDTO update(Long id, TaskRequestDTO dto) {
        Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
        Type type = typeRepository.findById(dto.getTypeId()).orElseThrow(() -> new RuntimeException("Task Type not found"));
        task.setTitle(dto.getTitle());
        task.setDescription(dto.getDescription());
        task.setTaskType(type);
        Task updatedTask = taskRepository.save(task);
        return toDTO(updatedTask);
    }
    public void delete(Long id) {
        Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
        taskRepository.delete(task);
    }
    private TaskResponseDTO toDTO(Task task) {
        TaskResponseDTO dto = new TaskResponseDTO();
        dto.setId(task.getId());
        dto.setPublicId(task.getPublicId());
        dto.setTitle(task.getTitle());
        dto.setDescription(task.getDescription() == null ? "This task has no description." : task.getDescription());
        dto.setType(task.getTaskType().getType());
        dto.setDateCreated(task.getDateCreated());
        dto.setDateCreated(task.getDateCompleted());
        return dto;
    }
    private List<TaskResponseDTO> toDTOList(List<Task> tasks) {
        return tasks.stream().map(this::toDTO).toList();
    }
}
