import Footer from "./Footer";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Content from "./Content";
// import profilePic from './images/a1.jpg'
const App=()=> {
  return ( 
    <div className='page'>
  <TopBar/>
  <Content/>
  <SideBar/>
  <Footer/>
  {/* <img src={profilePic} alt='bootcamp'/> */}
  <img src='/img/a1.pg' alt='a1'/>
</div> );
}
export default App;
