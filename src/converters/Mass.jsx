import { useRef, useState } from 'react'
import { InputBox } from '../components/Index' // we don't need to write index.js as its name is index.
import {massUnits} from './unit'
import convertMass from '../convertMass'

function Length() {
  const [amount, setAmount] = useState(0) // amount to be converted.
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [to, setTo] = useState('gms')
  const [from, setFrom] = useState('kgms')

  const box = useRef(null)
  const options = massUnits.map((unit)=>unit.key)  // return the keys/name of different Lewngth. 
  console.log(options);

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
      if(from === to) {setConvertedAmount(amount)}
      else {
        console.log(typeof amount, typeof from , typeof to);
        setConvertedAmount(convertMass(amount, from , to))
      }
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
                onUnitChange={(lengthUnit) => setFrom(lengthUnit)}
                /*The arrow function `(lengthUnit) => setFrom(lengthUnit)` is not immediately executed. Instead, it serves as a callback function. It's a way of saying, "When the onUnitChange event occurs inside the InputBox component, call this function with the newly selected lengthUnit.*/
                selectUnit={from}
                onAmountChange={(inputAmount) => setAmount(inputAmount)}
                unitType='Mass Type'

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
                onUnitChange={(lengthUnit) => setTo(lengthUnit)}
                selectUnit={to}
                amountDisable={true}
                onAmountChange={(amount) => setAmount(amount)}
                unitType='Mass Type'

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

export default Length;