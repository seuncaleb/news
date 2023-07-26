import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Body from "./Components/Body/Body"
import Nav from './Components/Nav/Nav'
import Navlist from './Components/Navlist/Navlist';
import { useState } from 'react';

function App() {

  const [navList, setNavList] = useState("home");
  const [articles, setArticles] = useState([]);

  return (
    <div className="App">
      <Router>
        <Nav setNavList={setNavList} navList={navList}/>
<Routes>
  <Route exact path='/' element={<Body articles={articles} setArticles={setArticles}/>}/>
  <Route exact path='/navList' element={<Navlist navList={navList} articles={articles} setArticles={setArticles}/>}/>
</Routes>
      </Router>
   
    </div>
  );
}

export default App;
