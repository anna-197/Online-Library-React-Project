import { createContext, useContext} from "react";
import { useState } from "react";


const AppContext = createContext(null);

export const useAppContext = () =>{
    const context = useContext(AppContext);

    if(context===undefined){
        throw new Error ('Appcontext must be within appContextProvder')
    }

    return context;
}

const AppContextProvider = ({children})=> {
const[favourites, setFavourites] = useState([]);

const addToFavourites = (each_book) => {
    const oldFavourites = [...favourites];

      const newFavourites = oldFavourites.concat(each_book);
  
       setFavourites(newFavourites);
  
         console.log(favourites)
}



    return(
            <AppContext.Provider value={{favourites, addToFavourites}}>
                {children}
            </AppContext.Provider>
    )
}

export default AppContextProvider;