import Login from "./ui/login/login";
import Sigup from "./ui/login/sigup";
import Content from "./ui/login/content";
import PhoneAuth from "./ui/login/phoneAuth";
import EmailAuth from "./ui/login/emailAuth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./style.css";
// import Pro from "./ui/pro/pro";

function App() {
  return (
    <div className="App">
      {/* <Pro/> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/sigup" element={<Sigup />}></Route>
          <Route exact path="/content" element={<Content />}></Route>
          <Route exact path="/phoneAuth" element={<PhoneAuth />}></Route>
          <Route exact path="/emailAuth" element={<EmailAuth />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
