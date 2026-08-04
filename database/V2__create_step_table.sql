CREATE TABLE step (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    task_id BIGINT NOT NULL,
    completed BOOLEAN DEFAULT FALSE, 
    CONSTRAINT fk_task FOREIGN KEY (task_id) REFERENCES task(id) ON DELETE RESTRICT
);
INSERT INTO step(title, task_id)
VALUES
    -- Eat Snacks
    ('Eat Chips', 7), 
    ('Eat Chocolate', 7), 
    ('Drink Monster Energy Drink', 7), 
    -- Brush Teeth
    ('After Breakfast', 9), 
    ('After Lunch', 9), 
    ('After Dinner', 9), 
    -- Exercise
    ('Do 10 Push-ups', 13), 
    ('Do 10 Crunches', 13), 
    ('Do 10 Squats', 13), 
    -- Wash the Dishes
    ('After Lunch', 18), 
    ('After Dinner', 18), 
    -- Clean the House
    ('Clean the Kitchen', 22), 
    ('Clean the Living Room', 22), 
    ('Clean the Bathroom', 22), 
    ('Clean the Laundry Room', 22);
