import { Routes, Route, Navigate } from "react-router-dom";
import { Header, Main, Footer, About, Project } from "./features";
function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/myPage" element={<Navigate to="/" replace />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
