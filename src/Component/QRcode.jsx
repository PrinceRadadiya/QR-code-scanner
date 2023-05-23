import React from 'react'
import Genreat from './Genreat'
import Render from './Render'

const QRcode = () => {
  return (
  <main>
      <header className='max-w-[1300px] w-full h-full mx-auto p-7 bg-blue-500 rounded-md font-thin'>
        <div className='text-center text-5xl'>
            QR-code
        </div>
    </header>

    <section className='max-w-[1300px] w-full h-full mx-auto p-5 my-10'>
       <div className='grid md:grid-cols-2'>
       <Genreat />
        <Render />
       </div>

    </section>
  </main>
  )
}

export default QRcode