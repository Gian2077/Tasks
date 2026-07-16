import { use } from "react";
import "./App.css";
import taskContext from "./context/TaskContext";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Dialog } from "./components/Dialog";
import { ButtonFAB } from "./components/ButtonFAB";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList/index.jsx";

function App() {
  const { tasks, showDialog, openDialog, closeDialog } = use(taskContext);
  const lists = ["Daily", "Weekly", "Monthly", "Yearly"];
  return (
    <>
      <Header />
      <Main>
        {lists.map((list) => (
          <TaskList
            title={`${list} Tasks`}
            tasks={tasks.filter((task) => task.type === list)}
            key={lists.indexOf(list)}
          />
        ))}
        <Dialog isOpen={showDialog} onClose={closeDialog} />
        <ButtonFAB onClick={() => openDialog()} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
