import { Comment, CommentFilter } from '@domain/entity/comment'

export default interface GetCommentsRepository {
  getComments(filter: CommentFilter): Promise<Comment[]>
}
