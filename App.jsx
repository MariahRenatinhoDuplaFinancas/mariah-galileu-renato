import { useState } from 'react'
import ChampagnatLogo from './assets/Logo.svg'
import GalileuLogo from './assets/logo-gali.png'
import './App.css'
import Balance from './components/balance'
import data from "./data/investments.json"

function App() {

  return (


     <div className='min-h-screen bg-neutral-950 text-white p-6'>
      <div className= 'max-w-5xl mx-auto'>
        <header className='flex justify-between'>
          <img src={ChampagnatLogo} alt="" />
          <img src={GalileuLogo} width='250px'/>
        </header>
      </div>
       <Balance balance={10000} totalInvested={0} portfolio={data}totalAssets={data.length}/>
       
     </div>
    
  )
}

export default App