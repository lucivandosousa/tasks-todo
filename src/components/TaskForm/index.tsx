import styles from "./TaskForm.module.css"

interface TaskFormProps {
  btnText: string
}

export default function TaskForm({ btnText }: TaskFormProps) {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título</label>
        <input type="text" name="title" placeholder="Título da tarefa..."/>
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}