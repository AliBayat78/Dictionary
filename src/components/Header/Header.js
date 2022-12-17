import { MenuItem, TextField } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import categories from '../../data/category'
import './Header.css'

const Header = ({ category, setCategory, word, setWord, darkMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: darkMode ? '#000' : '#fff',
      },
      mode: darkMode ? 'light' : 'dark',
    },
  })

  const handleChange = (language) => {
    setCategory(language)
    setWord('')
  }

  return (
    <div className="header flex flex-col items-center justify-evenly w-full md:height-1/5">
      <span className="title uppercase font-Montserrat mt-10">{word ? word : 'Word Hunt'}</span>
      <div className="flex flex-row justify-evenly w-full mx-2.5">
        <ThemeProvider theme={darkTheme}>
          <TextField
            value={word}
            onChange={(e) => setWord(e.target.value)}
            label="Search a Word"
            variant="standard"
            className="w-1/3"
          />
          <TextField
            select
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            label="Language"
            helperText="Please select your language"
            className="w-1/3"
          >
            {categories.map((option) => {
              return (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              )
            })}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Header
