import { CreateTask } from '@domain/entity/task'

export default interface CreateTaskUseCase {
  createTask(task: CreateTask): Promise<void>
}
