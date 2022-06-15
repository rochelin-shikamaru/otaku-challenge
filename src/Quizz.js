import React,  {useEffect, useState} from 'react'

const Quizz = (props) => {

    const allCheck = ()=>{
        const array = []
        for (let i = 0; i < 10; i++){
            array.push({
                isCheck: false,
                id: i
            })
        }
        return array
    }
    const [check, setCheck] = useState(allCheck());
    const {datas} = props;
    const regex = /(&quot;)|(&#039;t)|(&#039;s)|(&#039;)|(&amp;!)/gi;
    console.log(datas);
    

    const allQuizz = datas.map((item, index) => {
        const {question, incorrect_answers, correct_answer} = item;
        const randomIndex = Math.floor(Math.random() * incorrect_answers.length);
        const newAnswers = [...incorrect_answers]
        newAnswers.splice(randomIndex, 0, correct_answer);

        const styles = {
            backgroundColor: check.isCheck ? "#D6DBF5" : "#F5F7FB"
        }
        
        const handleCheck = (event) =>{
            // setCheck(prevCheck => {
            //     return e.target.__reactFiber$oustm4lcgob.key === id ?
            //             {...prevCheck, isCheck: !prevCheck.isCheck} :
            //             prevCheck
            // })
            console.log(event.target.attributes["number"].nodeValue);

        }
        
        return <aside key={index}>
                    <h1>{question.replace(regex, "").replace(/&eacute;/gi, "e")}</h1>
                    <div className='container_current_answers'>
                        {newAnswers.map((el, index) => {
                            return <div 
                                        className='current_answers' 
                                        key={index} 
                                        onClick={handleCheck}
                                        style={styles}
                                        number={index}
                                        
                                    >
                                        <p key={index} >{el.replace(regex, "").replace(/&eacute;/gi, "e")}</p>
                                    </div>
                        })}
                    </div>
                    <div className='border'></div>
                </aside>
    }
        
    )

  return (
    <section className='quizz'>
        {allQuizz}
        <div className='container-button'>
            <button>Check answers</button>
        </div>
    </section>
  )
}

export default Quizz