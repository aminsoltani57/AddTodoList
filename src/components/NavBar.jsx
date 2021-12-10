import { useState } from "react";

import Select from 'react-select';

const options = [
  { value: 'All', label: 'All' },
  { value: 'Complete', label: 'Complete' },
  { value: 'unComplete', label: 'unComplete' },
];
const NavBar = ({oncompletedTodo, selectedOption, onSelect}) => {
   

    if(!oncompletedTodo)return(<h2> set your today todos!</h2>)
    return (<header>
        <span>{oncompletedTodo}</span>
         <h2>todos are not completed</h2> 
         <Select
        value={selectedOption}
        onChange={onSelect}
        options={options}
        className="select"
      />
       
    </header>  );
}
 
export default NavBar;