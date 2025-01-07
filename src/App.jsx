import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import CourseList from './pages/courselist'
import CourseDesc from './pages/coursedescription'
import Favorites from './pages/favorites'
import Enrollment from './pages/enrollment'

function App() {

  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<CourseList/>}></Route>
        <Route path = '/description/:id' element = {<CourseDesc/>}></Route>
        <Route path = '/favorites' element = {<Favorites/>}></Route>
        <Route path = '/enrollment' element = {<Enrollment/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
