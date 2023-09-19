export default interface CancelOwnerCommentUseCase {
  cancelOwnerComment(userId: string, commentId: string): Promise<void>
}
