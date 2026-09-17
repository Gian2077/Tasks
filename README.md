# Tasks

## Description

This is a full stack web application built with React, Spring Boot and PostgreSQL.

The goal of this project is to apply and reinforce the concepts I've learned while developing pratical experience with modern web technologies.

It also serves as a portfolio project that showcases my ability to design, build and integrate a complete web application from front-end to back-end.

## Characteristics

- Clean Architecture
- React Components
- Redux
- Model View Controller
- RESTful API
- Relational Database

## Project Structure

```
Tasks/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── api/
│   │   │   ├── axios.js
│   │   │   ├── taskService.js
│   │   │   └── stepService.js
│   │   ├── store/
│   │   │   ├── slices/
│   │   │   │   ├── date/
│   │   │   │   │   └── dateSlice.js
│   │   │   │   ├── dialog/
│   │   │   │   │   └── dialogSlice.js
│   │   │   │   ├── task/
│   │   │   │   │   ├── taskSlice.js
│   │   │   │   │   └── taskThunks.js
│   │   │   │   └── step/
│   │   │   │       ├── stepSlice.js
│   │   │   │       └── stepThunks.js
│   │   │   └── index.js
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   │   ├── index.jsx
│   │   │   │   └── Header.module.css
│   │   │   ├── Main/
│   │   │   │   ├── index.jsx
│   │   │   │   └── Main.module.css
│   │   │   ├── TaskGroup/
│   │   │   │   ├── index.jsx
│   │   │   │   └── TaskGroup.module.css
│   │   │   ├── Tasks/
│   │   │   │   ├── index.jsx
│   │   │   │   └── Tasks.module.css
│   │   │   ├── Task/
│   │   │   │   ├── index.jsx
│   │   │   │   ├── Task.module.css
│   │   │   ├── EmptyState/
│   │   │   │   ├── index.jsx
│   │   │   │   └── EmptyState.module.css
│   │   │   ├── ButtonFAB/
│   │   │   │   ├── index.jsx
│   │   │   │   └── ButtonFAB.module.css
│   │   │   ├── ButtonTaskToggleStatus/
│   │   │   │   ├── index.jsx
│   │   │   │   └── ButtonTaskToggleStatus.module.css
│   │   │   ├── ButtonTaskEdit/
│   │   │   │   ├── index.jsx
│   │   │   │   └── ButtonTaskEdit.module.css
│   │   │   ├── ButtonTaskDelete/
│   │   │   │   ├── index.jsx
│   │   │   │   └── ButtonTaskDelete.module.css
│   │   │   ├── Dialog/
│   │   │   │   ├── index.jsx
│   │   │   │   └── Dialog.module.css
│   │   │   ├── FormTask/
│   │   │   │   ├── index.jsx
│   │   │   │   └── FormTask.module.css
│   │   │   └── Footer/
│   │   │       ├── index.jsx
│   │   │       └── Footer.module.css
│   │   ├── utils/
│   │   │   ├── expConfig.js
│   │   │   ├── expConstants.js
│   │   │   └── shouldReset.js
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   └── App.css
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── gian2077/
│   │   │   │           └── tasks_api/
│   │   │   │               ├── controller/
│   │   │   │               │   ├── TaskController.java
│   │   │   │               │   └── StepController.java
│   │   │   │               ├── service/
│   │   │   │               │   ├── TaskService.java
│   │   │   │               │   └── StepService.java
│   │   │   │               ├── repository/
│   │   │   │               │   ├── TypeRepository.java
│   │   │   │               │   ├── TaskRepository.java
│   │   │   │               │   └── StepRepository.java
│   │   │   │               ├── model/
│   │   │   │               │   ├── Type.java
│   │   │   │               │   ├── Task.java
│   │   │   │               │   └── Step.java
│   │   │   │               ├── dto/
│   │   │   │               │   ├── TaskRequestDTO.java
│   │   │   │               │   ├── TaskResponseDTO.java
│   │   │   │               │   └── StepResponseDTO.java
│   │   │   │               ├── config/
│   │   │   │               │   └── CorsConfiguration.java
│   │   │   │               └── TasksApiApplication.java
│   │   │   └── resources/
│   │   │   │   └── application.properties
│   │   └── test/
│   │       └── java/
│   │           └── com/
│   │               └── gian2077/
│   │                   └── tasks_api/
│   │                       └── TasksApiApplicationTests.java
│   └── pom.xml
├── database/
│   └── V1__init.sql
├── docs/
│   └── Software Requirements Specification.md
└── README.md
```

## Prerequisites

- **Node.js 24.11.1**
- **npm 11.6.4**
- **Vite 7.2.4**
- **React 19.2.0**
- **Axios 1.18.1**
- **Java JDK 25**
- **IDE** (Visual Studio Code, IntelliJ)

## Quick Start

### 1. Setup Database

1. Connect to PostgreSQL

```bash
psql -U postgres
```

2. Create database:

```sql
CREATE DATABASE tasks_db;
```

3. Connect to database

```sql
\c tasks_db
```

4. Populate database

```sql
\i `../database/V1__init.sql
```

### 2. Setup API

1. Create database connection

Edit `backend/src/main/resources/application.properties` with your credentials

```java
spring.datasource.url=jdbc:postgresql://localhost/tasks_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

2. Compile tasks_api

```bash
mvn compile
mvn package
```

3. Run Java JAR

```bash
java -jar target/app.jar
```

### 3. Setup Fron-end

1. Install dependencies

```bash
cd frontend
npm install
```

2. Run Vite

```bash
cd frontend
npm run dev
```

## How To Use

### 1. First Loading

1. Upon first loading the application, the user will have a series of default tasks that are provided through the database.

### 2. Adding Tasks

1. The user clicks in the floating action button "+".
2. The user fills the form with the task type, title and description.
3. The user clicks on "Add Task" button.
4. The task will be placed last in the task list corresponding to the tasks assigned type.

### 3. Deleting Tasks

1. The user clicks in the x icon action button near the task's name.
2. The task is deleted permanently and removed from the list.

### 4. Editing Tasks

1. The user clicks in the pen icon action button near the task's name.
2. The task form will be open with the task's type, title and description auto-filled.
3. The user edits any field.
4. The user clicks on "Edit Task" button
5. The task information will be update in the local storage and displayed with edited information.

### 4.2 Changing a Task from It's Task List

1. Upon editing a task type in "Editing Tasks", the task will automatically appear in the appropriate task list.

## Resources

### [Software Requirements Specification](https://github.com/Gian2077/Tasks/blob/main/docs/Software%20Requirements%20Specification.md)

## Support

This file serves as a guide on how to setup the project and how to use it, use cases will be added to the **docs** folder and links will be available at the **Resources** section in the near future.
