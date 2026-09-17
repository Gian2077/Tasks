# Test Cases

**Project:** Tasks  
**SRS Version:** 1.0  
**Test Type:** Functional Testing

### TC-001 Create task with title, type and description

**Requirements:** FR-001 Create Task, FR-006 Task Type, FR-008 Task Description

**Preconditions:**

- Application is loaded

**Input:**

- Title: "Study QA"
- Type: "Daily"
- Description: "Practice creating test cases."

**Steps:**

1. Click on floating action button "+".
2. Select "Daily" type.
3. Click on title field and type "Study QA".
4. Click on description field and type "Practice creating test cases.".
5. Click on "Add Task" button.

**Expected Result:** Task is created with correct inputs.

### TC-002 Create task without title

**Requirements:** FR-001 Create Task, FR-006 Task Type, FR-008 Task Description

**Preconditions:**

- Application is loaded

**Input:**

- Title: ""
- Type: "Daily"
- Description: "Practice creating test cases."

**Steps:**

1. Click on floating action button "+".
2. Select "Daily" type.
3. Leave title field empty.
4. Click on description field and type "Practice creating test cases.".
5. Click on "Add Task" button.

**Expected Result:** Task is not created, title field will be highlighted with a message "Task title must not be empty.".

### TC-003 Create task without type

**Requirements:** FR-001 Create Task, FR-006 Task Type, FR-008 Task Description

**Preconditions:**

- Application is loaded

**Input:**

- Title: "Study QA"
- Type: ""
- Description: "Practice creating test cases."

**Steps:**

1. Click on floating action button "+".
2. Don't select any type.
3. Click on title field and type "Study QA".
4. Click on description field and type "Practice creating test cases.".
5. Click on "Add Task" button.

**Expected Result:** Task is not created, type field will be highlighted with a message "Select a task type.".

### TC-004 Create task without description

**Requirements:** FR-001 Create Task, FR-006 Task Type, FR-008 Task Description

**Preconditions:**

- Application is loaded

**Input:**

- Title: "Study QA"
- Type: "Daily"
- Description: ""

**Steps:**

1. Click on floating action button "+".
2. Select "Daily" type.
3. Click on title field and type "Study QA".
4. Leave description field empty.
5. Click on "Add Task" button.

**Expected Result:** Task is created with the default description "This task has no description.".

### TC-005 Create task with title being a blank space

**Requirements:** FR-001 Create Task, FR-006 Task Type, FR-008 Task Description

**Preconditions:**

- Application is loaded

**Input:**

- Title: " "
- Type: "Daily"
- Description: "Practice creating test cases."

**Steps:**

1. Click on floating action button "+".
2. Select "Daily" type.
3. Click on title field and press the space bar once.
4. Click on description field and type "Practice creating test cases.".
5. Click on "Add Task" button.

**Expected Result:** Task is not created, title field will be highlighted with a message "Title must have between 4 to 30 characters.".

### TC-006 Create task with title being 4 blank spaces

**Requirements:** FR-001 Create Task, FR-006 Task Type, FR-008 Task Description

**Preconditions:**

- Application is loaded

**Input:**

- Title: " "
- Type: "Daily"
- Description: "Practice creating test cases."

**Steps:**

1. Click on floating action button "+".
2. Select "Daily" type.
3. Click on title field and press the space bar 4 times.
4. Click on description field and type "Practice creating test cases.".
5. Click on "Add Task" button.

**Expected Result:** Task is not created, title field will be highlighted with a message "Title must have between 4 to 30 characters.".

### TC-007 Create task with title being 1 character long

**Requirements:** FR-001 Create Task, FR-006 Task Type, FR-008 Task Description

**Preconditions:**

- Application is loaded

**Input:**

- Title: "S"
- Type: "Daily"
- Description: "Practice creating test cases."

**Steps:**

1. Click on floating action button "+".
2. Select "Daily" type.
3. Click on title field and type "S".
4. Click on description field and type "Practice creating test cases.".
5. Click on "Add Task" button.

**Expected Result:** Task is not created, title field will be highlighted with a message "Title must have between 4 to 30 characters long.".

### TC-008 Create task with title being 255 characters long

**Requirements:** FR-001 Create Task, FR-006 Task Type, FR-008 Task Description

**Preconditions:**

- Application is loaded

**Input:**

- Title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur, deserunt adipisci blanditiis praesentium delectus. Rem iusto esse eum deserunt optio. Obcaecati a recusandae cum porro maiores, eum asperiores temporibus! Lorem ipsum dolor sit ame"
- Type: "Daily"
- Description: "Practice creating test cases."

**Steps:**

1. Click on floating action button "+".
2. Select "Daily" type.
3. Click on title field and type "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur, deserunt adipisci blanditiis praesentium delectus. Rem iusto esse eum deserunt optio. Obcaecati a recusandae cum porro maiores, eum asperiores temporibus! Lorem ipsum dolor sit ame".
4. Click on description field and type "Practice creating test cases.".
5. Click on "Add Task" button.

**Expected Result:** Task is not created, title field will be highlighted with a message "Title must have between 4 to 30 characters long.".

### TC-009 Create task with title being 256 characters long

**Requirements:** FR-001 Create Task, FR-006 Task Type, FR-008 Task Description

**Preconditions:**

- Application is loaded

**Input:**

- Title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur, deserunt adipisci blanditiis praesentium delectus. Rem iusto esse eum deserunt optio. Obcaecati a recusandae cum porro maiores, eum asperiores temporibus! Lorem ipsum dolor sit am"
- Type: "Daily"
- Description: "Practice creating test cases."

**Steps:**

1. Click on floating action button "+".
2. Select "Daily" type.
3. Click on title field and type "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur, deserunt adipisci blanditiis praesentium delectus. Rem iusto esse eum deserunt optio. Obcaecati a recusandae cum porro maiores, eum asperiores temporibus! Lorem ipsum dolor sit ame".
4. Click on description field and type "Practice creating test cases.".
5. Click on "Add Task" button.

**Expected Result:** Task is not created, title field will be highlighted with a message "Title must have between 4 to 30 characters long.".

### TC-010 Create task with description being a blank space

**Requirements:** FR-001 Create Task, FR-006 Task Type, FR-008 Task Description

**Preconditions:**

- Application is loaded

**Input:**

- Title: "Study QA"
- Type: "Daily"
- Description: " "

**Steps:**

1. Click on floating action button "+".
2. Select "Daily" type.
3. Click on title field and type "Study QA".
4. Click on description field and press the space bar once.
5. Click on "Add Task" button.

**Expected Result:** Task is created with correct input.

### TC-011 Create task with description being 1 character long

**Requirements:** FR-001 Create Task, FR-006 Task Type, FR-008 Task Description

**Preconditions:**

- Application is loaded

**Input:**

- Title: "Study QA"
- Type: "Daily"
- Description: "P"

**Steps:**

1. Click on floating action button "+".
2. Select "Daily" type.
3. Click on title field and type "Study QA".
4. Click on description field and type "P".
5. Click on "Add Task" button.

**Expected Result:** Task is created with correct input.

### TC-012 Create task with description being 255 characters long

**Requirements:** FR-001 Create Task, FR-006 Task Type, FR-008 Task Description

**Preconditions:**

- Application is loaded

**Input:**

- Title: "Study QA"
- Type: "Daily"
- Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur, deserunt adipisci blanditiis praesentium delectus. Rem iusto esse eum deserunt optio. Obcaecati a recusandae cum porro maiores, eum asperiores temporibus! Lorem ipsum dolor sit am"

**Steps:**

1. Click on floating action button "+".
2. Select "Daily" type.
3. Click on title field and type "Study QA".
4. Click on description field and type "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur, deserunt adipisci blanditiis praesentium delectus. Rem iusto esse eum deserunt optio. Obcaecati a recusandae cum porro maiores, eum asperiores temporibus! Lorem ipsum dolor sit am".
5. Click on "Add Task" button.

**Expected Result:** Task is created with correct input.

### TC-013 Create task with description being 256 characters long

**Requirements:** FR-001 Create Task, FR-006 Task Type, FR-008 Task Description

**Preconditions:**

- Application is loaded

**Input:**

- Title: "Study QA"
- Type: "Daily"
- Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur, deserunt adipisci blanditiis praesentium delectus. Rem iusto esse eum deserunt optio. Obcaecati a recusandae cum porro maiores, eum asperiores temporibus! Lorem ipsum dolor sit ame"

**Steps:**

1. Click on floating action button "+".
2. Select "Daily" type.
3. Click on title field and type "Study QA".
4. Click on description field and type "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur, deserunt adipisci blanditiis praesentium delectus. Rem iusto esse eum deserunt optio. Obcaecati a recusandae cum porro maiores, eum asperiores temporibus! Lorem ipsum dolor sit ame".
5. Click on "Add Task" button.

**Expected Result:** Task not is created, the description input will be highlighted with the message "Task description must not be longer than 255 characters.".

### TC-014 View task after creating it

**Requirements:** FR-002 View Tasks

**Preconditions:**

- Application is loaded

**Input:**

- Title: "Study QA"
- Type: "Daily"
- Description: "Practice creating test cases."

**Steps:**

1. Click on floating action button "+".
2. Select "Daily" type.
3. Click on title field and type "Study QA".
4. Click on description field and type "Practice creating test cases.".
5. Click on "Add Task" button.

**Expected Result:** Created tasks is after being created.

### TC-015 Mark a pending task as completed

**Requirements:** FR-003 Toggle Task Status

**Preconditions:**

- Application is loaded
- The task exists

**Input:**  
**Steps:**  
**Expected Result:** Task will be marked as completed and highlited in green.

### TC-016 Mark a completed task as pending

**Requirements:** FR-003 Toggle Task Status

**Preconditions:**

- Application is loaded
- The task exists

**Input:**  
**Steps:**  
**Expected Result:** Task will be marked as pending and will lose it's highlight and distinct color.

### TC-017 Edit task title

**Requirements:** FR-004 Edit Tasks

**Preconditions:**

- Application is loaded
- The task exists

**Input:**  
**Steps:**  
**Expected Result:** Task title will be updated after edition is done.

### TC-018 Edit task type

**Requirements:** FR-004 Edit Tasks

**Preconditions:**

- Application is loaded
- The task exists

**Input:**  
**Steps:**  
**Expected Result:** Task type will be updated after edition is done.

### TC-019 Edit task description

**Requirements:** FR-004 Edit Tasks

**Preconditions:**

- Application is loaded
- The task exists

**Input:**  
**Steps:**  
**Expected Result:** Task description will be updated after edition is done.

### TC-020 Delete task

**Requirements:** FR-005 Delete Task

**Preconditions:**

- Application is loaded
- The task exists

**Input:**  
**Steps:**  
**Expected Result:** Task will be delted from the system.

### TC-021 Assign Daily Type

**Requirements:** FR-006 Task Type  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Task type will be Daily.

### TC-022 Assign Weekly Type

**Requirements:** FR-006 Task Type  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Task type will be Weekly.

### TC-023 Assign Monthly Type

**Requirements:** FR-006 Task Type  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Task type will be Monthly.

### TC-024 Assign Yearly Type

**Requirements:** FR-006 Task Type  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Task type will be Yearly.

### TC-025 Verify four task groups

**Requirements:** FR-007 Separate Tasks by Type  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Task will appear in Tasks groups according to their type.

### TC-026 Verify automatic task grouping

**Requirements:** FR-007 Separate Tasks by Type  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Task will appear in Weekly Tasks group.

### TC-027 Verify a task appearing in only one group

**Requirements:** FR-007 Separate Tasks by Type  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Task will be displayed in only one task group.

### TC-028 Move task to another group after changing it's type

**Requirements:** FR-004 Edit Tasks, FR-006 Task Type, FR-007 Separate Tasks by Type  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Task will appear in Weekly Tasks group.

### TC-029 Task creation persists after reloading application

**Requirements:** FR-009 Save Created Tasks  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Tasks will remain even after reloading the application.

### TC-030 Task edition persists after reloading application

**Requirements:** FR-004 Edit Tasks, FR-009 Save Created Tasks  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Changes to the task will persist even after reloading the application.

### TC-031 Upon first loading application, default tasks are added to screen

**Requirements:** FR-010 Default Tasks  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** A list of default tasks will populate the application.

### TC-032 Upon deleting all tasks, default tasks are added not added again

**Requirements:** FR-010 Default Tasks  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Application will remain without any task.

### TC-033 Mark task as active

**Requirements:** FR-011 Active Task  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Task will be marked as active even after reloading the application.

### TC-034 Only one task is marked as active at a time

**Requirements:** FR-011 Active Task  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Previously active task will return to it's normal state and only selected task will be active.

### TC-035 Unmark task as active

**Requirements:** FR-011 Active Task  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Unmarked task will return to it's normal state.

### TC-036 Add steps to a task

**Requirements:** FR-12 Steps  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** A step will be added to the task with correct input.

### TC-037 Create step with title being a blank space

**Requirements:** FR-12 Steps  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Step will not be created and the title field will be highlighted and the message "Step title must be between 4 to 30 characters long." will appear.

### TC-038 Create step with title being 1 character long

**Requirements:** FR-12 Steps  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Step will not be created and the title field will be highlighted and the message "Step title must be between 4 to 30 characters long." will appear.

### TC-039 Create step with title being 255 characters long

**Requirements:** FR-12 Steps  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Step will not be created and the title field will be highlighted and the message "Step title must be between 4 to 30 characters long." will appear.

### TC-040 Create step with title being 256 characters long

**Requirements:** FR-12 Steps  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Step will not be created and the title field will be highlighted and the message "Step title must be between 4 to 30 characters long." will appear.

### TC-041 Create step without title

**Requirements:** FR-12 Steps  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Step will not be created and the title field will be highlighted and the message "Step title must be between 4 to 30 characters long." will appear.

### TC-042 Verify step belongs to a task

**Requirements:** FR-12 Steps  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Step will appear below correct task after being created.

### TC-043 Verify step persists after reloading application

**Requirements:** FR-12 Steps  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Step will persist even after reloading the application.

### TC-044 Edit step title

**Requirements:** FR-12 Steps  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Step title will be updated after editing is completed.

### TC-045 Delete steps from task

**Requirements:** FR-12 Steps  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** Step will be removed from Steps list.

### TC-046 User experience increases when task is completed

**Requirements:** FR-13 User Level  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** User experience will increase.

### TC-047 User experience decreases when task is uncompleted

**Requirements:** FR-13 User Level  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** User experience will decrease.

### TC-048 User level increases when required experience points are gathered

**Requirements:** FR-13 User Level  
**Preconditions:**  
**Input:**  
**Steps:**  
**Expected Result:** User level will increase.
