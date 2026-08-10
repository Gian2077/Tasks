import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { openDialog } from "./store/slices/tasks/taskSlice.js";
import { openDialog } from "./store/slices/dialog/dialogSlice.js";
import { checkCompleted, fetchTasks } from "./store/slices/tasks/taskThunks.js";
import { fetchSteps } from "./store/slices/steps/stepThunks.js";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Dialog } from "./components/Dialog";
import { ButtonFAB } from "./components/ButtonFAB";
import { Footer } from "./components/Footer";
import { TaskGroup } from "./components/TaskGroup/index.jsx";

function App() {
  const dispatch = useDispatch();
  const showDialog = useSelector((state) => state.dialog.showDialog);
  const groups = ["Daily", "Weekly", "Monthly", "Yearly"];
  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchSteps());
    dispatch(checkCompleted());
  }, []);
  return (
    <>
      <Header />
      <Main>
        {groups.map((group) => (
          <TaskGroup
            title={`${group} Tasks`}
            type={group}
            key={groups.indexOf(group)}
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
