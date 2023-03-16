import { useState } from 'react'

function App() {

  return (
    <div className='grid grid-cols-6 min-h-screen bg-grey-100'>
      <div className='col-span-2'>1</div>
      <img className='col-span-4 object-none h-screen ' src="./public/rectangle.jpg" alt="Imagem roxa lateral da tela de login" />
    </div>
  )
}

export default App
