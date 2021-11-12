import React, { useState } from 'react'
import QuestionBody from '../QuestionBody/index';
import Option from '../Option/index';
import './style.css';


const Question = ({text}) => {

  const [answered, setAnswered] = useState('symbolQuestion');


  const showText = (iconType) => {
    setAnswered(iconType);
  }

  return(
  <div className="question">
    <QuestionBody 
      iconType={answered ? answered : 'symbolQuestion'} 
      text={text}
    />
    <div className="question__options">
      <Option type="smileyStrongYes" text="Souhlasím" show={showText}/>
      <Option type="smileyYes" text="Spíše souhlasím" show={showText}/>
      <Option type="smileyNeutral" text="Nevím" show={showText}/>
      <Option type="smileyNo" text="Spíše nesouhlasím" show={showText}/>
      <Option type="smileyStrongNo" text="Nesouhlasím" show={showText}/>
    </div>
  </div>)
};

export default Question;
