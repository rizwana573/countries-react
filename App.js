import { Outlet } from "react-router";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import "./app.css";
import {ThemeContext} from "./contexts/ThemeContext";
import {useState, useContext} from "react";

const App = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDarkMode")) );
     const a = useContext(ThemeContext)
      console.log(a);
  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <Header />
      {/* <main className={`${isDark ? 'dark': ' '}`}> */}
        <Outlet/>
      {/* </main> */}
      <Footer />
    </ThemeContext.Provider>
  );
};

export default App;
