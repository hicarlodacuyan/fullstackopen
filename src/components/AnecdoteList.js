import { useSelector, useDispatch } from 'react-redux'
import { updateVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes)
  const dispatch = useDispatch()
  
  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

  const addVote = (anecdote) => {
    dispatch(updateVote(anecdote))
    dispatch(setNotification(`you voted for '${anecdote.content}'`, 3))
  }

  return (
    <div>
      {sortedAnecdotes
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => addVote(anecdote)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default AnecdoteList
