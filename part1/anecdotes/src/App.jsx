import { useState } from "react";

const App = () => {
  const anecdotes = [
    { anecdote: "If it hurts, do it more often.", votes: 0 },
    {
      anecdote: "Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      anecdote:
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votes: 0,
    },
    {
      anecdote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: 0,
    },
    { anecdote: "Premature optimization is the root of all evil.", votes: 0 },
    {
      anecdote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votes: 0,
    },
    {
      anecdote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      votes: 0,
    },
  ];

  const [data, setData] = useState(anecdotes);
  const [selected, setSelected] = useState(0);

  const handleNextAnecdote = () => setSelected(Math.floor(Math.random() * 6));
  const handleVote = () => {
    const newState = data.map((obj, index) => {
      if (index === selected) {
        return { ...obj, votes: obj.votes + 1 };
      }

      return obj;
    });

    setData(newState);
  };

  const findAnecdoteWithMostVotes = () => {
    const anecdoteWithMostVotes = data.reduce((prev, current) =>
      prev.votes > current.votes ? prev : current
    );

    return anecdoteWithMostVotes;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{data[selected].anecdote}</div>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <div>{findAnecdoteWithMostVotes().anecdote}</div>
      <div>{`has ${findAnecdoteWithMostVotes().votes} votes`}</div>
    </div>
  );
};

export default App;
