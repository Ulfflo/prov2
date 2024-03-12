import { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();

const initialState = {
  theme: "light",
  userPreferences: {
    fontSize: "medium",
    reduceAnimations: false,
  },
};

function themeReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <ThemeContext.Provider value={{ state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
