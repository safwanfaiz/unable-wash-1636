import './App.css';
import { MainRoute } from './Routes/MainRoute';
import CourseCard from './Pages/CourseCard';
import CoursePage from './Pages/CoursePage';
      



function App() {
  return (
    <div className="App">
      <MainRoute/>
     <CoursePage/>
     <CourseCard/>
    </div>
  );
}

export default App;
