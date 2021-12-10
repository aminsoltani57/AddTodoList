//  قانون سر انگشتی:استیت هر کامپوننت که میخواهد تغییر کند خوب است که هندلر را آنجا قرار دهیم بنابراین درون تودو اپ آنرا تعریف میکنیم
import { useEffect, useRef, useState } from "react";


const TodoForm = (props) => {
    //give the past todo in update input box for better ui exprience(with ternary operators)
    const [input, setInput]=useState(props.edit ? props.edit.text : "");
    // we want to foucus on update input:1useref(null)2(in input)ref=inputRef 3useEffect
    const inputRef=useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    },[])
    const changeHandler=(e)=>{
        setInput(e.target.value);
        console.log(e.target.value);
    }
    const submitHandler=(e)=>{
        // preventDefault: we do that because the form will not refresf
        e.preventDefault();
        if(!input){
            //alert open a small window 
            alert("enter todo")
            return;
            // its realy nesessary to use return: then the function will stop
        }
        //submit to do: here add s.th
        props.submitTodo(input);
        setInput("");
        //add enterd todo to todos=>
    }
    return ( <form onSubmit={submitHandler} >
        {/* ternary operator for different styles for add and update */}
        {/* {props.edit ?  */}
        {/* <> */}
        <div className="formcontrol">
        <input type="text" value={input}ref={inputRef} placeholder={props.edit ? "update todo ..." : "Add todo..."} onChange={changeHandler} />
        <button className={`btn ${props.edit ? "updateTodo": "addTodo"}`} type="submit">{props.edit ? "Update": "Add"}</button> 
        </div>
      
        {/* </> */}
        {/* // :
        // <> */}
        {/* <input type="text" value={input}placeholder="Add todo..."  ref={inputRef}onChange={changeHandler} />
        <button type="submit">Add</button> 
        </>} */}
        
    </form> );
}
 
export default TodoForm;