import React from 'react'


const Tooltip = ({children, content}) => {
  return (
    <div className='tooltip relative inline-block'>
        {children}
        <span className='tooltip-text bg-gray-800 text-white text-xs py-1 px-2 rounded absolute bottom-full whitespace-nowrap left-5 transform -translate-x-1/2 opacity-0 transition-opacity duration-300'>{content}</span>
    </div>
  )
}

export default Tooltip
