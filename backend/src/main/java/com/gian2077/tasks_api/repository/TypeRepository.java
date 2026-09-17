package com.gian2077.tasks_api.repository;

import com.gian2077.tasks_api.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeRepository extends JpaRepository<Type, Integer> {
}
