import { CreateTask } from '@domain/entity/task'

export default interface CreateTaskRepository {
  createTask(task: CreateTask): Promise<void>
}
