import React from 'react'



export default function Tarjeta({name, emoji , symbol, date_added, circulating_supply, USD_price
, volume_24h, market_cap}) {
   return (
    <div className='col-span-3'> 
    <div className='  grid grid-cols-9 border-2 rounded-xl p-4  mb-6 pr-14'  >
        <div className='flex flex-col justify-center pl-6    col-span-3' > 
        <span className='text-2xl '> {name}  </span> 
         <span>#{symbol} {emoji} </span> 
         <span>{date_added.slice(0,10)}</span> 
         </div>
         <div className='col-span-3 pt-2 flex flex-col space-y-4 '>
            <div>
                <span className='text-sm '> - Circulating Supply   </span>  <br/> 
                <span>{circulating_supply.toLocaleString()}  </span>
            </div>
            <div>
                <span className='text-sm '> -  USD Price   </span> <br></br>
                <span>{USD_price.toLocaleString()}  </span> 
            </div>
         </div>
         <div className='col-span-3 pt-2 flex flex-col space-y-4 '>
             <div>
                <span className='text-sm '> - Last 24h volume   </span> 
                <span>{volume_24h.toLocaleString()}  </span> 
             </div>
            <div>
                <span className='text-sm '> -   Market Cap   </span> 
                <span>{market_cap.toLocaleString()}  </span> 
            </div>
         </div>

    </div>
    </div>
  )
}
