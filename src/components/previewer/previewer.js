import React from 'react'
import './previewer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function Previewer() {
  const text = useSelector(state => state.rootreducer.text);

  const formattedText = text.split('\n').map((line, index) => {
    let currenttag = "";
    
    if(line.startsWith("# ") && !line.includes("`")){
      currenttag = 'h1';
      line = line.replace("# ", "");
      return <h1 key={index}><u>{line}</u></h1>;
    } else if(line.startsWith("## ")){
      currenttag = 'h2';
      line = line.replace("## ", "");
      return <h2 key={index}>{line}</h2>;

    } else if(line.startsWith("### ")){
      currenttag = 'h3';
      line = line.replace("### ", "");
      return <h3 key={index}>{line}</h3>;

    } 
    if(line.includes("`")){
      const formated = line.split('`').map((value,index) => {
        if(index % 2 === 1 ){
            return <code>{value}</code>;
        } else {
            return value
        }
      })
      if(line.split('`').length > 1){   
        switch(currenttag){
          case 'h1':
            return <h1>{formated}</h1>
          case 'h2':
            return <h2>{formated}</h2>
          case 'h3':
            return <h3>{formated}</h3>
          default:
            return <p>{formated}</p>
        }           
      } 
      return <p>{line}</p>  
    } else {
      return <p>{line}</p>
    }
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