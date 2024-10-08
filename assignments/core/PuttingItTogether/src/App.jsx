import { useState } from 'react'
import './App.css'
import PersonCard from './components/PersonCard.jsx'

var people =[{"firstName":"jane","lastName":"Messoued", "age": 45, "hairColor":"red"},
  {"firstName":"jane","lastName":"Messoued", "age": 33, "hairColor":"red"},
  {"firstName":"jane","lastName":"Messoued", "age": 45, "hairColor":"red"},
  {"firstName":"jane","lastName":"Messoued", "age": 45, "hairColor":"red"}
  ]

function App() {
  

  return (
    <>
    {people.map (person => {
      return <PersonCard firstName={person.firstName} lastName={person.lastName } age={person.age} hairColor={person.hairColor} />
    }
       
    )}
    </>
  )
}

export default App
