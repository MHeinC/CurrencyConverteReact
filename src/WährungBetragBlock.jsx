import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function WährungBetragBlock(props) {

    const [allCurrencys, setAllCurrencys] = useState([
        "EUR", "USD", "JPY", "BGN", "CZK", "DKK", "GBP", "HUF", "PLN", "RON", "SEK", "CHF", "ISK","NOK", "HRK", "RUB", "TRY", 
        "AUD", "BRL", "CAD", "CNY", "HKD", "IDR", "ILS", "INR", "KRW", "MXN", "MYR", "NZD", "PHP", "SGD", "THB", "ZAR"
    ])

    return (
      <>
        <form>
          <select onChange={props.change}>
            {allCurrencys.map((item) => {
              return <option 
                key={uuidv4()}
                id={item}
                >{item}</option>;
            })}
          </select>
          <input type="number" onChange={(e) => props.handle(e)}/>
        </form>
      </>
    );
}