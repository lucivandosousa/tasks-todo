import { useState } from "react"
import styles from "./App.module.css"
import Footer from './components/Footer'
import Header from './components/Header'
import TaskForm from "./components/TaskForm"
import { ITask } from "./interfaces/ITask"
import TaskList from "./components/TaskList"

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  function removeTask(id: string) {
    setTaskList!((current) => current.filter(task => task.id !== id))
  }

  return (

    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar tarefa" taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} removeTask={removeTask}/>
        </div>
      </main>
      <Footer />
    </div>

  )
}

export default App
