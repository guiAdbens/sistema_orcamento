import { AuthProvider } from "./context/AuthProvider";
import Login from "./pages/Login";

// teste
import  { Routes, Route, Navigate} from "react-router-dom"
import Users from "./pages/Users";

import Dashboard from "./pages/DashBoard";
import PrivateRoute from "./routes/PrivateRoute";
//import { useContext } from "react";
import Profiles from "./pages/Profile";


function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* 🔓 rota pública */}
        <Route path="/login" element={<Login />} />

        {/* 🔒 rotas protegidas */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/usuarios/:id"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />

        <Route
          path="/perfis/:id"
          element={
            <PrivateRoute>
              <Profiles />
            </PrivateRoute>
          }
        />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
/*
function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* pública */
/*        <Route path="/login" element={<Login />} />

        {/* dashboard */
  /*      <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* perfis */
    /*    <Route
          path="/profiles"
          element={
            <PrivateRoute>
              <Profiles />
            </PrivateRoute>
          }
        />

        {/* usuários */
      /*  <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
*/



/*
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
*/