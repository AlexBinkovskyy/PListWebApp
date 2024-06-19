import { Navigate, Route, Routes } from "react-router-dom";
import "./reset.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Layout } from "./Pages/Layout/Layout";
import {CartPage} from './Pages/CartPage/CartPage'


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
