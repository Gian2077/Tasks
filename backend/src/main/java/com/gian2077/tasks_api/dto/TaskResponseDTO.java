package com.gian2077.tasks_api.dto;

import com.gian2077.tasks_api.model.Task;

import java.time.LocalDateTime;
import java.util.UUID;

public class TaskResponseDTO {
    private Long id;
    private UUID publicId;
    private String title;
    private String description;
    private String type;
    private LocalDateTime dateCreated;
    private LocalDateTime dateCompleted;

    // Constructor
    public TaskResponseDTO() {
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UUID getPublicId() {
        return publicId;
    }

    public void setPublicId(UUID publicId) {
        this.publicId = publicId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }

    public LocalDateTime getDateCompleted() {
        return dateCompleted;
    }

    public void setDateCompleted(LocalDateTime dateCompleted) {
        this.dateCompleted = dateCompleted;
    }

    @Override
    public String toString() {
        return "TaskResponseDTO{" +
                "publicId=" + publicId +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", type='" + type + '\'' +
                ", dateCreated=" + dateCreated +
                ", dateCompleted=" + dateCompleted +
                '}';
    }
}
