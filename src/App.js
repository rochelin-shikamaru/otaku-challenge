import React, {useEffect, useState } from 'react'
import Blob from './Blob'
import Home from './Home'
import Quizz from './Quizz';

const App = () => {
  const [showHome, setShowHome] = useState(true);
  const [data, setData] = useState([]);
  const [again, setAgain] = useState(false);
  const [loading, setLoading] =useState(true);

  useEffect(()=>{
      async function fetchData (){
          const response = await fetch("https://opentdb.com/api.php?amount=10&category=31&type=multiple");
          const datas = await response.json();
          setLoading(false);
          setData(datas.results);
          
      }
      fetchData();
  }, [again])

  const updateShowHome = () =>{
    setShowHome(prevShowHome => !prevShowHome);
  }

  return (
    <main>
      <Blob showHome={showHome}/>
      {showHome ? <Home handleClick={updateShowHome}/> : 
                                               loading ?
                              <div className="dots"></div> :
            <Quizz datas={data} setAgain={setAgain}/> 
      } 
    </main>
  )
}

export default App