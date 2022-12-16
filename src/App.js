import './App.css'
import { useEffect, useState } from 'react'
import { Container } from '@mui/system'
import Header from './components/Header/Header'
import Definitions from './components/Definitions/Definitions'
import axios from 'axios'
import { DarkMode } from './components/DarkMode/DarkMode'

function App() {
  const [word, setWord] = useState('')
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState('en')
  const [darkMode, setDarkMode] = useState(true)

  const dictionaryApi = async () => {
    try {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`,
      )
      console.log(data)
      setMeanings(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dictionaryApi()
  }, [word, category])

  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? '#fff' : '#282c34',
        color: darkMode ? 'black' : 'white',
        transition: 'all 0.5s linear',
      }}
    >
      <Container maxWidth="md" className="flex flex-col h-1/2 items-center">
        <div className="absolute top-0 right-5 pt-2.5">
          <span>{darkMode ? 'Light' : 'Dark'} Mode</span>
          <DarkMode checked={darkMode} onChange={() => setDarkMode((prev) => !prev)} />
        </div>
        <Header
          darkMode={darkMode}
          word={word}
          setWord={setWord}
          category={category}
          setCategory={setCategory}
        />
        {meanings ? (
          <Definitions darkMode={darkMode} word={word} meanings={meanings} category={category} />
        ) : null}
      </Container>
    </div>
  )
}

export default App
