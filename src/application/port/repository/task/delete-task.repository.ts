export default interface DeleteTaskRepository {
  deleteTask(taskId: string): Promise<void>
}
