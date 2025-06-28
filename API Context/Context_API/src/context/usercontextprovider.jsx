import React, { useState } from "react";
import UserContext from "./usercontext";

const usercontextprovider = ({children}) =>{
    const [user, setuser] = useState(null)
    return (
        //children means just write whatever comes in children

        <UserContext.Provider value={{user, setuser}}>
        {children}  
        </UserContext.Provider>
    )

}

export default usercontextprovider;