import React from 'react'
import Link from '../components/Link'
import Prismic from 'prismic-javascript'

const Index = props => {
  const items = props.data.body[0].items

  return (
    <div className=' max-w-md mx-auto p-2'>
      <h1>
        <img className='mx-auto rounded-full h-32' src={props.data.headerimage.url} alt='Eugênio Carvalho'/>
      </h1>
      <h2 className='text-center p-6 text-gray-700 italic font-bold'>Eugênio Carvalho</h2>
      <ul>
        {items.map(item => {
          return (
            <li>
              <Link href={item.link.url}>{item.text}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const client = Prismic.client('https://linktree-clone.cdn.prismic.io/api/v2')

  const page = await client.getSingle('home')

  return {
    props: {
      data: page.data
    }
  }
}

export default Index