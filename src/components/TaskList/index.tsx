import { FaCheckSquare, FaTrashAlt } from "react-icons/fa"
import { ITask } from "../../interfaces/ITask"
import styles from "./TaskList.module.css"

interface TaskListProps {
  taskList: ITask[]
  removeTask: (id: string) => void
  handleTaskCompleted: (id: string) => void
}

export default function TaskList({ taskList, removeTask, handleTaskCompleted }: TaskListProps) {
  return (
    <>
      {taskList.length === 0 && <p>A lista de tarefas está vazia</p>}

      {taskList.map((task) => (
        <div key={task.id} className={styles.task_list}>
          <div>
            <h4 className={task.completed ? styles.itemCheck : ""}>{task.title}</h4>
          </div>
          <div className={styles.buttons_icons}>
            <button className={styles.icon} onClick={() => handleTaskCompleted(task.id)}><FaCheckSquare /></button>
            <button className={styles.icon} onClick={() => removeTask(task.id)}><FaTrashAlt /></button>
          </div>
        </div>
      ))}
    </>
  )
}