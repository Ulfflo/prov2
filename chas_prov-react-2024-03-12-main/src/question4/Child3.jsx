import { useTheme } from "./context";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function Child3() {
  const { toggleTheme, state } = useTheme();
  const isDarkMode = state.theme === "dark";
  
  
  
  return (
    <div>
      <button onClick={toggleTheme}>
        {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
}
