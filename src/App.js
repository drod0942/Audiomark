import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import FileDetails from './filesDetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './NotFound';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/files/:id" element={<FileDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;