import React from 'react'
import './previewer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { faMinimize } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'; // Add this line

function Previewer() {
  const text = useSelector(state => state.rootreducer.text);
  useEffect(() => {
    const iconminimize = document.querySelector("#root > div > div > div.previewer > div.previewer-header > span:nth-child(3) > svg");
    iconminimize.style.display = 'none';
  }, []); 
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
  const handlemaximumsize = () => {
    const markdown = document.querySelector("#root > div > div > div.markdown");
    markdown.style.display = 'none';
    const previewercontent = document.querySelector("#root > div > div > div.previewer > div.previewer-content");
    previewercontent.style.height = "100vh";
    const iconmaximize = document.querySelector("#root > div > div > div.previewer > div.previewer-header > span:nth-child(2) > svg");
    iconmaximize.style.display = 'none';
    const iconminimize = document.querySelector("#root > div > div > div.previewer > div.previewer-header > span:nth-child(3) > svg");
    iconminimize.style.display = ''; 
  };
  const handleminimize = () => {
    const iconminimize = document.querySelector("#root > div > div > div.previewer > div.previewer-header > span:nth-child(3) > svg");
    iconminimize.style.display = 'none';
    const iconmaximize = document.querySelector("#root > div > div > div.previewer > div.previewer-header > span:nth-child(2) > svg");
    iconmaximize.style.display = '';
    const previewercontent = document.querySelector("#root > div > div > div.previewer > div.previewer-content");
    previewercontent.style.height = "";
    const markdown = document.querySelector("#root > div > div > div.markdown");
    markdown.style.display = '';
  }
  return (
    <div className='previewer'>
      <div className='previewer-header'>
        <span className='previewer-title'><FontAwesomeIcon icon={faFreeCodeCamp} /> <strong>Previewer</strong></span>
        <span className='previewer-expand-button'  onClick={handlemaximumsize}><FontAwesomeIcon icon={faMaximize} onClick={handlemaximumsize}/></span>
        <span className='previewer-expand-button' onClick={handleminimize}><FontAwesomeIcon icon={faMinimize} onClick={handleminimize}/></span>
      </div>
      <div className='previewer-content'>
        {show(text)}
      </div>
    </div>
  )
}

export default Previewer