import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({list =[]}) => {
  return (
    <div>
      {
        list?.length > 0 ?
           list?.map ((listItem, index) => <MenuItem item={listItem} key={index}/>)
        : null
      }
    </div>
  )
}

export default MenuList
