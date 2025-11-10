import {ThemeProvider, ThemeContext} from "../../contexts/ThemeContext";
import {useContext} from "react";

const Contact = () => {
     const [isDark] = useContext(ThemeContext);
    return (
        <main className= {`${isDark? "dark": " "}`}>
            <h1> Contact us now!! </h1>
        </main>
    )
}
export default Contact;