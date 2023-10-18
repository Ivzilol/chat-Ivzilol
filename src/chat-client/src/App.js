import './App.css';
import {Route, Routes} from "react-router-dom";
import Register from "./Components/Register/Register";
import ConfirmRegister from "./Components/Register/ConfirmRegister";
import Login from "./Components/Login/Login";
import ForgottenPasswordEmail from "./Components/BaseURL/ForgottenPasswordEmail";

function App() {
    return (
        <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/register/verify/:verificationCode" element={<ConfirmRegister/>}/>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/forgotten-password" element={<ForgottenPasswordEmail/>}/>
        </Routes>
    );
}

export default App;
