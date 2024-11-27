
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './template/Header';
import Addproducat from './producat/Addproducat';
import Viewproucat from './producat/Viewproucat';
function App() {
  return (
    <div className="App">
     

      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Viewproucat></Viewproucat>}></Route>
        <Route path='add' element={<Addproducat></Addproducat>}></Route>
        <Route path='view' element={<Viewproucat></Viewproucat>}></Route>
        <Route path='edit/:id' element={<Addproducat/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
