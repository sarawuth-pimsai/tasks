import CancelOwnerCommentUseCase from '@domain/use-case/comment/cancel-owner-comment.use-case'

export type CancelOwnerCommentServiceContext = {}

export default class CancelOwnerCommentService
  implements CancelOwnerCommentUseCase
{
  cancelOwnerComment(userId: string, commentId: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
