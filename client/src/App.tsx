import { Route,Routes } from "react-router-dom";
import {Login} from "./components/login/login";
import Registerpage from "./components/Register-page/Register";
import Homepage from "./BuySellTransfer";
import { AuthProvider } from "./context";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/Home" element={<Homepage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
