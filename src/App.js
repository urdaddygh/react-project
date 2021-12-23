import {Switch, Route, NavLink, Router} from "react-router-dom"
// import {BooksList} from "./BooksList"
// import {CreateBook} from "./CreateBook"
// import {UpdateBook} from "./UpdateBook"
import {NavBar} from "./Shared/NavBar"
import BookList from "./BookList"
function App() {
  return(
    <>
    <div className="wrapper">
     <NavBar > 
     
    </NavBar>
    <BookList/>
    </div>
    </>
    
  );
}

export default App;
