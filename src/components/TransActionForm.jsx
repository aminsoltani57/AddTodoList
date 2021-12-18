import { useState } from "react";

const TransActionForm = ({addTransaction, setIsShow }) => {
    //type: amount, desc
    const [formValues, setFromValues]=useState({type:"expense", amount:0, desc:""})
    const changeHandler=(e)=>{
setFromValues({...formValues, [e.target.name]: e.target.value})
    }
    const submitHandler=(e)=>{
        //preventDefault: it needs in form to not refresh anything.
        e.preventDefault();
        addTransaction(formValues);
        //  setIsShow(false);(after adding some new amount close the window)
        setIsShow(false);
    }

    return (
        // there is on onchange for all inputs
        <form onSubmit={submitHandler}> 
            <input type="text" name="desc" onChange={changeHandler} value={formValues.desc}/>
            <input type="number" name="amount" onChange={changeHandler} value={formValues.amount}  />
            
       <div className="radioBox">
           {/* put one name for both of radio input to choice one automatically */}
           {/* how to click on expression as button: give the span htmlFor="example" giv an input id="example" */}
       <input type="radio" value="expense" name="type" onChange={changeHandler}  checked={formValues.type === "expense"} id="expense" />
       <label htmlFor="expense">Expense</label> 
       <input type="radio" value="income" name="type" onChange={changeHandler}  checked={formValues.type === "income"} id="income" />
       <label htmlFor="income">Income</label> 
        </div>
        <button type="submit" className="btn primary">Add transaction</button>
          </form> );

    }
export default TransActionForm;