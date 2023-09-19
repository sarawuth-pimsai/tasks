import { UpdateTask } from '@domain/entity/task'

export default interface UpdateTaskRepository {
  updateTask(task: UpdateTask): Promise<void>
}
