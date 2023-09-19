import { UpdateOwnerTaskStatus } from '@domain/entity/task'

export default interface UpdateOwnerTaskStatusUseCase {
  updateOwnerTaskStatus(task: UpdateOwnerTaskStatus): Promise<void>
}
