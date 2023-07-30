import Menu from "./Menu";
import './App.css';
import RoundPic from "./RoundPic";
import Card from "./Card";
import Element from "./Element";
import Element1 from "./Element1";
import Element2 from "./Element2";
import Element3 from "./Elements3";
import BottomCard from "./BottomCards";
import Footer from "./Footer";
import Counter from "./Counter";
const App = () =>{
return (
    <div style={{backgroundColor:"#25262a"}}>
    <Menu />
    <RoundPic />
    <Card />
     <Element />
     <Element />
   
    <Element3 />
    
   
    <Counter />
    <BottomCard />
    <Footer />
    </div>
);

}
export default App;