import { Comment } from '@domain/entity/comment'

export default interface GetTaskCommentsUseCase {
  getTaskComments(taskId: string): Promise<Comment[]>
}
