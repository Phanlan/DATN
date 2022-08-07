import React from 'react'

const TextWithLabel = (props) => {
    const { label, text } = props
  
  return (
        <div className="p-grid p-mt-1">
            <label className="p-col-12 p-mb-2 p-md-3 p-mb-md-0">
             <span><b>{label}</b></span>
            </label>
            <div className="p-col-12 p-md-9">
             <span>{" : "}{text}</span>
            </div>
        </div>
  )
}

export default TextWithLabel