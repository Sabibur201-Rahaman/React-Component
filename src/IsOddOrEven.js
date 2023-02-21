
import styles from './App.module.css'
function IsOddOrEven({count,pickedValue}){
    return (
    <>
      {/* return <h3>Number is {count%2===0?'Even':'odd'}</h3> */}
    <h3>Number is {pickedValue && pickedValue%2===0?(<span className={styles.even}>even</span>):(<span className={styles.odd}>odd</span>)}</h3> 
 </>
    )
   }
   export default IsOddOrEven