import React from 'react'
import './previewer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function Previewer() {
  const text = useSelector(state => state.rootreducer.text);



  const getFormattedElement = (line, index, format) => {
    switch (format) {
      case 'h1':
        return <h1 key={index}>{line}</h1>;
      case 'h2':
        return <h2 key={index}>{line}</h2>;
      case 'h3':
        return <h3 key={index}>{line}</h3>;
      default:
        return <p>{line}</p>
      
    }
  };
  const formattedText = text.split('\n').map((line, index) => {
    console.log(line);
    console.log(index);
    let currentFormat = '';
    if(line.startsWith("# ")){
      currentFormat = 'h1';
    } 
    else if(line.startsWith("## ")){
      currentFormat = 'h2';
    } else if(line.startsWith("### ")){
      currentFormat = 'h3';
    } else {
      currentFormat = '';
    }
    
    return getFormattedElement(line, index, currentFormat);
  });

  return (
    <div className='previewer'>
      <div className='previewer-header'>
        <span className='previewer-title'><FontAwesomeIcon icon={faFreeCodeCamp} /> <strong>Previewer</strong></span>
        <span className='previewer-expand-button'><FontAwesomeIcon icon={faMaximize} /></span>
      </div>
      <div className='previewer-content'>
        {formattedText}
      </div>
    </div>
  )
}

export default Previewer