import "./index.css";
import { Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import Gift from "./pages/Gift";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/signIn" element={<SignInPage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/gift" element={<Gift />} />
    </Routes>
  );
}

export default App;
