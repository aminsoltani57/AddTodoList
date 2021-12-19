//1 git init
//2 git add .
//3  git branch -M master
//4 git remote add origin آدرس 
//5 git push -u origin master
//6 git push origin
import { useEffect, useState } from "react";
import TransActionComponent from "./TranceActionComponent";
import OverViewComponent from "./OverViewComponent";
const ExpenceApp = () => {
    const [expense, setExpense]=useState(0);
    const [income, setIncome]=useState(0); 
    const [transactions, setTransacions ]=useState([]);
    const addTransaction=(formValues)=>{
        console.log(formValues);
        //{id:Date.now}: giving unic id with now time
        const data={ ...formValues, id: Date.now() };
        setTransacions([ ...transactions, data])
    
    }
    useEffect(()=>{
let exp=0;
let inc = 0;
transactions.forEach((t)=>{t.type==="expense" ? (exp = exp+ parseInt(t.amount) ) : (inc = inc+parseInt(t.amount))})
setExpense(exp);
setIncome(inc);
    },[transactions])
    return (         <section className="container">
        
         <OverViewComponent  income={income} expense={expense} addTransaction={addTransaction}/>
        <TransActionComponent  transactions={transactions} />
            
</section> )
   
}
 
export default ExpenceApp;
