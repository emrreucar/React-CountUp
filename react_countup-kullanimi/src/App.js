import React from 'react';
import './App.css';
import Countup, { useCountUp } from 'react-countup';

function App() {
  const countUpRef = React.useRef(null);
  const {start, pauseResume, reset, update} = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 100,
    duration: 2,
  });


  return (
    <div className="App">
      
      <div className= "kutular">
        <div className='kutu kutu1'> <Countup end={100} duration={2} delay={1} /> </div>
        <div className='kutu kutu2' ref={countUpRef}>0</div>
        <div className='kutu kutu3'> <Countup end={500} duration={1} prefix='&#8378;' suffix='TL'/> </div>
      </div>
      <div className= "butonlar">
        <button className='button button1' onClick={start}>START</button>
        <button className='button button2' onClick={pauseResume}>PAUSE</button>
        <button className='button button3' onClick={reset}>RESET</button>
        <button className='button button4' onClick={ () => update(120) }>UPDATE</button>
      </div>

    </div>
  );
}

export default App;
