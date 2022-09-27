import create from 'zustand'
import { EditedComment, EditedNote } from './types/types'

type State = {
  editedComment: EditedComment
  editedNote: EditedNote
  updateEditedComment: (payload: EditedComment) => void
  updateEditedNote: (payload: EditedNote) => void
  resetEditedComment: () => void
  resetEditedNote: () => void
}

const useStore = create<State>((set, _) => ({
  editedComment: { id: '', content: '' },
  editedNote: { id: '', content: '', title: '' },
  updateEditedComment: (payload) =>
    set({
      editedComment: {
        id: payload.id,
        content: payload.content,
      },
    }),
  resetEditedComment: () =>
    set({
      editedComment: {
        id: '',
        content: '',
      },
    }),
  updateEditedNote: (payload) =>
    set({
      editedNote: {
        id: payload.id,
        content: payload.content,
        title: payload.title,
      },
    }),
  resetEditedNote: () =>
    set({
      editedNote: {
        id: '',
        content: '',
        title: '',
      },
    }),
}))

export default useStore
