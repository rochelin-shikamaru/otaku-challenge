import React, { useState } from 'react'
import { nanoid } from 'nanoid';


const QuizzList = (props) => {
    const {question, correct_answer, allAnswers, setCount} = props;
    const regex = /(&quot;)|(&#039;t)|(&#039;s)|(&#039;)|(&amp;!)|(&amp;)|(&uuml;)/gi;
    const otherRegex = /&eacute;/gi;

    const dataAnswers = () => {
      const arr = [];
      allAnswers.map(item => (
       arr.push({
          answer: item,
          id: nanoid(),
          isTrue: false
        })
      ))
      return arr
    }

  const [state, setState] = useState(dataAnswers());
  
  const handleCheck = (event, id) => {

    if(props.click){ 

      setState(prev => prev.map(item => {
    
          return item.id === id ? {...item, isTrue: true} :  {...item, isTrue: false};
          }
        )
      ) 

      setCount(prev => event.target.innerText === correct_answer ? prev + 1 : prev)

    }
  }


  const answerElement = state.map(item => {

      const styles = {
         backgroundColor: item.isTrue ? "#D6DBF5" : "#F5F7FB",
         borderColor: item.isTrue && "#D6DBF5"
      }
      const fail_answer = {
        backgroundColor: "#F8BCBC",
        borderColor: "#F8BCBC",
        opacity: 0.5
      }
    

      return (
        <div 
          key={item.id}
          className={item.answer === correct_answer && props.startCheck ? 
                                                      "correct_answer" :
                    props.startCheck && item.answer !== correct_answer ?
                                      "current_answers opacity_answer" :
                                      "current_answers"
                                    }
          onClick={props.click ? (event) => handleCheck(event, item.id) : null}
          style = {!props.startCheck ? styles : item.isTrue && item.answer !== correct_answer ?
                                                                        fail_answer : undefined}
        >
          {item.answer.replace(regex, "").replace(otherRegex, "e")}

        </div>
      )
  })

  return (
    <aside>
      <h1>{question.replace(regex, "").replace(otherRegex, "e")}</h1>
      <div className='container_answers'>
        {answerElement}
      </div>
      <div className='border'></div>
    </aside>
  )
}

export default QuizzList