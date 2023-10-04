import React from 'react'
import './Markdown.scss'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { texthandler } from '../../reducers/previewerreducer';
import { useDispatch, useSelector } from 'react-redux';


function Markdown() {
  const dispatch = useDispatch();
  const text = useSelector(state => state.rootreducer.text);

  const handleTextareaChange = (event) => {
    dispatch(texthandler(event.target.value));
  };

  return ( 
        <div className='markdown'>
          <div className='markdown-header'> 
            <span className='markdown-title'><FontAwesomeIcon icon={faFreeCodeCamp} /> <strong>Editor</strong></span>
            <span className='markdown-expand-button'><FontAwesomeIcon icon={faMaximize} /></span>
          </div>
          <div className='markdown-content'>
            <textarea onChange={handleTextareaChange}></textarea> 
          </div>
        </div> 
  )
}

export default Markdown