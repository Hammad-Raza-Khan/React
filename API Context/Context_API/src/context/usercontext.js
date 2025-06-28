import React from 'react'

const UserContext = React.createContext()

export default UserContext;
//now you can share this info globally

//first user context=>defining value in function app() to 
// throw in provider=>using it in another file