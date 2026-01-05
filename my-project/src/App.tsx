import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./features/header";
import Main from "./features/main";
import Footer from "./features/footer";
import About from "./features/about";
function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/myPage" element={<Navigate to="/" replace />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
