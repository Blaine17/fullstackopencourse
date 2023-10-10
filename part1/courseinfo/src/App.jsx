const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  console.log(props.content)
  return (
    <p>{props.content.part} {props.content.exercise}</p>
  )
}

const Content = (props) => {
  return (
   <div>
    <Part content={props.content[0]}/>
    <Part content={props.content[1]}/>
    <Part content={props.content[2]}/>
   </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const content =[
    {part: 'Fundamentals of React', exercise: 10},
    {part: 'Using props to pass data', exercise: 7},
    {part: 'State of a component', exercise: 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App