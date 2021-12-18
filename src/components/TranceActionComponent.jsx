import { useEffect, useState } from "react";

const TranceActionComponent = (props) => {
    const [searchItem, setSearchItem]=useState("");
    const [filteredItem, setFilteredItem]=useState(props.transactions);
   
    const changeHandler= (e)=>{
        setSearchItem(e.target.value);
         filteredTransactions(e.target.value)
    }
    const filteredTransactions=(search)=>{
        if(!search && search===""){
            setFilteredItem(props.transactions)
            return;
        }
const filtered=props.transactions.filter((t)=>t.desc.toLowerCase().includes(search.toLowerCase()))
setFilteredItem(filtered)
    }
    useEffect(()=>{
     filteredTransactions(searchItem)
    }, [props.transactions])
    // if we dont have any transaction give user allert to add some tnx
    if(!props.transactions.length) return <h3> add some transactions</h3>
    return ( 
        <section>
            <input type="text" value={searchItem} onChange={changeHandler} placeholder="searcg tnx.." className="search"/> 
            {filteredItem.length ?
               filteredItem.map((t)=>
                    (<div key={t.id} className="transaction" style={{borderRight:t.type ==="expense" && "4px solid red"}}>
                            
                        <span>
                    {t.desc} 
                    </span>
                 
                    <span>
                        $ {t.amount}
                    </span>
                    </div>
               
                        )) : "no item match ! "
            }
        </section>
     );
}
 
export default TranceActionComponent;