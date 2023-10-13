import { useState } from 'react'

const Person = ({ person }) => {
  console.log(person)
  return (
    <div>
       {`${person.name}  ${person.number}`}
    </div>
  )
}

const Filter = ({ value, onChange}) => {
  return (
    <div>
      filter shown with <input value={value} onChange={onChange} />
    </div>
  )
}

const Input = ({ value, onChange }) => {
  return (
      <input value={value} onChange={onChange} /> 
  )
}

const Form = ({ onSubmit, value, onChange }) => {
  console.log(value[1])
  console.log(onChange)
  return (
    <form onSubmit={onSubmit}>
        Name: <Input value={value[0]} onChange={onChange[0]}/>
        Number: <Input value={value[1]} onChange={onChange[1]}/>
        <button type="submit">add</button>
    </form>
  )
}

const FilteredPersons = ({ filteredaraay }) => {
  
  return (
    <>
       {filteredaraay.map((person) => <div key={person.name}> {`${person.name}  ${person.number}`}</div>
      )}
    </>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('Button clicked', newName)
    // check if already in phonebook 
    let check = false
    persons.map((person) => {
      console.log(person.name, newName)
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`)
        setNewName("")
        setNewNumber("")
        check = true
        return
      }
    })
    //leave function if already in phonebook
    if (check) {
      return
    }
    const newPerson = persons.concat({name: newName, number: newNumber})
    console.log(newPerson)
    setPersons(newPerson)
    setNewNumber("")
    setNewName("")
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNewSearch = (event) => {
    setNewSearch(event.target.value)
  }

  console.log(newSearch)
  let search = newSearch.toLowerCase()
  const filteredaraay = persons.filter((person) => person.name.toLowerCase().startsWith(search))
  console.log(filteredaraay)

  console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} onChange={handleNewSearch}/>
      <h3>Add a new</h3>
      <Form onSubmit={addPerson} value={[newName,newNumber]} onChange={[handleNameChange, handleNumberChange]}/>
      <h2>Numbers</h2>
      <FilteredPersons filteredaraay={filteredaraay}/>
    </div>
  )
}

export default App
