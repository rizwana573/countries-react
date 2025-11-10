import {ThemeProvider, ThemeContext} from "../../contexts/ThemeContext";
import {useContext} from "react";
import {useWindowSize} from "../../hooks/useWindowSize";

const Contact = () => {
     const [isDark] = useContext(ThemeContext);
     const windowSize = useWindowSize();
    return (
        <main className= {`${isDark? "dark": " "}`}>
            <h1> Contact us now!! </h1>
            <h2>{windowSize.width}X{windowSize.height}</h2>
        </main>
    )
}
export default Contact;