import React from 'react'
import './previewer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function Previewer() {
  const text = useSelector(state => state.rootreducer.text);

  function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  let insidemultyline = false;
  let multyline = [];
  const show = (texto) => { 
    const completeformated = texto.split('\n').map((valu,inde) => {
      
      if(valu.startsWith("```") && !insidemultyline){
        insidemultyline = true
        return
      }
      else if(!valu.startsWith("```") && insidemultyline){
        multyline.push(valu);
        return
      } else if(valu.startsWith("```") && insidemultyline){
        insidemultyline = false
        const multylineformated = multyline.map((value, index) => {
          return <>{value}<br /></>
  
        })
        return <pre><code>{multylineformated}</code></pre>
      } 
      const formattedLine = valu.split(' ').map((value,index) => {
         if(value.startsWith("**_")){
          const strongformated = value.split('**_').map((valueeee,indexxxx) => {  
         
            let newstring = valueeee.replace(new RegExp("_\\*\\*", 'g'), '');
            return <strong key={indexxxx}><em>{newstring}</em></strong>    
          })
          return strongformated;
        }else if(countOccurrences(value,'_')>1){  
          const italicformated = value.split('_').map((valuee,indexx) => {
            return <em key={indexx}>{valuee}</em>
          })
          return italicformated;
        } else if(countOccurrences(value,'*')>1){  
          const strongformated = value.split('**').map((valuee,indexx) => {
            return <strong key={indexx}>{valuee}</strong>
          })
          return strongformated;
        }else if(countOccurrences(value,'~')>1){  
          const strongformated = value.split('~~').map((valuee,indexx) => {
            return <del key={indexx}>{valuee}</del>
          })
          return strongformated;
        }else if(countOccurrences(value,'`')>1){
          const codeformated = value.split('`').map((valueee,indexxx) => {  
            return <code key={indexxx}>{valueee}</code>    
          })
          return codeformated;
        } else {
          return value
        }
      })
      const formattedLinee = formattedLine.reduce((acc, curr, index) => {
        if (index !== 0) {
          acc.push(' '); // Insert space before every element except the first
        }
        acc.push(curr); // Add the current element
        return acc;
      }, []);
      console.log(formattedLine);
      if(formattedLinee[0] === "#"){
        formattedLinee.shift();
        return <h1><u>{formattedLinee}</u></h1>
      } else if(formattedLinee[0] === "##"){
        formattedLinee.shift();
        return <h2>{formattedLinee}</h2>
      }
      else if(formattedLinee[0] === "###"){
        formattedLinee.shift();
        return <h3>{formattedLinee}</h3>
      }
      return <p>{formattedLinee}</p>
    });
      return completeformated
  }

  return (
    <div className='previewer'>
      <div className='previewer-header'>
        <span className='previewer-title'><FontAwesomeIcon icon={faFreeCodeCamp} /> <strong>Previewer</strong></span>
        <span className='previewer-expand-button'><FontAwesomeIcon icon={faMaximize} /></span>
      </div>
      <div className='previewer-content'>
        {show(text)}
      </div>
    </div>
  )
}

export default Previewer