# Software Requirements Specification

### Tasks

**Version: 2.0**

**Author: Gianlucca**

## Revision History

|    Date    | Version |  Description  |  Author   |
| :--------: | :-----: | :-----------: | :-------: |
| 06/29/2026 |   1.0   | Initial Draft | Gianlucca |
| 07/13/2026 |   2.0   |  Version 2.0  | Gianlucca |

## 1. Introduction

### 1.1 Document Purpose

This document defines the functional and non-functional requirements for the **Tasks** application. It serves as a reference for developers, testers, project managers, and stakeholders throughout the software development cycle.

### 1.2 Document Conventions

- **Shall** indicates a mandatory requirement.
- **Should** indicates a recommended requirement.
- **May** indicates an optional feature.
- Functional Requirements are identified with the prefix **FR**.
- Non-functional Requirements are identified with the prefix **NFR**.

### 1.3 Intended Audience

This document is intended for:

- Tech Recruiters

### 1.4 Project Scope

The Tasks application enables users to manage personal tasks by creating, editing, organizing, completing, and deleting them. The application aims to provide a simple, intuitive, and efficient task management experience while ensuring that task data persists between sessions.

## 2. Overall Description

#### 2.1 Product Perspective

The application is a standalone task management system that allows users to maintain a personal to-do list. It provides basic CRUD (Create, Read, Update, Delete) functionality and stores task information both locally and in a backend database.

### 2.2 User Classes and Characteristics

#### **User**

- Creates tasks.
- Edits task Information.
- Marks tasks as completed or pending.
- Deletes unwanted tasks.
- Has basic computer and web browser knowledge.

### 2.3 Operating Environment

- Modern web browsers (Chrome, Firefox, Edge, Safari).
- Desktop and mobile devices.
- Internet connection required for default tasks database.
- Local storage supported for offline persistence.

### 2.4 Design Constraints

- Responsive user interface.
- REST API communication.
- Compatible with modern JavaScript/TypeScript environments.
- Must follow accessibility and usability best practices.

### 2.5 Assumptions & Dependencies

- Users have access to supported web browsers.
- Backend service is available when User first loads the application.
- Database connection is enabled in the browser.
- JavaScript is enabled in the browser.

## 3. Specific Requirements

### 3.1 Functional Requirements

#### Version 1.0

- **FR-001 Create Task**

  The System shall allow the User to create new tasks.

  ##### **Acceptance Criteria**
  - User can create a task with title, type and description.
  - Newly created tasks appears immediately in the task list.
  - Upon creation, tasks must have a unique identifier (id).
  - Upon creation, tasks must have the date of creation and date of completion (with null value).

- **FR-002 View Tasks**

  The System shall display all created tasks to the User.

  ##### **Acceptance Criteria**
  - Tasks are listed after the application loads.

- **FR-003 Toggle Task Status**

  The System shall allow the User to toggle a task status between pending and completed.

  ##### **Acceptance Criteria**
  - Status changes instantly.
  - Completed and pending tasks are clearly distinguishable through visual indication.

- **FR-004 Edit Tasks**

  The System shall allow the User to edit existing tasks.

  ##### **Acceptance Criteria**
  - User can modify the title, type, and description of existing tasks.
  - Changes are saved immediately after confirmation.

- **FR-005 Delete Task**

  The System shall allow the User to delete undesired tasks.

  ##### **Acceptance Criteria**
  - User can remove a task.
  - Deleted tasks are permanently removed.

- **FR-006 Task Type**

  The System shall allow the User to assign a type to each task.

  ##### **Acceptance Criteria**
  - User can select a predefined type (e.g, daily, weekly, monthly and yearly).

- **FR-007 Separate Tasks by Type**

  The System shall organize tasks into four lists according to the predefined types: **Daily**, **Weekly**, **Monthly**, and **Yearly**.

  ##### **Acceptance Criteria**
  - Tasks are automatically placed in the appropriate list according to their assigned type.
  - The System displays four separate task lists for each type: Daily, Weekly, Monthly, and Yearly.
  - A task appears in only one list at a time.
  - When a task's type is changed, it is automatically moved to the corresponding list.
  - The task organization is preserved after the application is refreshed or restarted.

- **FR-008 Task Description**

  The System shall allow the user to add or edit a textual description for each task.

  ##### **Acceptance Criteria**
  - Description is optional.
  - Description is saved with the task.

- **FR-009 Save Created Tasks**

  The System shall persist tasks after they are created or modified.

  ##### **Acceptance Criteria**
  - Tasks remain available after refreshing or restarting the application.
  - All edits are stored automatically.

#### Version 2.0

- **FR-010 Default Tasks**

  The System shall, upon first loading the application, populate the application with a series of default tasks.

  ##### **Acceptance Criteria**
  - The default tasks must come from a remote database.
  - All tasks must be marked as pending by default.
  - If a task has no description in the database, it's description will be "This Task has no description" by default.

#### Version 3.0

- **FR-011 Active Task**

  The System shall allow the User to mark a task as active.

  ##### **Acceptance Criteria**
  - A task marked as active must have a distinct color from tasks completed or pending in order clearly distinguish between them.
  - Only one task can be marked as active.
  - Upon marking a task as active, other previously active task will be unmarked.

- **FR-12 Steps**

  The System shall allow the User to break down complex tasks into smaller steps.

  ##### **Acceptance Criteria**
  - Steps must share all functional characteristics of a task.
  - A step must belong to a task.
  - Steps can have minor steps.

- **FR-13 Minor Steps**

  The System shall alow the user to break down steps into minor steps.

  ##### **Acceptance Criteria**
  - Minor steps must share all functional characteristics of a task, except having child steps.
  - A minor step can not have child steps.

### 3.2 Non-functional Requirements

- **NFR-001 Performance**

  The System shall load the Task list within **2 seconds** under normal operating conditions.

- **NFR-002 Usability**

  The System shall provide an intuitive and responsive User Interface requiring minimal training.

- **NFR-003 Reliability**

  The System shall preserve Task Data without loss during normal application usage.

- **NFR-004 Compatibility**

  The System shall support the latest two versions of major web browsers.

- **NFR-005 Maintainability**

  The Source Code shall be modular, documented, and follow established coding standards.

- **NFR-006 Security**

  The System shall validate all User input to prevent invalid or malicious data.

- **NFR-007 Availability**

  Services should maintain at least **99% availability**.

- **NFR-008 Scalability**

  The System shall efficiently support at least 1,000 tasks per User without noticeable performance degradation.

- **NFR-009 Accessibility**

  The System should conform to WCAG 2.1 Level AA Accessibility Guidelines.

- **NFR-010 Responsiveness**

  The User Interface shall adapt to desktop, tablet, and mobile screen sizes.
