import React from 'react'
import ListItem from './ListItem'

const ListComp = ({items}) => {
  return (
   <ul className='list'>
     {items.map(item=>{
        return <ListItem key={item.id} item={item}/>
     })}
   </ul>
  )
}

export default ListComp