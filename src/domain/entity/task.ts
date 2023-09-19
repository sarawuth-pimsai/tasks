export type TaskStatus = 'TODO' | 'DONE' | 'IN_PROGRESS' | 'BLOCK'

export type Task = {
  id: string
  topic: string
  description: string
  status: TaskStatus
  userId: string
  created: string
}

export type TaskFilter = Partial<
  Omit<Task, 'id' | 'topic' | 'description' | 'created'>
>
