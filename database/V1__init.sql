CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE TABLE task_type (
id INTEGER PRIMARY KEY,
type VARCHAR(20) NOT NULL UNIQUE
);
INSERT INTO task_type(type) VALUES ('Daily'), ('Weekly'), ('Monthly'), ('Yearly');
SELECT * FROM task_type;
CREATE TABLE task (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    public_id UUID DEFAULT gen_random_uuid(),
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
    ('Wake Up', 'Wake Up at 08:00.', 1), 
    ('Go to Sleep', 'Go to Sleep at 00:00.', 1), 
    ('Drink Water', 'Drink 2 Liters of Water.', 1), 
    ('Eat Breakfast', NULL, 1), 
    ('Eat Lunch', NULL, 1), 
    ('Eat Dinner', NULL, 1), 
    -- Food
    ('Eat Snacks', NULL, 2), 
    -- Hygiene
    ('Shower', NULL, 1), 
    ('Brush Teeth', NULL, 1), 
    ('Cut Hair', NULL, 3), 
    ('Trim Beard', NULL, 2), 
    ('Trim Nails', NULL, 3), 
    -- Exercise
    ('Exercise', 'Do 10 Push-ups, 10 Crunches and 10 Squats.', 1), 
    ('Go for a Walk', NULL, 1), 
    ('Go for a Run', 'Run 1 Kilometer.', 2), 
    ('Go to the Gym', NULL, 1), 
    -- House Chores
    ('Make the Bed', NULL, 1), 
    ('Wash the Dishes', NULL, 1), 
    ('Do the Laundry', NULL, 2), 
    ('Iron Clothes', NULL, 2), 
    ('Clean Your Room', NULL, 3), 
    ('Clean the House', NULL, 3), 
    ('Take Out the Trash', NULL, 2), 
    ('Do the Groceries', NULL, 2), 
    -- Cooking
    ('Make Rice', NULL, 2), 
    ('Make Beans', NULL, 2), 
    -- Education
    ('Study English', 'Do 1 English Lesson at Duolingo.', 2), 
    ('Study Math', 'Do 1 Math Lesson at Duolingo.', 2), 
    ('Study HTML', NULL, 4), 
    ('Study CSS', NULL, 4), 
    ('Study JavaScript', NULL, 4), 
    ('Study React', NULL, 4), 
    ('Study Tailwind CSS', NULL, 4), 
    ('Study TypeScript', NULL, 4), 
    ('Study Java', NULL, 4), 
    ('Study Spring Boot', NULL, 4), 
    ('Study SQL', NULL, 4), 
    ('Study PostgreSQL', NULL, 4), 
    ('Study Git', NULL, 4), 
    ('Study', 'Go to College.', 1), 
    -- Work
    ('Go to Work', NULL, 1), 
    -- Shopping
    ('Buy Clothes', NULL, 4), 
    ('Buy Video Games', NULL, 4), 
    ('Buy Books', NULL, 4), 
    ('Buy Comic Books', NULL, 3), 
    ('Buy Manga', NULL, 3), 
    -- Hobbies
    ('Play Video Games', NULL, 1), 
    ('Play Board Games', NULL, 4), 
    ('Watch Cartoons', 'Watch 1 Episode of a Cartoon.', 1), 
    ('Watch Anime', 'Watch 1 Episode of an Anime.', 2), 
    ('Watch Movies', 'Watch 1 Movie.', 3), 
    ('Watch TV Shows', 'Watch 1 Episode of a TV Show.', 1), 
    ('Listen to Music', NULL, 1), 
    ('Read Books', 'Read 1 Chapter of a Book.', 1), 
    ('Read Comic Books', 'Read 1 Issue of a Comic Book.', 3), 
    ('Read Manga', 'Read 1 Volume of a Manga.', 3), 
    -- Outings
    ('Go Out', NULL, 3), 
    ('Go to the Theater', 'Watch a Movie at the Theater.', 4), 
    ('Go to a Concert', NULL, 4), 
    -- Social
    ('Wish a Happy Birthday to Your Mother', NULL,  4), 
    ('Wish a Happy Birthday to Your Father', NULL, 4), 
    ('Wish a Happy Birthday to a Friend', NULL, 4), 
    ('Go Out with Your Mother', NULL, 4), 
    ('Go Out with Your Father', NULL, 4), 
    ('Go Out with a Friend', NULL, 4), 
    ('Go Out with a Group of Friends', 'Go to Liberdade with Your Friends.', 4), 
    ('Gift Your Mother', NULL, 4), 
    ('Gift Your Father', NULL, 4), 
    ('Gift a Friend', NULL, 4), 
    ('Meet New People', 'Strike a Conversation with Someone You Think You Might Get Along With.', 4); 

SELECT * FROM task;
SELECT * FROM task WHERE type_id = 1;
SELECT * FROM task WHERE type_id = 2;
SELECT * FROM task WHERE type_id = 3;
SELECT * FROM task WHERE type_id = 4;
SELECT task.title, task.description, task_type.type FROM task INNER JOIN task_type ON task.type_id = task_type.id;