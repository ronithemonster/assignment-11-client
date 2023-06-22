import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';




export  const AuthContext = createContext()

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
  



    const createUser = (email,password)=>{
        setLoading(true);

        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email,password)=>{
        setLoading(true);

        return signInWithEmailAndPassword(auth,email,password)
    };
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    };
    
    const googlePopUp = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
      };
    

    const updateUrl = ()=>{

        return updateProfile (auth.currentUser, {
          displayName: "Mr.. User", photoURL: "https://lh3.googleusercontent.com/a/AGNmyxYoZpZr3z629at42vhbr5aWTk9mhTWhyajofPABXQ=s96-c"})
    
    
    
      };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
              setUser(currentUser);
              setLoading(false)
          });
          return ()=>{
              return unsubscribe();
          }
      },[])
      



const AuthInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
    updateUrl,
    googlePopUp,



}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;