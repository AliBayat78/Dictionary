import { MenuItem, TextField } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import categories from '../../data/category'

const Header = ({ category, setCategory, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <div className="flex flex-col items-center justify-evenly w-full h-2/5 md:height-1/5">
      <span className="text-5xl md:text-8xl uppercase font-Montserrat">
        {word ? word : 'Word Hunt'}
      </span>
      <div className="flex w-1/2 flex-row justify-evenly">
        <ThemeProvider theme={darkTheme}>
          <TextField
            value={word}
            onChange={(e) => setWord(e.target.value)}
            label="Search a Word"
            variant="standard"
          />
          <TextField
            select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Language"
            helperText="Please select your language"
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
