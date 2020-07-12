import React from 'react'

const Link = ({ href, children }) => {
  return <a href={href}className='bg-blue-700 py-4 w-full block text-center hover:bg-blue-200 hover:text-black border-solid border-2 my-4 border-blue-700 text-white hover:shadow-lg rounded-md'>{children}</a>
}

export default Link