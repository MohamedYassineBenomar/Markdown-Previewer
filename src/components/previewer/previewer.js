import React from 'react'
import './previewer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';

function Previewer() {
  return (
    <div className='previewer'>
      <div className='previewer-header'>
        <span className='previewer-title'><FontAwesomeIcon icon={faFreeCodeCamp} /> <strong>Previewer</strong></span>
        <span className='previewer-expand-button'><FontAwesomeIcon icon={faMaximize} /></span>
      </div>
      <div className='previewer-content'>
        <p>Lorem Ipsum</p>
      </div>
    </div>
  )
}

export default Previewer