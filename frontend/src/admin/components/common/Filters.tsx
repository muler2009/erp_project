import React, { useState } from 'react'

interface SearchProps {
    value: string | number;
    onChange: (value: string | number) => void;
    debounce?: number;
}

const Filters = ({value: initialValue, onChange, debounce = 500, ...props}: SearchProps) => {

    const [value, setValue] = useState(initialValue)

  return (
    <div>
      <input 
        {...props}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        type='text'
        className='input-sm rounded-[2px]'
        placeholder='search here'
      />
    </div>
  )
}

export default Filters
