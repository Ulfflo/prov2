// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.

import { useState } from "react";

function Hobbies() {
  const [input, setInput] = useState("");
  const [hobbies, setHobbies] = useState([])

  function handleOnClick() {
    if (input.trim()) {
      setHobbies([...hobbies, input]);
      setInput("");
    }

  }

  function handleDelete(i) {
    const newHobbies = hobbies.filter((_, index) => 
      index !== i
    )
    setHobbies(newHobbies)
  }
  
  
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleOnClick}>Lägg till</button>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>
            {hobby}
            <button onClick={() => handleDelete(index)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </>
  );
}

  




function App() {
  return <div>
    <Hobbies />
  </div>;
}

export default App;
