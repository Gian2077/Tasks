import { use, useEffect, useState } from "react";
import {
  getTasks as getTasksService,
  createTask as createTaskService,
  updateTask as updateTaskService,
  deleteTask as deleteTaskService,
} from "../api/taskService.js";
import TaskContext from "../context/TaskContext.js";
import DateContext from "../context/DateContext.js";
export function TaskProvider({ children }) {
  const { DAY, DAY_WEEK, MONTH, YEAR } = use(DateContext);
  const key = "tasks";
  const savedTasks = localStorage.getItem(key);
  const [tasks, setTasks] = useState(savedTasks ? JSON.parse(savedTasks) : []);
  const [nextId, setNextId] = useState(
    savedTasks ? JSON.parse(localStorage.getItem("nextId")) : 1,
  );
  const [showDialog, setShowDialog] = useState(false);
  const [targetTask, setTargetTask] = useState();
  async function fetchTasks() {
    try {
      const response = await getTasksService();
      setTasks(response.data);
      localStorage.setItem(key, JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error(error);
    }
    return response.data;
  }
  async function initialize() {
    const defaultTasks = await fetchTasks();
    const nextId =
      defaultTasks.length > 0
        ? Math.max(...defaultTasks.map((task) => task.id)) + 1
        : 1;
    localStorage.setItem("nextId", nextId);
  }
  useEffect(() => {
    if (!savedTasks) {
      initialize();
    }
  }, []);
  useEffect(() => {
    setTasks((prev) => {
      return prev.map((task) => {
        if (!task.completed) return task;
        const dateObject = new Date(task.dateCompleted);
        const dayWeekCompleted = Number(dateObject.getUTCDay());
        const dayCompleted = Number(
          task.dateCompleted.split("T")[0].split("-")[2],
        );
        const monthCompleted = Number(
          task.dateCompleted.split("T")[0].split("-")[1],
        );
        const yearCompleted = Number(
          task.dateCompleted.split("T")[0].split("-")[0],
        );
        switch (task.type) {
          case "Daily":
            if (MONTH !== monthCompleted || DAY > dayCompleted) {
              return {
                ...task,
                completed: false,
                dateCompleted: null,
              };
            }
            break;
          case "Weekly":
            if (DAY !== dayCompleted && DAY_WEEK === 0) {
              return {
                ...task,
                completed: false,
                dateCompleted: null,
              };
            } else if (DAY_WEEK < dayWeekCompleted) {
              return {
                ...task,
                completed: false,
                dateCompleted: null,
              };
            }
            break;
          case "Monthly":
            if (YEAR !== yearCompleted || MONTH > monthCompleted) {
              return {
                ...task,
                completed: false,
                dateCompleted: null,
              };
            }
            break;
          case "Yearly":
            if (YEAR > yearCompleted) {
              return {
                ...task,
                completed: false,
                dateCompleted: null,
              };
            }
            break;
          default:
            return;
        }
        return task;
      });
    });
  }, []);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    localStorage.setItem("nextId", nextId);
  }, [nextId]);
  const openDialog = (task) => {
    if (task) {
      setTargetTask(task);
    }
    setShowDialog(true);
  };
  const closeDialog = () => {
    setShowDialog(false);
    setTargetTask(null);
  };
  const addTask = (formData) => {
    setTasks((prevState) => {
      let nextId = localStorage.getItem("nextId");
      setNextId(parseInt(nextId) + 1);
      const task = {
        id: nextId++,
        publicId: crypto.randomUUID(),
        title: formData.get("title"),
        type: formData.get("type"),
        description:
          formData.get("description") || "This Task has no description.",
        completed: false,
        dateCreated: new Date().toISOString(),
        dateCompleted: null,
      };
      return [...prevState, task];
    });
  };
  const toggleTask = (target) => {
    setTasks((prevState) => {
      return prevState.map((task) => {
        if (task.id === target.id) {
          console.log(target);
          return {
            ...task,
            completed: !task.completed,
            dateCompleted: !task.completed ? new Date().toISOString() : null,
          };
        }
        return task;
      });
    });
  };
  const editTask = (formData) => {
    setTasks((prevState) => {
      return prevState.map((task) => {
        if (task.id === targetTask.id) {
          return {
            ...task,
            title: formData.get("title"),
            type: formData.get("type"),
            description: formData.get("description"),
          };
        }
        return task;
      });
    });
  };
  const deleteTask = (target) => {
    setTasks((prevState) => {
      return prevState.filter((task) => task.id != target.id);
    });
  };
  return (
    <TaskContext
      value={{
        tasks,
        showDialog,
        openDialog,
        closeDialog,
        targetTask,
        addTask,
        toggleTask,
        editTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext>
  );
}
