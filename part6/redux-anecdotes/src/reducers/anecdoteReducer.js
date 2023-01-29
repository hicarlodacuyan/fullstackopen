import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      return [...state, action.payload]
    },
    newVote(state, action) {
      const id = action.payload.id
      return state.map((anecdote) =>
        anecdote.id === id
          ? action.payload
          : anecdote
      )
    },
    setAnecdotes(_, action) {
      return action.payload
    }
  }
})

export const { createAnecdote, newVote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const appendAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(newAnecdote))
  }
}

export const updateVote = ({id, content, votes}) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.vote(id, { content, votes: votes + 1 })
    dispatch(newVote(anecdote))
  }
}

export default anecdoteSlice.reducer
