import React, { createContext, useEffect} from 'react';

let AppContext;

const {Provider, Consumer} = AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [ user, setUser ] = useState();
  
//   useEffect( () => {
//       //API call to get the users information
//   })

    return (
        <Provider value={{user, setUser}}>
          {children}
        </Provider>
    )
    }


    export { AppContextProvider, Consumer as AppConsumer, AppContext }

export default AppContext;
