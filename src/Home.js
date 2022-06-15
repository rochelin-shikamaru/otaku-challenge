import React from 'react'

const Home = (props) => {
  return (
    <section className='home'>
        <h1>Quizzical</h1>
        <p>Some description if needed</p>
        <button onClick={props.handleClick}>Start quiz</button>
    </section>
  )
}

export default Home