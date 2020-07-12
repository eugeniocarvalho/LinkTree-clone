import React from 'react'

const Link = ({ href, Children }) => {
  return <a href={href}className='bg-gray-800'>{Children}</a>
}

export default Link