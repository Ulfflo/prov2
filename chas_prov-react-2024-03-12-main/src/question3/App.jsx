// 3. Custom Hook för counter (3p)
// Skapa en custom hook, useCounter, som hanterar en räknare.
// Denna hook ska tillhandahålla två funktioner: en för att öka
// räknarens värde och en för att minska den. Skriv kod i App-komponenten
// nedanför som använder din custom hook och visar räknarens värde
// samt två knappar för att öka och minska värdet.

import { useState } from "react";

function useCounter( ) {
  const [number, setNumber] = useState(0);


  function handleMore() {
    setNumber(number + 1)
  }

  function handleLess() {
    setNumber(number -1)
  }


  return { number, handleMore, handleLess }; 
}


function App() {
 const {number, handleMore, handleLess} = useCounter();

  return (
  <div>
    <button onClick={handleMore}>More</button>
    <div>{number}</div>
    <button onClick={handleLess}>Less</button>
  </div>
  )
}

export default App;
