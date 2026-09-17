package com.gian2077.tasks_api.service;

import com.gian2077.tasks_api.dto.StepResponseDTO;
import com.gian2077.tasks_api.model.Step;
import com.gian2077.tasks_api.repository.StepRepository;
import com.gian2077.tasks_api.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StepService {
    @Autowired
    private StepRepository stepRepository;
    @Autowired
    private TaskRepository taskRepository;

    public StepService(StepRepository stepRepository, TaskRepository taskRepository) {
        this.stepRepository = stepRepository;
        this.taskRepository = taskRepository;
    }

    public List<StepResponseDTO> findAll() {
        return  toDTOList(stepRepository.findAll());
    }
    public StepResponseDTO findById(Long id) {
        Optional<Step> step = stepRepository.findById(id);
        if(step.isPresent()) {
            Step s = step.get();
            return toDTO(s);
        }
        return null;
    }
    private StepResponseDTO toDTO(Step step) {
        StepResponseDTO dto = new StepResponseDTO();
        dto.setId(step.getId());
        dto.setTitle(step.getTitle());
        dto.setTask_id(step.getTask().getId());
        dto.setCompleted(step.getCompleted());
        return dto;
    }
    private List<StepResponseDTO> toDTOList(List<Step> steps) {
        return steps.stream().map(this::toDTO).toList();
    }
}
