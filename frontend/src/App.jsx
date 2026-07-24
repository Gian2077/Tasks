// import { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openDialog,
  closeDialog,
  resetTasks,
} from "./store/slices/tasks/taskSlice.js";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Dialog } from "./components/Dialog";
import { ButtonFAB } from "./components/ButtonFAB";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList/index.jsx";
import { useEffect } from "react";
import { checkCompleted, fetchTasks } from "./store/slices/tasks/taskThunks.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(checkCompleted());
  }, []);
  const showDialog = useSelector((state) => state.tasks.showDialog);
  const lists = ["Daily", "Weekly", "Monthly", "Yearly"];
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
