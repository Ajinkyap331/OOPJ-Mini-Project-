import { useEffect, useState } from 'react';
import { StartPage } from './Pages/StartPage';
import { Questions } from './Pages/Questions';
import { FinalPage } from './Pages/FinalPage';
import Data from './Modules/Data';
import './App.css';
import './Styles/StartPage.css'
import './Styles/Question.css'
import './Styles/FinalPage.css'

function App() {

  const [page, setpage] = useState(1)

  useEffect(() => {
    Data.getQuestions() 
    Data.getCharacters()
  }, [])

  return (
    <div className="App">
      {page === 1 && <StartPage setpage={setpage} />}
      {page === 2 && <Questions setpage={setpage} />}
      {page === 3 && <FinalPage setpage={setpage} />}
    </div>
  );
}

export default App;
