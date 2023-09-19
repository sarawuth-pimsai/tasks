import { CreateComment } from '@domain/entity/comment'

export default interface CreateCommentUseCase {
  createComment(params: CreateComment): Promise<void>
}
