CREATE TABLE task_type (
id INTEGER PRIMARY KEY,
type VARCHAR(20) NOT NULL UNIQUE
);
INSERT INTO task_type(type) VALUES ('Daily'), ('Weekly'), ('Monthly'), ('Yearly');
SELECT * FROM task_type;
CREATE TABLE task (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    type_id INTEGER NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_completed TIMESTAMP DEFAULT NULL,
    CONSTRAINT fk_task_type FOREIGN KEY (type_id) REFERENCES task_type(id) ON DELETE RESTRICT
);
INSERT INTO task(title, description, type_id) 
VALUES 
    -- Basic Needs
    ('Wake Up', NULL, 1), 
    ('Go to Sleep', NULL, 1), 
    ('Drink Water', NULL, 1), 
    ('Eat Breakfast', NULL, 1), 
    ('Eat Lunch', NULL, 1), 
    ('Eat Dinner', NULL, 1), 
    -- Hygiene
    ('Shower', NULL, 1), 
    ('Brush Teeth', 'Brush teeth after each meal.', 1), 
    ('Cut Hair', NULL, 3), 
    ('Trim Beard', NULL, 2), 
    ('Trim Body Hair', NULL, 3), 
    ('Trim Nails', NULL, 3), 
    -- Health
    ('Exercise', NULL, 1), 
    ('Go for a Walk', NULL, 1), 
    -- House Chores
    ('Make the Bed', NULL, 1), 
    ('Wash the Dishes', NULL, 1), 
    ('Do the Laundry', NULL, 2), 
    ('Iron Clothes', NULL, 2), 
    ('Clean Shoes', NULL, 2), 
    ('Clean Your Room', NULL, 3), 
    ('Clean the House', NULL, 3), 
    ('Take Out the Trash', NULL, 2), 
    ('Do the Groceries', NULL, 2), 
    -- Cooking
    ('Make Rice', NULL, 2), 
    ('Make Beans', NULL, 2), 
    -- Education
    ('Study', NULL, 1), 
    -- Work
    ('Go to Work', NULL, 1), 
    -- Shopping
    ('Buy Clothes', NULL, 4), 
    -- Hobbies
    ('Play Video Games', NULL, 1), 
    ('Watch Anime', 'Watch 1 episode of an anime.', 2), 
    ('Watch Movies', 'Watch 1 movie.', 3), 
    -- Outings
    ('Go Out', NULL, 3), 
    ('Go to the Theater', 'Watch a movie at the theater.', 4), 
    -- Social
    ('Wish a Happy Birthday to Your Mother', NULL,  4), 
    ('Wish a Happy Birthday to Your Father', NULL, 4), 
    ('Wish a Happy Birthday to a Friend', NULL, 4), 
    ('Go Out with Your Mother', NULL, 4), 
    ('Go Out with Your Father', NULL, 4), 
    ('Go Out with a Friend', NULL, 4); 
SELECT * FROM task;
SELECT * FROM task WHERE type_id = 1;
SELECT * FROM task WHERE type_id = 2;
SELECT * FROM task WHERE type_id = 3;
SELECT * FROM task WHERE type_id = 4;
SELECT task.title, task.description, task_type.type FROM task INNER JOIN task_type ON task.type_id = task_type.id;
CREATE TABLE step (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    task_id BIGINT NOT NULL,
    completed BOOLEAN DEFAULT FALSE, 
    CONSTRAINT fk_task FOREIGN KEY (task_id) REFERENCES task(id) ON DELETE RESTRICT
);
INSERT INTO step(title, task_id)
VALUES
    -- Brush Teeth
    ('After Breakfast', 8), 
    ('After Lunch', 8), 
    ('After Dinner', 8), 
    -- Exercise
    ('Do 10 Push-Ups', 13), 
    ('Do 10 Crunches', 13), 
    ('Do 10 Squats', 13), 
    -- Wash the Dishes
    ('After Lunch', 16), 
    ('After Dinner', 16), 
    -- Clean the House
    ('Clean the Kitchen', 21), 
    ('Clean the Living Room', 21), 
    ('Clean the Bathroom', 21), 
    ('Clean the Laundry Room', 21); 