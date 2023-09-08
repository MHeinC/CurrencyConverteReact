import { useEffect, useState } from 'react'
import WährungBetragBlock from './WährungBetragBlock'
import { v4 as uuidv4 } from "uuid"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
function App() {

  const [ausgangsCurrency, setAusgangsCurrency] = useState("EUR")
  const [andereCurrency, setAndereCurrency] = useState("USD")
  const [ausgangsCurrencyBetrag, setAusgangsCurrencyBetrag] = useState(0)
  const [andereCurrencyBetrag, setAndereCurrencyBetrag] = useState(0)

  // fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_fah6bqBLJBnkdtiUUhZqtAU63TNdYu3dKb0fW8nB")
  //   .then(res => res.json())
  //   .then(data => console.log(data))

  function umrechnung () {
      // fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_fah6bqBLJBnkdtiUUhZqtAU63TNdYu3dKb0fW8nB&currencies=&base_currency=${ausgangsCurrency}`)
      //  .then(res => res.json())
      //  .then(data => console.log(data))
  }

  function selectAusgangsCurrency(e) {
    setAusgangsCurrency(e.target.value)
  }

  function selectZielCurrency(e) {
   setAndereCurrency(e.target.value)
  }

  function handleAusgangsBetrag(e) {
    setAusgangsCurrencyBetrag(e.target.value)
  }

  function handleZielBetrag(e) {
    setAndereCurrencyBetrag(e.target.value) 
  }

  return (
    <>
      <h1>Currency Converter</h1>  
      <WährungBetragBlock change={selectAusgangsCurrency} handle={handleAusgangsBetrag} ausgangsCurrency={ausgangsCurrency}/>
      <button><FontAwesomeIcon icon={faArrowRightArrowLeft} /></button>
      <WährungBetragBlock change={selectZielCurrency} handle={handleZielBetrag}/>
      <p>1,00 {ausgangsCurrency} = 1,36 {andereCurrency}</p>
    </>
  )
}

export default App
