import React from "react";

function InputBox({
  label,
  amount,

  className = "",
  onChangeAmount,
  onChangeCurrency,
  currency,
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const data = currency;
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          value={amount}
          onChange={(e) =>
            onChangeAmount && onChangeAmount(Number(e.target.value))
          } /// khi aisa na ho k user ye function pass hi na kre or program crash kr jaye isiliye ye pehle check kiya h to be in safe side
          disabled={amountDisable}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right m-1">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
      </div>

      <select
        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        value={selectCurrency}
        onChange={(e) => onChangeCurrency && onChangeCurrency(e.target.value)}
        disabled={currencyDisable}
      >
        {data?.map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}

        {/* <option >ppl</option>
        <option >llll</option>
        <option >vvv</option> */}
      </select>
    </div>
  );
}

export default InputBox;
