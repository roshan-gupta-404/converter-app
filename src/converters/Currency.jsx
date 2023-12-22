import { useRef, useState } from 'react'
import { InputBox } from '../components/Index' // we don't need to write index.js as its name is index.
import useCurrencyInfo from '../hooks/useCurrencyInfo'

function Currency() {
  const [amount, setAmount] = useState(0) // amount to be converted.
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [to, setTo] = useState('inr')
  const [from, setFrom] = useState('usd')

  const box = useRef(null)
  const currencyInfo = useCurrencyInfo(from) // returns the value of 'from' in different currencies.
  const options = Object.keys(currencyInfo)  // return the keys/name of different currencies. 

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    if (amount < 0) {
      box.current.innerText = 'Negative value makes no sense.';
      setTimeout(() => {
        box.current.innerHTML = '';
      }, 3000)
    }
    else {
      setConvertedAmount(amount * currencyInfo[to])
    }

  }

  return (<>
  {/* OUTER DIV */}
    <div
      className="w-full h-[90vh] flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg')`,
        backgroundSize: 'cover',
      }}
    >
    {/* OPTION DIV */}
    <div>
      {/* OPTIONS */}
    </div>
    
    {/* CONVERTER DIV */}
      <div className="w-full">
        <div className="max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                unitOptions={options}
                onUnitChange={(currency) => setFrom(currency)}
                /*The arrow function `(currency) => setFrom(currency)` is not immediately executed. Instead, it serves as a callback function. It's a way of saying, "When the onUnitChange event occurs inside the InputBox component, call this function with the newly selected currency.*/
                selectUnit={from}
                onAmountChange={(inputAmount) => setAmount(inputAmount)}
                unitType='Currency Type'

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                unitOptions={options}
                onUnitChange={(currency) => setTo(currency)}
                selectUnit={to}
                amountDisable={true}
                onAmountChange={(amount) => setAmount(amount)}
                unitType='Currency Type'
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        {/* for err msg */}
        <div 
        style={{
          color:'black',
          fontSize:'1.5rem',
          fontWeight:'700',
          textAlign:'center'
        }}
        ref={box}></div>
        </div>
      </div>
    </div>
    </>);
}

export default Currency;