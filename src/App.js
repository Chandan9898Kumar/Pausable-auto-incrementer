import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FunctionalAPP from './FunctionalCompo/MyAppFun'
import MyClassApp from './ClassCompo/MyAppClass'
import Home  from './Home'
function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home  />} />
          <Route  exact path='/Functional' element={<FunctionalAPP />} />
          <Route  exact path='/Class' element={<MyClassApp />} />
      </Routes>
   </BrowserRouter>
    

   </>
  );
}

export default App;
