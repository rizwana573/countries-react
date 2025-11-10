import { Outlet } from "react-router";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import "./app.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
