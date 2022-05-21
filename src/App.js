import { useState } from 'react';
import { StartPage } from './Pages/StartPage';
import { Questions } from './Pages/Questions';
import { FinalPage } from './Pages/FinalPage';
import './App.css';
import './Styles/StartPage.css'
import './Styles/Question.css'
import './Styles/FinalPage.css'

function App() {

  const [page, setpage] = useState(1)
  return (
    <div className="App">
      {page === 1 && <StartPage setpage={setpage} />}
      {page === 2 && <Questions setpage={setpage} />}
      {page === 3 && <FinalPage />}
    </div>
  );
}

export default App;
