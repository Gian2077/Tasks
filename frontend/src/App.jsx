import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openDialog,
  closeDialog,
  resetTasks,
} from "./store/slices/tasks/taskSlice.js";
import { checkCompleted, fetchTasks } from "./store/slices/tasks/taskThunks.js";
import { fetchSteps } from "./store/slices/steps/stepThunks.js";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Dialog } from "./components/Dialog";
import { ButtonFAB } from "./components/ButtonFAB";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList/index.jsx";

function App() {
  const dispatch = useDispatch();
  const showDialog = useSelector((state) => state.tasks.showDialog);
  const lists = ["Daily", "Weekly", "Monthly", "Yearly"];
  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchSteps());
    dispatch(checkCompleted());
  }, []);
  return (
    <>
      <Header />
      <Main>
        {lists.map((list) => (
          <TaskList
            title={`${list} Tasks`}
            type={list}
            key={lists.indexOf(list)}
          />
        ))}
        <Dialog />
        <ButtonFAB onClick={() => dispatch(openDialog())} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
