import { Routes, Route } from "react-router-dom";
import Header from "./features/header";
import Main from "./features/main";
import Footer from "./features/footer";

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
