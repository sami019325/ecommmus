import React, { createContext, useEffect, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, FacebookAuthProvider, updateProfile, signInWithEmailAndPassword } from "firebase/auth"
import app from '../../Firebase/Firebase.config';


export const SharedContext = createContext()



const SharedPage = ({ children }) => {
    const [user, setUser] = useState({ photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-F5GQg8qB2fWquF1ltQvAT2Z8Dv5pJLb9w&usqp=CAU' })
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)
    // google sign in 
    const googleProviderConst = new GoogleAuthProvider()

    const GoogleSignInConst = () => {
        setLoading(true)
        signInWithPopup(auth, googleProviderConst)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setUser(user)
                console.log(user)
                setLoading(false)
            }).catch((error) => { console.error(error) })
    }

    // log out 
    const logOutCall = () => {
        setLoading(true)
        signOut(auth).then(() => {
            console.log('log out successfully')
            //    setLoading(false)

            window.location.reload()
        }).catch((error) => {
            console.error(error)
        });
    }

    // create account 

    const userCreateCall = (name, email, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, name, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                updateUsercall(name)
            })
            .catch((error) => { console.error(error) })
    }



    // log in 
    const logInCall = (email, password) => {
        setLoading(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                setLoading(false)
                document.getElementById('emailInput').value = '';
                document.getElementById('passwordInput').value = '';

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage)
            });

    }
    // update user 
    const updateUsercall = (name) => {
        //   setLoading(true)
        updateProfile(auth.currentUser, {
            displayName: `${name}`, photoURL: "https://i.ibb.co/zx7gVq4/handsome-boy-smiling-with-his-hands-up-free-vector-removebg-preview.png"
        }).then(() => {
            console.log('Profile updated!')
            //   setLoading(false)
        }).catch((error) => {
            console.error(error)
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, logedUser => {
            logedUser && setUser(logedUser);
            console.log('auth state changed and current user is', logedUser)
            setLoading(false)

        })
        return (() => unsubscribe())

    }, [auth])
    const dd = 'sami'
    const named = 'sami';
    const commonData = { dd, named, GoogleSignInConst, user, logOutCall, userCreateCall, updateUsercall, logInCall, loading };
    return (
        <SharedContext.Provider value={commonData}>
            {children}
        </SharedContext.Provider>
    );
};

export default SharedPage;