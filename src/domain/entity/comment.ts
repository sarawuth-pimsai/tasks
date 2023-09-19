export type Comment = {
  id: string
  description: string
  taskId: string
  userId: string
  isDeleted: boolean
  created: Date
}

export type CreateComment = Omit<Comment, 'id' | 'created'>

export type CommentFilter = Partial<
  Omit<Comment, 'id' | 'description' | 'created'>
>
