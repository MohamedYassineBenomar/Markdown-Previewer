import React from 'react'
import './Markdown.scss'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { texthandler } from '../../reducers/previewerreducer';
import { useDispatch, useSelector } from 'react-redux';
import { defaulttextarea } from '../../reducers/previewerreducer';

function Markdown() {
  const dispatch = useDispatch();
  const text = useSelector(state => state.rootreducer.defaulttext);
  const default_text_textarea = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\\\`\`\`' && lastLine == '\\\`\`\`') {
  return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossingstuffout~~.
`;
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
            <textarea id='textarea1' onChange={handleTextareaChange} value={default_text_textarea} ></textarea> 
          </div>
        </div> 
  )
}

export default Markdown