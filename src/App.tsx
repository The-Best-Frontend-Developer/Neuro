import './App.css'
import './normalize-styles.css'
import Header from "./Header/Header.tsx";
import First from "./First/First.tsx";
import Cookies from "./Cookies/Cookies.tsx";
import {useState} from "react";
import Second from "./Second/Second.tsx";
import Third from "./Third/Third.tsx";
import Fourth from "./Fourth/Fourth.tsx";
import Fifth from "./Fifth/Fifth.tsx";
import Sixth from "./Sixth/Sixth.tsx";
import Seventh from "./Seventh/Seventh.tsx";
import Eighth from "./Eighth/Eighth.tsx";

function App() {
    const [showCookies, setShowCookies] = useState(JSON.parse(localStorage.getItem('cookies') || 'true'))
    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                {showCookies && <Cookies setShowCookies={setShowCookies}/>}
                <First/>
                <Second/>
                <Third/>
                <Fourth/>
                <Fifth/>
                <Sixth/>
                <Seventh/>
                <Eighth/>
            </main>
        </>
    )
}

export default App
