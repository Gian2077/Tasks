// import { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openDialog, closeDialog } from "./store/slices/tasks/taskSlice.js";
import "./App.css";
// import taskContext from "./context/TaskContext";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Dialog } from "./components/Dialog";
import { ButtonFAB } from "./components/ButtonFAB";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList/index.jsx";
import { useEffect } from "react";
import { fetchTasks } from "./store/slices/tasks/taskThunks.js";

function App() {
  // const { tasks, showDialog, openDialog, closeDialog } = use(taskContext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);
  const tasks = useSelector((state) => state.tasks.tasks);
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
            // tasks={tasks.filter((task) => task.type === list)}
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
