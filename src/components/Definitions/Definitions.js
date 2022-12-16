import './Definitions.css'

const Definitions = ({ word, meanings, category, darkMode }) => {
  return (
    <div className="meanings flex flex-col overflow-y-scroll overflow-x-hidden rounded-xl py-2.5 px-5 font-sans">
      <div className="flex justify-center items-center">
        {meanings[0] && word && category === 'en' && (
          <audio
            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
            controls
            className="bg-white rounded-lg"
          >
            Your Browser Doesn't Support Audio element
          </audio>
        )}
      </div>
      {word === '' ? (
        <span className="subTitle w-full">Start by Typing a Word</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                key={def.definition}
                style={{
                  backgroundColor: darkMode ? '#3b5360' : '#fff',
                  color: darkMode ? 'white' : 'black',
                  transition: 'all 0.5s linear',
                }}
                className="bg-white text-black flex flex-col rounded-lg py-2.5 px-5 my-2.5"
              >
                <b>{def.definition}</b>
                <hr className="bg-black w-full" />
                {def.example ? (
                  <span>
                    <b>Example : </b> {def.example}
                  </span>
                ) : null}
                {def.synonyms.length ? (
                  <span>
                    <b>Synonyms : </b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                ) : null}
              </div>
            )),
          ),
        )
      )}
    </div>
  )
}

export default Definitions
