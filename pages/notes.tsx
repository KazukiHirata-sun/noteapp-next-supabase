import { GetStaticProps, NextPage } from 'next'
import { DocumentTextIcon, LogoutIcon } from '@heroicons/react/solid'
import { supabase } from '../utils/supabase'
import { Layout } from '../components/Layout'

import { Note } from '../types/types'
import { NoteItem } from '../components/NoteItem'
import { NoteForm } from '../components/NoteForm'

export const getStaticProps: GetStaticProps = async () => {
  console.log('ISR invoked - note page')
  const { data: notes, error } = await supabase
    .from('notes')
    .select('*')
    .order('created_at', { ascending: true })
  if (error) {
    throw new Error(`${error.message}: ${error.details}`)
  }
  return {
    props: { notes },
    revalidate: false,
  }
}

type StaticProps = {
  notes: Note[]
}

const Notes: NextPage<StaticProps> = ({ notes }) => {
  const signOut = () => {
    supabase.auth.signOut()
  }
  return (
    <Layout title="Notes">
      <LogoutIcon
        className="mb-6 h-6 w-6 cursor-pointer text-blue-500"
        onClick={signOut}
      />
      <DocumentTextIcon className="h-8 w-8 text-blue-500" />
      <ul className="my-2">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            user_id={note.user_id}
          />
        ))}
      </ul>
      <NoteForm />
    </Layout>
  )
}

export default Notes
