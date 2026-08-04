package com.gian2077.tasks_api;

import com.gian2077.tasks_api.model.Task;
import com.gian2077.tasks_api.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class TasksApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(TasksApiApplication.class, args);
	}
}
