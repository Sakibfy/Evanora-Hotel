import { Children, createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, updateProfile, GithubAuthProvider} from "firebase/auth";
import app from "../firebase/Firebase";
import axios from "axios";




export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const [loading, setLoading] = useState(true)
  
  
  const updateUserProfile = (updateDate) => {
    return updateProfile(auth.currentUser, updateDate)
  };
  
  const loginWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
  }
  
  const githublogin = () => {
    setLoading(true);
  signInWithPopup(auth, githubProvider)
}

  const createUser = (email, password) => {
    setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password)
}

  const userLogin = (email, password) => {
    setLoading(true);
  return signInWithEmailAndPassword(auth, email, password)
}  
 useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth,currentUser => {
     setUser(currentUser)
     console.log('state', currentUser?.email);
     if (currentUser?.email) {
       const user = { email: currentUser.email }
       axios.post('http://localhost:3000/jwt', user,
         { withCredentials: true })
         .then(res => {
           console.log('loging', res.data);
           setLoading(false);
         })
     } else {
       axios.post('http://localhost:3000/logout', {}, {
         withCredentials: true
       })
         .then(res => {
           console.log('logout', res.data);
           setLoading(false);
         })
     }


    
    })
    return () => {
      unsubscribe();
    }
 }, []);
  
  
  const logOut = () => {
    signOut(auth)
      .then(() => {
      
      })
    .catch((error) => {
  console.log(error);
});
 } 
  
  
  const authInfo = {
    user,
    setUser,
    createUser,
    logOut,
    userLogin,
    loginWithGoogle,
    updateUserProfile,
    loading,
    githublogin,
    
}
  


  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;