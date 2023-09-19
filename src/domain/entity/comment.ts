export type Comment = {
  id: string
  description: string
  taskId: string
  userId: string
  created: Date
}

export type CreateComment = Omit<Comment, 'id' | 'created'>
