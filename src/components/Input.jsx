import React, { useId } from "react";

function Input({
  label,
  className = "",
  amount,
  onAmountChange,
  currencyOption = [],
  onCurrencyChange ,
  amountDisable = false,
  currencyDisable = false,
  defaultCurrency = "usd",
}) {
  const inputAmountId = useId()
  return (
    <div className={`bg-current p-3 rounded-lg text-lg flex `}>
      <div className="w-1/2">
      <label htmlFor={inputAmountId} className=" text-black mb-2 inline-block">{label}</label>
        <input
        id={inputAmountId}
          type="number"
          className=" outline-none w-full bg-transparent py-1.5 text-black"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}

        />
      </div>
      <div className="w=1/2 flex flex-wrap justify-end text-white text-right ">
        <p className="text-black/100 mb-2 w-full" >Currency Type</p>
        <select className=" rounded-lg px-1 py-1 bg-grey-100 cursor-pointer outline-none  "
        value={defaultCurrency}
        disabled ={currencyDisable}
        onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOption.map((currency) => (
            <option value={currency} key={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;