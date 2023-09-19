import { useEffect, useState } from 'react'
import WährungBetragBlock from './WährungBetragBlock'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons'
function App() {

  const [ausgangsCurrency, setAusgangsCurrency] = useState("EUR")
  const [andereCurrency, setAndereCurrency] = useState("USD")
  const [ausgangsCurrencyBetrag, setAusgangsCurrencyBetrag] = useState(0)
  const [andereCurrencyBetrag, setAndereCurrencyBetrag] = useState(0)
  const [umrechnungsKurs, setUmrechnungskurs] = useState(0)

  function selectAusgangsCurrency(e) {
    setAusgangsCurrency(e.value)
  }

  function selectZielCurrency(e) {
   setAndereCurrency(e.value)
  }


  useEffect(() => {
      fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_fah6bqBLJBnkdtiUUhZqtAU63TNdYu3dKb0fW8nB&currencies=&base_currency=${ausgangsCurrency}`)
      .then(res => res.json())
      .then(data => {
        setUmrechnungskurs(data.data[andereCurrency])
      })
  },[ausgangsCurrency, andereCurrency])

  useEffect(() => {
    setAndereCurrencyBetrag(Math.round((ausgangsCurrencyBetrag * umrechnungsKurs)* 1000)/1000)
  },[umrechnungsKurs, ausgangsCurrencyBetrag])

  function handleAusgangsBetrag(e) {
      setAusgangsCurrencyBetrag(e.target.value)
  }

  function handleBtnClick() {
    console.log("hello")
  }
  
  return (
    <>
      <h1>Currency Converter</h1>  
      <div className="main-container">
        <WährungBetragBlock change={selectAusgangsCurrency} handle={handleAusgangsBetrag} ausgang={ausgangsCurrency} value={ausgangsCurrencyBetrag}/>
        <button onClick={handleBtnClick}><FontAwesomeIcon icon={faArrowsLeftRight} rotation={90} size="lg" /></button>
        <WährungBetragBlock change={selectZielCurrency} ausgang={andereCurrency} value={andereCurrencyBetrag}/>
      </div>
      <p>{Number(ausgangsCurrencyBetrag).toLocaleString("de-DE")} {ausgangsCurrency} = {andereCurrencyBetrag.toLocaleString("de-DE")} {andereCurrency}</p>
    </>
  )
}

export default App
