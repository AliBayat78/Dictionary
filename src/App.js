import './App.css'
import http from './services/httpService'
import { useEffect, useState } from 'react'
import { Container } from '@mui/system'
import Header from './components/Header/Header'

function App() {
  const [word, setWord] = useState()
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState('en')

  const dictionaryApi = async () => {
    try {
      const { data } = await http.get()
      console.log(data)
      setMeanings(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dictionaryApi()
  }, [])

  return (
    <div className="App">
      <Container maxWidth="md" class="flex flex-col h-1/2 items-center">
        <Header word={word} setWord={setWord} category={category} setCategory={setCategory} />
      </Container>
    </div>
  )
}

export default App
