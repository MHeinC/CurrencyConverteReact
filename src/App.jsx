import { useEffect, useState } from 'react'
import WährungBetragBlock from './WährungBetragBlock'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [initialCurrency, setInitialCurrency] = useState("EUR")
  const [targetCurrency, setTargetCurrency] = useState("USD")
  const [initialAmount, setInitialAmount] = useState(0)
  const [targetAmount, setTargetAmount] = useState(0)
  const [conversionRate, setConversionRate] = useState(0)

  function selectInitialCurrency(e) {
    setInitialCurrency(e.value)
  }

  function selectTargetCurrency(e) {
   setTargetCurrency(e.value)
  }

  useEffect(() => {
      fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_fah6bqBLJBnkdtiUUhZqtAU63TNdYu3dKb0fW8nB&currencies=&base_currency=${initialCurrency}`)
      .then(res => res.json())
      .then(data => {
        setConversionRate(data.data[targetCurrency])
      })
  },[initialCurrency, targetCurrency])

  useEffect(() => {
    setTargetAmount(Math.round((initialAmount * conversionRate)* 1000)/1000)
  },[conversionRate, initialAmount])

  function handleInitialAmount(e) {
      setInitialAmount(e.target.value)
  }

  function handleBtnClick() {
    setInitialCurrency(targetCurrency)
    setTargetCurrency(initialCurrency)
  }
  
  return (
    <>
      <h1>Currency Converter</h1>  
      <div className="main-container">
        <WährungBetragBlock currencyChange={selectInitialCurrency} handleAmountChange={handleInitialAmount} selectedCurrency={initialCurrency} value={initialAmount}/>
        <button onClick={handleBtnClick}><FontAwesomeIcon icon={faArrowsLeftRight} rotation={90} size="lg" /></button>
        <WährungBetragBlock currencyChange={selectTargetCurrency} selectedCurrency={targetCurrency} value={targetAmount}/>
      </div>
      <p>{Number(initialAmount).toLocaleString("de-DE")} {initialCurrency} = {targetAmount.toLocaleString("de-DE")} {targetCurrency}</p>
    </>
  )
}

export default App
