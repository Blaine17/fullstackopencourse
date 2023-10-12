const Sum = ({ parts }) => {
 const sum = parts.reduce((currentsum, part) => currentsum + part.exercises, 0)
  console.log(sum)
  return (
    <div>
       <h3>{"toal of " + sum + " exercises"}</h3>
    </div>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>
       {name + " " + exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  console.log(parts)
  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises}/>
        )}
    </div>
  )
}

const Header = ({ name }) => {
  console.log(name)
  return (
    <h1>
       {name}
    </h1>
  )
}

const Section = ({ section }) => {
  console.log(section)
  return (
    <div>
      <Header name={section.name}/>
      <Content parts={section.parts}/>
      <Sum parts={section.parts} />
    </div>
  )
}

const Course = ({ course }) => {
  console.log(course)
  return (
    <div>
      {course.map(section =>
      <Section key={section.id} section={section} />
        )}
    </div>
  )
}

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course course={course} />
}

export default App