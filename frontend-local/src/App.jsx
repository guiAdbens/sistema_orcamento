import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/dashboard";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>

      <Routes>
        {/* rota pública */}
        <Route path="/Login" element={<Login />} />

      {/* rotas protegidas */}
      <Route path="/" element= {
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />
      </Routes>
    </AuthProvider>
  );
}

export default App;