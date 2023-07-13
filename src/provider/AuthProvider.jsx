import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup} from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const signInGoogle = ()=>{
        setLoading(true);
       return signInWithPopup(auth, googleProvider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
        })
    },[])

    const authInfo = {
        user,
        loading,
        signInGoogle,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;