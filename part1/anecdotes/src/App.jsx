import { useState } from 'react'

const Button = ({handleClick, text}) => {
 
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Anecdote = ({anecdote}) => {
  return (
    <div>{anecdote}</div>
  )
}

const Votes = ({text}) => {
  return (
    <div>{text}</div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map((item) => item = 0))
  const randomQuote = () => {
    const min = Math.ceil(0);
    const max = Math.floor(anecdotes.length);
    const random = Math.floor(Math.random() * (max - min) + min)
    setSelected(random)
  }

  const handleVote = () => {
    const nextVotes = [...votes]
    nextVotes[selected] = votes[selected] + 1
    setVotes(nextVotes)
  }

  const highestNumber = Math.max(...votes)
  const winner = anecdotes[votes.indexOf(highestNumber)]

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]}/>
      <Votes text={"has " + votes[selected] + " votes"} />
      <Button handleClick={randomQuote} text={"next anecdote"}/>
      <Button handleClick={handleVote} text={"vote"}/>
      <h1>Anecdote with the most votes</h1>
      <Anecdote anecdote={winner}/>
    </div>
  )
}

export default App