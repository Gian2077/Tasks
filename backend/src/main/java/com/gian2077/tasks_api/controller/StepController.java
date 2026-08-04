package com.gian2077.tasks_api.controller;

import com.gian2077.tasks_api.dto.StepResponseDTO;
import com.gian2077.tasks_api.service.StepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class StepController {
    @Autowired
    private StepService stepService;
    // Endpoints
    @GetMapping("/steps")
    public List<StepResponseDTO> findAll() {
        return stepService.findAll();
    }
    @GetMapping("/steps/{id}")
    public StepResponseDTO findById(@PathVariable Long id) {
        return stepService.findById(id);
    }
}
