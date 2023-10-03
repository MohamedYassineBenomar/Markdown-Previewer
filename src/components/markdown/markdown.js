import React from 'react'
import './Markdown.scss'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';




function Markdown() {
  return ( 
        <div className='markdown'>
          <div className='markdown-header'> 
            <span className='markdown-title'><FontAwesomeIcon icon={faFreeCodeCamp} /> <strong>Editor</strong></span>
            <span className='markdown-expand-button'><FontAwesomeIcon icon={faMaximize} /></span>
          </div>
          <div className='markdown-content'>
            <textarea>zzz</textarea> 
          </div>
        </div> 
  )
}

export default Markdown