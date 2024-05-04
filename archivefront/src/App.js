import {Route, Routes, Link} from "react-router-dom";
import Error404 from "./Components/Error404Components/Error404";
import Header from "./Components/SharedComponents/Header";
import Slider from "./Components/HomeComponents/Slider";
import Schedule from "./Components/HomeComponents/Schedule";
import Bubble from "./Components/MessageComponents/Bubble";
import Feature from "./Components/HomeComponents/Feauture";
import FunFacts from "./Components/HomeComponents/FunFacts";
import WhyChoose from "./Components/HomeComponents/WhyChoose";
import CallSection from "./Components/HomeComponents/CallSection";
import Service from "./Components/HomeComponents/Service";
import Footer from "./Components/SharedComponents/Footer";

function App() {
  return (
  
      <Routes >
        <Route path="/"element={ <Error404 />} /> 
        <Route path="/"element={ <Header />} />
        <Route path="/"element={ <Slider />} />
        <Route path="/"element={ <Schedule />} />
        <Route path="/"element={ <Bubble />} />
        <Route path="/"element={ <Feature />} />
        <Route path="/"element={ <FunFacts/>} />
        <Route path="/"element={ <WhyChoose />} />
        <Route path="/"element={ <CallSection />} />
        <Route path="/"element={ <Service />} />
      <Route path="/"element={ <Footer /> } />
      </Routes>
      
    
  );
}

export default App;
