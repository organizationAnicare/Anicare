import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/journal/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyPage from "./pages/MyPage";
import Write from "./pages/Write";
import TopButton from "./components/TopButton";
import WriteButton from "./components/WriteButton";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <TopButton />
        <WriteButton />
        <Footer />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/SignUp" element={<SignUp />}></Route>
          <Route exact path="/MyPage" element={<MyPage />}></Route>
          <Route exact path="/Write" element={<Write />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
