import { FC } from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import App from "@/App";
import LoginPage from "@/modules/loginPage";

const  AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage /> } />
      </Routes>
    </BrowserRouter>
  );
};