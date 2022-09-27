export type Comment = {
  id: string,
  created_at: string,
  content: string,
  note_id: string,
  user_id: string | undefined,
}

export type Note = {
  id: string,
  created_at: string,
  content: string,
  user_id: string | undefined,
  title: string,
  comments: Comment[],
}
export type EditedComment = Omit<Comment, 'created_at' | 'note_id' | 'user_id'>
export type EditedNote = Omit<Note, 'created_at' | 'comments' | 'user_id'>