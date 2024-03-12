// Context API för Temahantering (3p)
// Använd Context API för att skapa ett enkelt tema-byte-system.
// Skapa en ThemeContext som innehåller aktuellt tema (t.ex. "light" eller "dark").
// Använd en Provider från ThemeContext i App-komponenten nedanför.
// Skapa två barn-komponenter som använder temat.
// Skapa en tredje barn-komponent som innehåller en knapp som kan växla tema.
// Providern i App-komponenten ska omsluta de tre barn-komponenterna.

import { ThemeProvider } from "./context";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";


function App() {
  return (
    <div>
      <ThemeProvider>
        <Child1 />
        <Child2 />
        <Child3 />
      </ThemeProvider>
    </div>
  );
}

export default App;
