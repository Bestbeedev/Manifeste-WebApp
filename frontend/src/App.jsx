import Dashboard from './Pages/Dashboard';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
axios.defaults.baseURL='http://localhost:5500'
axios.defaults.withCredentials=true

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Dashboard/>
    </div>
  );
}

export default App;
