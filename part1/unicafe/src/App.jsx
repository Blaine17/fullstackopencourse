import { useState } from 'react'

const Button = ({handleClick, text}) => {
  console.log(handleClick)
  return (
    <button onClick={() => handleClick(text)}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
    
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

  console.log("good in stats", good === 0)
  console.log("neutral in stats", neutral === 0)
  console.log("bad in stats", bad === 0)
  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <tr>
              <StatisticLine text="good" value={good}/>
            </tr>
            <tr>
            < StatisticLine text="neutral" value={neutral}/>
            </tr>
            <tr>
              <StatisticLine text="bad" value={bad}/>
            </tr>
            <tr>
            <StatisticLine text="all" value={good + neutral + bad}/>
            </tr>
            <tr>
            <StatisticLine text="average" value={(good + (bad*-1)) / (good + neutral + bad)}/>
            </tr>
            <tr>
              <StatisticLine text="positive" value={((good/(good + neutral + bad))*100 + " %")}/>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <p>no feedback given</p>
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