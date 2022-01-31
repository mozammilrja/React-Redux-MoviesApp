import React,{ useContext} from 'react';
import { AuthContext } from '../context/userContext'
 
function Table() {
    const contextArray = useContext(AuthContext)
    console.log(contextArray,'Table');
  return (
      <div>
  {
    contextArray.map((array) =>(
      <div>
        <h1> {array}</h1> 
      </div>
    ))
  }
      </div>
  )
}

export default Table;
