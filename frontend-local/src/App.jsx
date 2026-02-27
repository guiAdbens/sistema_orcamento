import { AuthProvider } from "./context/AuthProvider";
import Login from "./pages/Login";
import Dashboard from "./pages/DashBoard";
import PrivateRoute from "./routes/PrivateRoute";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Profiles from "./pages/Profile";

function Routes() {
  const { user } = useContext(AuthContext);

  return user ? (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  ) : (
    <Login />
  );
}

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;