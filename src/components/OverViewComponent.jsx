import { useState } from "react";
import TransActionForm from "./TransActionForm";
const OverViewComponent = ({income, expense, addTransaction}) => {
    const [isShow, setIsShow]=useState(false);
  //<></>: giv all the html codes in fragment to prevent error
    return ( <>
    <div className="topSection">
         <p> Balance:{income - expense}</p>  
         {/* `isshow && "cancle"`= isshow ? "cancle :"" */}
         <button className={ `"btn" ${isShow && "cancle"}`} onClick={()=>setIsShow((prevState)=>!prevState) }> {isShow ? "Cancle" : "Add"}</button>
         </div>
         {/* //best code for conditional show */}
         {isShow && <TransActionForm  addTransaction={addTransaction} setIsShow={setIsShow}/>}
         <div className="resultSection">
           {/* span? for put the things lower another thing */}
         <div className="Expensebox">Expence <span style={{color:"red"}}>{expense}$ </span> </div>
         <div className="Expensebox">Income <span>{income}$ </span></div>
         </div>
    </> );
}
 
export default OverViewComponent;
