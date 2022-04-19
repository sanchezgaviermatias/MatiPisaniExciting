import { useState, useEffect } from 'react'
import logo from './logo.svg'
import Tarjeta from './Components/Tarjeta'
import '../index.css'


function App() {

const [subdata, setSubdata] = useState({})

const [data, setData] = useState({})
useEffect(()=> {fetch("http://localhost:3300/crypto")
.then(res => res.json())
.then(xd => setData(xd.data))}
, [])

console.log(data)
console.log(data.length)
var emojis = [
	'🧛🏻','☠️','🦄','🦍','🦉','🦙', '🧑🏻‍🚀','🦘',
  '🙉', '🍗', '🥪', '🌯', '🍣', '🙉', '🍧'];

function select_emoji(){
  const emo =emojis[Math.floor(Math.random() * emojis.length)]
  return emo 
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

  return (
    <> 
    <div className='max-w-8xl m-auto'>
    <h1 className='text-4xl    pb-4  pt-4 mt-4' >Crypto World</h1>

    <h2 className='text-2xl mt-7 mb-7'>Crypto Listing </h2>
    <div className='pl-12' >


    <div className='grid grid-cols-8 gap-9' >


    {isEmpty(data)  ? <p> 
      cargando
    </p> : 
   
    data.map( (moneda) => { 
      return (
        <Tarjeta name={moneda.name} symbol={moneda.symbol} emoji={select_emoji()}
        date_added={moneda.date_added}
        circulating_supply={moneda.circulating_supply}  
        USD_price={moneda.quote.USD.price} 
        volume_24h ={moneda.quote.USD.volume_24h}
        market_cap={moneda.quote.USD.market_cap}  />
      )
      })}
       
       </div>

    
    </div>



    </div>
    </>
  )
}

export default App
