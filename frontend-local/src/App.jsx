import { AuthProvider } from "./context/AuthProvider";
import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}

export default App;
