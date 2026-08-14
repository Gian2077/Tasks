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
    ('Wake Up', 'Wake up at 08:00.', 1), 
    ('Go to Sleep', 'Go to sleep at 00:00.', 1), 
    ('Drink Water', 'Drink 2 liters of water.', 1), 
    ('Eat Breakfast', NULL, 1), 
    ('Eat Lunch', NULL, 1), 
    ('Eat Dinner', NULL, 1), 
    -- Food
    ('Eat Snacks', NULL, 2), 
    -- Hygiene
    ('Shower', NULL, 1), 
    ('Brush Teeth', 'Brush teeth after each meal.', 1), 
    ('Cut Hair', NULL, 3), 
    ('Trim Beard', NULL, 2), 
    ('Trim Body Hair', NULL, 3), 
    ('Trim Nails', NULL, 3), 
    -- Exercise
    ('Exercise', NULL, 1), 
    ('Go for a Walk', NULL, 1), 
    ('Go for a Run', 'Run 1 kilometer.', 2), 
    ('Go to the Gym', NULL, 1), 
    -- Appearance
    ('Get Your Hair Done', NULL, 4), 
    ('Get a Tattoo', NULL, 4), 
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
    ('Make Curry', NULL, 4), 
    -- Education
    ('Study', NULL, 1), 
    -- Work
    ('Go to Work', NULL, 1), 
    -- Shopping
    ('Buy Clothes', NULL, 4), 
    ('Buy Video Games', NULL, 4), 
    ('Buy Books', NULL, 4), 
    ('Buy Comic Books', NULL, 3), 
    ('Buy Manga', NULL, 3), 
    ('Buy Records', NULL, 4), 
    ('Buy Model Kits', NULL, 4), 
    -- Hobbies
    ('Play Video Games', NULL, 1), 
    ('Play Board Games', NULL, 4), 
    ('Play Trading Card Games', 'Play Pokémon Trading Card Game.', 2), 
    ('Play Chess', NULL, 4), 
    ('Watch Cartoons', 'Watch 1 episode of a cartoon.', 2), 
    ('Watch Anime', 'Watch 1 episode of an anime.', 2), 
    ('Watch Movies', 'Watch 1 movie.', 3), 
    ('Watch TV Shows', 'Watch 1 episode of a TV show.', 2), 
    ('Listen to Music', NULL, 1), 
    ('Read Books', 'Read 1 chapter of a book.', 1), 
    ('Read Comic Books', 'Read 1 issue of a comic book.', 3), 
    ('Read Manga', 'Read 1 volume of a manga.', 3), 
    ('Build Model Kits', 'Build 1 model kit.', 4), 
    -- Outings
    ('Go Out', NULL, 3), 
    ('Go to the Theater', 'Watch a movie at the theater.', 4), 
    ('Go to a Concert', NULL, 4), 
    -- Social
    ('Wish a Happy Birthday to Your Mother', NULL,  4), 
    ('Wish a Happy Birthday to Your Father', NULL, 4), 
    ('Wish a Happy Birthday to a Friend', NULL, 4), 
    ('Go Out with Your Mother', NULL, 4), 
    ('Go Out with Your Father', NULL, 4), 
    ('Go Out with a Friend', NULL, 4), 
    ('Gift Your Mother', NULL, 4), 
    ('Gift Your Father', NULL, 4), 
    ('Gift a Friend', NULL, 4); 
SELECT * FROM task;
SELECT * FROM task WHERE type_id = 1;
SELECT * FROM task WHERE type_id = 2;
SELECT * FROM task WHERE type_id = 3;
SELECT * FROM task WHERE type_id = 4;
SELECT task.title, task.description, task_type.type FROM task INNER JOIN task_type ON task.type_id = task_type.id;