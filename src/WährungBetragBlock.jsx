import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function WährungBetragBlock(props) {

    const options = [
        "EUR", "USD", "JPY", "BGN", "CZK", "DKK", "GBP", "HUF", "PLN", "RON", "SEK", "CHF", "ISK","NOK", "HRK", "RUB", "TRY", 
        "AUD", "BRL", "CAD", "CNY", "HKD", "IDR", "ILS", "INR", "KRW", "MXN", "MYR", "NZD", "PHP", "SGD", "THB", "ZAR"
    ]

    return (
      <>
        <form>
          <input type="number" onChange={(e) => props.handleAmountChange(e)} value={props.value}/>
          <Dropdown className="dropdown" options={options} onChange={props.currencyChange} value={props.selectedCurrency} placeholder="Select an option" />
        </form>
      </>
    );
}