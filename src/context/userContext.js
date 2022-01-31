
import { createContext} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const myNumbers = [1,2,3,46,8,6,9]



    return (
        <AuthContext.Provider value={myNumbers}>
            {children}
        </AuthContext.Provider>
    )

}

