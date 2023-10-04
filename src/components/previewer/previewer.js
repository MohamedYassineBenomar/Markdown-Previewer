import React from 'react'
import './previewer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

function Previewer() {
  const text = useSelector(state => state.rootreducer.text);

  const printelement = () => {
    if(text.startsWith("# ")){
      return <h1>{text}</h1>
    } 
    if(text.startsWith("## ")){
      return <h2>{text}</h2>
    } 
    else {
      return <p>{text}</p>
    }
    
  }

  return (
    <div className='previewer'>
      <div className='previewer-header'>
        <span className='previewer-title'><FontAwesomeIcon icon={faFreeCodeCamp} /> <strong>Previewer</strong></span>
        <span className='previewer-expand-button'><FontAwesomeIcon icon={faMaximize} /></span>
      </div>
      <div className='previewer-content'>
        {printelement()}
      </div>
    </div>
  )
}

export default Previewer