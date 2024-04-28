import SymbolGrid from "./components/SymbolGrid";
import NumberGrid from "./components/NumberGrid";
import TextField from "./components/TextField";
import { useState } from "react";

function App() {
  const [btnPressValue, setBtnPressValue] = useState("");
  const concatenateStrings = (value: string) => {
    setBtnPressValue(btnPressValue + value);
  };
  const clearText = () => {
    setBtnPressValue("");
  };
  const calculate = () => {
    setBtnPressValue(eval(btnPressValue));
  };
  return (
    <>
      <div>
        <TextField input={btnPressValue} />
        <SymbolGrid
          concatenateStrings={concatenateStrings}
          clearText={clearText}
          calculate={calculate}
        />
        <NumberGrid concatenateStrings={concatenateStrings} />
      </div>
    </>
  );
}

export default App;
