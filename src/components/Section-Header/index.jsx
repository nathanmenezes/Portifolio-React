import React from 'react'
import "./Section-Header.css"

export default function SectionHeader({title}) {
  return (
    <div className='texts'>
        <h2>
            <span>#</span>{title}
        </h2>
        <span id='line'></span>
    </div>
  )
}
