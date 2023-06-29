 import React, { useState, useRef, useEffect } from "react";
import { LIST_TYPES, LIST_COLORS, LIST_COPY } from '../../config'

/* import css from '../dropdown/Dropdown.css' */
 import css from '../ChangeStatus/ChangeStatus.css'
import setTasks from '../../App'


function ChangeStatus() {
  const container = useRef();
  const [dropdownState, setDropdownState] = useState({ open: false });

  const handleDropdownClick = () =>
    setDropdownState({ open: !dropdownState.open });

  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setDropdownState({ open: false });
       }
    };

 useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

 return () => document.removeEventListener("mousedown", handleClickOutside);
     }, []);

 return (
 <div className="css.choice">
      {<button
        
        className={css.myBtn}
       
        onClick={handleDropdownClick}>
            <p>Сhoose a task</p>
				
      </button>}
      {dropdownState.open && (
          <div className={css.dropdown}> 
            <select>
            {Object.values(LIST_COPY).map(task => {
						return <option key={task.id} value={task.id} id={task.id} status={task.status}>{task.text}</option>
                        
					})}

            </select> 
			
          </div>
      )}
    </div>
 );
}

export default ChangeStatus 





