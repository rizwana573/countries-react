import { Outlet } from "react-router";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import "./app.css";
import {ThemeContext, ThemeProvider} from "./contexts/ThemeContext";
import {useState, useContext} from "react";

const App = () => {
  // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDarkMode")) );

  return (
    /*<ThemeContext.Provider value={[isDark, setIsDark]}>
      <Header />
        <Outlet/>
      <Footer />
    </ThemeContext.Provider>
    */
   <ThemeProvider>
      <Header />
        <Outlet/>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
