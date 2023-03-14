import React from 'react'
import {Hero,Sales,FlexContent,Stories, Footer,Navbar, Cart} from './Components';
import { heroapi, popularsales, toprateslaes, highlight,sneaker,story, footerAPI} from './data/data.jsx';
function App() {
  return (
    <div>
      <Navbar/>
      <Cart />
      <main className='flex flex-col gap-16 relative'>
      
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales} ifExists/>
        <FlexContent endpoint={highlight} ifExists/>
        <Sales endpoint={toprateslaes}/>
        <FlexContent endpoint={sneaker}/>
        <Stories story={story}/>
        <Footer footerAPI={footerAPI}/>
        
      </main>
    </div>
  )
}

export default App
