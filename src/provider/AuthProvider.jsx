import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, updateProfile, GithubAuthProvider} from "firebase/auth";
import app from "../firebase/Firebase";




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
    signInWithPopup(auth, googleProvider)
  }
  
  const githublogin = () => {
  signInWithPopup(auth, githubProvider)
}

  const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

  const userLogin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}  
 useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth,currentUser => {
    
    setUser(currentUser)
    setLoading(false);
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