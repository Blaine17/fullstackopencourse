import { useState } from 'react'

const Button = ({handleClick, text}) => {
  console.log(handleClick)
  return (
    <button onClick={() => handleClick(text)}>{text}</button>
  )
  
}
const Feedback = ({handleClick}) => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClick} text={"good"}/>
      <Button handleClick={handleClick} text={"neutral"}/>
      <Button handleClick={handleClick} text={"bad"}/>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedbackClick = (buttonType) => {
    if (buttonType === "good") {
      setGood(good + 1)
    }
    if (buttonType === "neutral") {
      setNeutral(neutral + 1)
    }
    if (buttonType === "bad") {
      setBad(bad + 1)
    }
  }
  console.log("good", good)
  console.log("neutral", neutral)
  console.log("bad", bad)
  return (
    <div>
      <Feedback handleClick={feedbackClick} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App