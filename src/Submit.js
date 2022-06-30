import React, {useState} from 'react';

const Submit = (props) => {
    
    const [checkAnswers, setCheckAnswers] = useState(true);

    const handleShowAnswers = () => {
      setCheckAnswers(!checkAnswers);
      props.setStartCheck(prev => !prev);
      props.setClick(prev => !prev);

      props.setCount(prev => checkAnswers ? prev : 0);
      props.setAgain(prev => !checkAnswers ? !prev  : undefined);
      
      if(!checkAnswers){
        props.setNewData(props.newDatas);
      }
    }
     
  return (
    <>
      {props.startCheck && <p className='score'>You scored {props.count}/10 correct answers</p>}
      <button 
        onClick={handleShowAnswers}
        >
      {checkAnswers ? "Check answers" : "Play again"}
      </button>
    </>
  )
}

export default Submit