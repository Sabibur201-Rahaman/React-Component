//  import Footer from "./Footer";
// import SideBar from "./SideBar"; import TopBar from "./TopBar";
// import Content from "./Content";
// import profilePic from './images/a1.jpg'
// const App=()=> {
//   return ( 
//     <div className='page'>
//   <TopBar/>
//   <Content/>
//   <SideBar/>
//   <Footer/>
//   <img src={profilePic} alt='bootcamp'/> 
//   <img src='/img/a1.pg' alt='a1'/>
// </div> );
// }
// export default App;

import IsOddOrEven from './IsOddOrEven';
import RandomCard from './RandomCard';
import { useState } from "react";
function App(){
  const[count,setCount]=useState(0)
  const cardValues=[30,33,98,101,10,20,50,60]
  const[pickedValue,setPickedValue]=useState(null);
  console.log(pickedValue);
  const handleIncrement=(num)=>{
   setCount((prevCounter)=>prevCounter+num)
   
  }
  const handleDecrement=(num)=>{
    setCount((prevCounter)=>prevCounter-num)
  }
  const handleReset=()=>{
    setCount(0);
  }
  return(
    <>
    <div className='container'>
    <h2>Count:{count}</h2>
      <button onClick={()=>handleIncrement(1)}>Increment</button>
          <button onClick={()=>handleDecrement(1)}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
      </div>
<IsOddOrEven count={count} pickedValue={pickedValue}/>
<RandomCard cardValues={cardValues} setPickedValue={setPickedValue}/>
      </>
  )
  }
  
 
  export default App

