package com.gian2077.tasks_api.repository;

import com.gian2077.tasks_api.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    @Query("SELECT t FROM Task t WHERE t.taskType.id = 1")
    List<Task> findDailyTasks();
    @Query("SELECT t FROM Task t WHERE t.taskType.id = 2")
    List<Task> findWeeklyTasks();
    @Query("SELECT t FROM Task t WHERE t.taskType.id = 3")
    List<Task> findMonthlyTasks();
    @Query("SELECT t FROM Task t WHERE t.taskType.id = 4")
    List<Task> findYearlyTasks();
}
