import React from 'react'
import './Markdown.scss'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { faMinimize } from '@fortawesome/free-solid-svg-icons';
import { texthandler } from '../../reducers/previewerreducer';
import { useDispatch, useSelector } from 'react-redux';
import { defaulttextarea } from '../../reducers/previewerreducer';
import { useEffect } from 'react'; // Add this line

function Markdown() {
  const dispatch = useDispatch();
  const text = useSelector(state => state.rootreducer.defaulttext);
  useEffect(() => {
    dispatch(defaulttextarea());
    const previewer = document.querySelector("#root > div > div > div.markdown > div.markdown-header > span:nth-child(3) > svg");
    previewer.style.display = 'none'; 
  }, [dispatch]); 

  const handleTextareaChange = (event) => {
    dispatch(texthandler(event.target.value));
   
  };
  const handlemaximumsize = () => {
    const previewer = document.querySelector("#root > div > div > div.previewer");
    previewer.style.display = 'none';
    const markdown = document.querySelector("#root > div > div > div.markdown");
    markdown.style.padding = '0px';
    const textareaElement = document.querySelector("#textarea1");
    textareaElement.style.height = "100vh";
    const iconElement = document.querySelector("#root > div > div > div.markdown > div.markdown-header > span:nth-child(2) > svg");
    iconElement.style.display = 'none';
    const iconminimize = document.querySelector("#root > div > div > div.markdown > div.markdown-header > span:nth-child(3) > svg");
    iconminimize.style.display = ''; 

  };
  const handleminimize = () => {
    const icon = document.querySelector("#root > div > div > div.markdown > div.markdown-header > span:nth-child(3) > svg");
    icon.style.display = 'none';
    const markdown = document.querySelector("#root > div > div > div.markdown");
    markdown.style.padding = '';
    const textareaElement = document.querySelector("#textarea1");
    textareaElement.style.height = "200px";
    const previewer = document.querySelector("#root > div > div > div.previewer");
    previewer.style.display = '';
    const iconmaximize = document.querySelector("#root > div > div > div.markdown > div.markdown-header > span:nth-child(2) > svg");
    iconmaximize.style.display = '';
  }
  return ( 
        <div className='markdown'>  
          <div className='markdown-header'> 
            <span className='markdown-title'><FontAwesomeIcon icon={faFreeCodeCamp} /> <strong>Editor</strong></span>
            <span className='markdown-expand-button' onClick={handlemaximumsize}><FontAwesomeIcon icon={faMaximize} onClick={handlemaximumsize}/></span>
            <span className='markdown-expand-button' onClick={handleminimize}><FontAwesomeIcon icon={faMinimize} onClick={handleminimize}/></span>
          </div>
          <div className='markdown-content'>
            <textarea id='textarea1' onChange={handleTextareaChange} >{text}</textarea> 
          </div>
        </div> 
  )
}

export default Markdown