import React from 'react';

const About = (props) => {

  return (
    <div className='about'>
      <span className='exit-screen' onClick={() => props.setMenuScreen('')}>
        <i className="far fa-times-circle"></i>
      </span>
      <h1>WTF?</h1>
      <p><strike>Cards</strike> Duke Against Humanity is a party game for horrible Duke students. Unlike most of the party games you've played before, <strike>Cards</strike> Duke Against Humanity is just as despicable, priveleged and awkward as you and your friends.</p>
      <br/>
      <p>The game is simple. Each round, one player asks a question from a black card, reads it aloud, and everyone else answers with their funniest or problematic white card.</p>
      <footer>Made with <span role='img' aria-label='poop'>&#128169;</span> by King & Castro</footer>
    </div>
  )
}

export default About;