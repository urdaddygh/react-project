import {Switch, Route, NavLink, Router} from "react-router-dom"
// import {BooksList} from "./BooksList"
// import {CreateBook} from "./CreateBook"
// import {UpdateBook} from "./UpdateBook"
import {NavBar} from "./Shared/NavBar"
import BookList from "./BookList"
import './App.css'
function App() {
  return(
    <>
    <div className="wrapper">
     <NavBar > 
     
    </NavBar>
    <div className="div">Я НЕ СМОГ ДОДЕЛАТЬ</div>
    <BookList/>
    </div>
    </>
    
  );
}

export default App;
