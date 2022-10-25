import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config'
import {createUserWithEmailAndPassword, getAuth,  GithubAuthProvider,  GoogleAuthProvider,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
export const AuthContext = createContext();


const auth = getAuth(app)
const UserContext = ({children}) => {
    const [user , setuser] = useState({});
    const [loading , setloading] = useState(true);
    const googleProvider = new GoogleAuthProvider;
    const githubProvider = new GithubAuthProvider;
    
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth , email, password)
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword( auth, email, password)
    }
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider )
    }
    const signInWithGithub = () =>{
        return signInWithPopup (auth, githubProvider )
    }
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    // why are we doing this ?
    useEffect( () =>{
            const usSubscribe = onAuthStateChanged(auth, currentUser =>{
            setuser(currentUser);
            setloading(false);
            console.log('auth statechangr', currentUser)
        })
        return () =>{
            usSubscribe();
        }
    } ,[])
    const authInfo = {user, loading, updateUserProfile, createUser,signIn, logOut, signInWithGoogle, signInWithGithub}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;