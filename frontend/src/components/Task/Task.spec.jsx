import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Task } from ".";
import styles from "./Task.module.css";
const testStore = configureStore({
  reducer: {
    tasks: (state = {}) => state,
    steps: (state = { steps: [] }) => state,
    dialog: (state = { showDialog: false, targetTask: null }) => state,
  },
});
describe("Task", () => {
  const task = {
    id: 1,
    publicId: crypto.randomUUID(),
    title: "Study Jest",
    description: "Learn Unit Testing",
    completed: true,
    dateCreated: new Date().toISOString(),
    dateCompleted: null,
  };
  test("should render component", () => {
    expect(
      render(
        <Provider store={testStore}>
          <Task task={task} />
        </Provider>,
      ),
    ).toBeTruthy();
  });
  test("should have completed class when task is completed", () => {
    render(
      <Provider store={testStore}>
        <Task task={task} />
      </Provider>,
    );
    const summary = screen.getByText("Study Jest").closest("summary");
    expect(summary).toHaveClass(styles.completed);
  });
});
