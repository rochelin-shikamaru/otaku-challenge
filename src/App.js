import React, {useEffect, useState } from 'react'
import Blob from './Blob'
import Home from './Home'
import Quizz from './Quizz';

const App = () => {
  const [showHome, setShowHome] = useState(true);
  const [data, setData] = useState([]);

  useEffect(()=>{
      async function fetchData (){
          const response = await fetch("https://opentdb.com/api.php?amount=10&category=31&type=multiple");
          const datas = await response.json();
          setData(datas.results);
          
      }
      fetchData();
  }, [])

  const updateShowHome = () =>{
    setShowHome(prevShowHome => !prevShowHome);
  }

  const selectAnswers = () =>{
    
  }
 
  return (
    <main>
      <Blob />
      {showHome ? <Home handleClick={updateShowHome}/> : <Quizz datas={data}/>}
    </main>
  )
}

export default App