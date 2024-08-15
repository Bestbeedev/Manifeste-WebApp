import Dashboard from './Pages/Dashboard';

import axios from 'axios'
axios.defaults.baseURL='http://localhost:5500'
axios.defaults.withCredentials=true

function App() {
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
