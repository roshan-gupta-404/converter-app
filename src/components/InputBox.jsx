import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onUnitChange,
    unitOptions = [],
    selectUnit = 'usd',
    amountDisable = false,
    unitDisable = false,
    className = "",
    unitType,
}) {
   const amountInputId = useId() // it will return a random string every time;

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block"
                htmlFor={amountInputId}
                >
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                    // if onAmountChange is defined it will be called, else it will not.
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">{unitType}</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectUnit}
                    onChange={(e)=>onUnitChange && onUnitChange(e.target.value)}
                    disabled = {unitDisable}

                >
                    
                        {unitOptions.map((unit)=>(
                            <option
                            key={unit}
                            value={unit}
                            >
                            {unit}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;