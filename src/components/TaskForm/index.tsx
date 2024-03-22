import styles from "./TaskForm.module.css"
import { ITask } from "../../interfaces/ITask"
import { ChangeEvent, FormEvent, useState } from "react"
interface TaskFormProps {
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

export default function TaskForm({ btnText, taskList, setTaskList }: TaskFormProps) {

  const [textInput, setTextInput] = useState("")

  function addTask(e: FormEvent<HTMLFormElement>) {

    e.preventDefault()

    const newTask: ITask = {
      id: crypto.randomUUID(),
      title: textInput,
    }

    setTaskList!((current) => [...current, newTask])
    setTextInput("")
  
  }

  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setTextInput(e.target.value)
  }

  return (
    <form className={styles.form} onSubmit={addTask}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título da tarefa</label>
        <input type="text" name="title" placeholder="Título da tarefa..." onChange={handleChangeInput} value={textInput}/>
      </div>
      <input type="submit" value={btnText}/>
    </form>
  )
}