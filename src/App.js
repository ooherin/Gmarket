import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/login";
import { RouterProvider } from "react-router-dom";
import router from "./router/routing";
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
