import { FaEdit, FaTrashAlt } from "react-icons/fa"
import { ITask } from "../../interfaces/ITask"
import styles from "./TaskList.module.css"

interface TaskListProps {
  taskList: ITask[]
}

export default function TaskList({ taskList }: TaskListProps) {
  return (
    <>
      {taskList.length === 0 && <p>Lista de tarefas vazia</p>}

      {taskList.map((task) => (
        <div key={task.id} className={styles.task_list}>
          <div>
            <h4>{task.title}</h4>
          </div>
          <div className={styles.buttons_icons}>
            <button className={styles.icon}><FaEdit /></button>
            <button className={styles.icon}><FaTrashAlt /></button>
          </div>
        </div>
      ))}
    </>
  )
}