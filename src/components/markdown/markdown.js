import React from 'react'
import './Markdown.scss'
import $ from 'jquery';

function Markdown() {
  return (
    <div className='container'>
      <div >
        <div className='markdown'>
          <div className='markdown-header'>
            Editor
          </div>
          <div className='markdown-content'>
            <textarea>eqzdfezdfe</textarea>
          </div>
        </div>
        <div className='previewer'>
          <div className='previewer-header'>
            previewer
          </div>
          <div className='previewer-content'>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Markdown