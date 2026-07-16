package com.gian2077.tasks_api.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "public_id")
    private UUID publicId;
    @Column(nullable = false)
    private String title;
    @Column(columnDefinition = "TEXT")
    private String description;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "type_id", nullable = false)
    private Type taskType;
    @Column(name = "date_created")
    private LocalDateTime dateCreated;
    @Column(name = "date_completed")
    private LocalDateTime dateCompleted;

    public Task() {
    }

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

    public Type getTaskType() {
        return taskType;
    }

    public void setTaskType(Type taskType) {
        this.taskType = taskType;
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
        return "Task{" +
                "id=" + id +
                ", publicId=" + publicId +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", taskType=" + taskType.getId() +
                ", dateCreated=" + dateCreated +
                ", dateCompleted=" + dateCompleted +
                '}';
    }
}
