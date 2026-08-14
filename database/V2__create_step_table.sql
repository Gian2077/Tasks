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
    ('Eat chips', 7), 
    ('Eat chocolate', 7), 
    ('Drink Monster Energy Drink', 7), 
    -- Brush Teeth
    ('After breakfast', 9), 
    ('After lunch', 9), 
    ('After dinner', 9), 
    -- Exercise
    ('Do 10 push-ups', 14), 
    ('Do 10 crunches', 14), 
    ('Do 10 squats', 14), 
    -- Wash the Dishes
    ('After lunch', 21), 
    ('After dinner', 21), 
    -- Clean the House
    ('Clean the kitchen', 26), 
    ('Clean the living room', 26), 
    ('Clean the bathroom', 26), 
    ('Clean the laundry room', 26), 
    -- Buy Video Games
    ('Buy a PlayStation 1 Video Game', 35), 
    ('Buy a PlayStation 2 Video Game', 35), 
    ('Buy a PlayStation 3 Video Game', 35), 
    ('Buy a PlayStation 4 Video Game', 35), 
    ('Buy a PlayStation 5 Video Game', 35), 
    ('Buy a Nintendo Switch Video Game', 35); 