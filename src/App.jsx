import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import Input from "./components/Input";
import "./App.css";

function App() {
  const [amount, setamount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setconvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  

  const options = Object.keys(currencyInfo);
  
  

  const swap = () => {
    setFrom(to);
    setTo(from);
    setconvertedAmount(amount);
    setamount(convertedAmount);
  };
  const convert = () => {
  setconvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div
      className="w-screen h-screen fixed left-0 top-0 flex flex-wrap justify-end text-left  items-center bg-center text-green-50"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1591033594798-33227a05780d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VycmVuY3klMjBleGNoYW5nZXxlbnwwfHwwfHx8MA%3D%3D')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
          
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setFrom(cu)}
                defaultCurrency={from}
                onAmountChange={(amount) => setamount(amount)}
               
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-600  px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                defaultCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
