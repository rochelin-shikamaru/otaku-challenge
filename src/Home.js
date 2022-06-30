import React from 'react'

const Home = (props) => {
  return (
    <section className='home'>
        <h1>Quizzical Otaku</h1>
        <p>Otaku Challenge test your skills</p>
        <button onClick={props.handleClick}>Start quiz</button>
    </section>
  )
}

export default Home