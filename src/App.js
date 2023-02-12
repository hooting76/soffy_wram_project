import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faPaperPlane } from "@fortawesome/free-solid-svg-icons";

// import $ from 'jquery';

import slider1 from './img/slider1.jpg';
import slider2 from './img/slider2.jpg';
import slider3 from './img/slider3.jpg';
import slider4 from './img/slider4.jpg';

function App() {

  let [ headerMenu ] = useState([<FontAwesomeIcon icon={faBars} className="bars" />, "soffy_warm", <FontAwesomeIcon icon={faPaperPlane} className="faPaperPlane" />])

  return (
    <div className="App">
      <header id='header'>
        <h1>{ headerMenu[0] }</h1>
        <h1>{ headerMenu[1] }</h1>
        <h1>{ headerMenu[2] }</h1>
      </header>
      <main id='main'>
        <div className='slideImg'>
          <ul>
            <li><img src={slider1} alt='slider1'></img></li>
            <li><img src={slider2} alt='slider2'></img></li>
            <li><img src={slider3} alt='slider3'></img></li>
            <li><img src={slider4} alt='slider4'></img></li>
          </ul>
        </div>
      </main>
    </div>
  );
}
// 리액트에 제이쿼리 적용할 방법 모색하기.

// let slide = $('.slideImg ul li');
// let current = 0;


// setInterval(function(){
//   let prev = slide.eq(current);
//   current++;
//   move(prev,'100%',0);

//   if(current == slide.size()) current=0;

//   let next = slide.eq(current);
//   move(next,0,'-100%');
// },3000)

// function move(tg,start,end){
//   tg.css('left',start).stop().animate({left:end},300);
// }

export default App;

