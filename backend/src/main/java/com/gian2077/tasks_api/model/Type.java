package com.gian2077.tasks_api.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "task_type")
public class Type {
    @Id
    private Integer id;
    @Column(nullable = false, unique = true, length = 20)
    private String type;
    @OneToMany(mappedBy = "taskType")
    private List<Task> tasks;

    public Type() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }
}
