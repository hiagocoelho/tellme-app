import React, { useState } from 'react'
import firebase from "firebase/app";

import 'firebase/auth'
import 'firebase/firestore'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyB8jkhp9PI1AqX4QsZZJ5_OvoDT1mk_8rU",
        authDomain: "tell-me-eb92a.firebaseapp.com",
        projectId: "tell-me-eb92a",
        storageBucket: "tell-me-eb92a.appspot.com",
        messagingSenderId: "271916954250",
        appId: "1:271916954250:web:ce1be0663b603fc8507373",
        measurementId: "G-SWYTL5XLVM"
    })
} else {
    firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()

export default function Chat () {
    const [formValue, setFormValue] = useState('')

    const [user] = useAuthState(auth)
    
    const sendMessage = async(e) => {
        e.preventDefault()
        if(formValue !== '') {
            console.log(formValue)
        } else {
            return
        }
    }

    return (
        <div>
            {user ? (
                <>
                    <form onSubmit={sendMessage}>
                    <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                    <button type='submit'>Send</button>
                    </form>
                    <SignOut />
                </>
            ) : <SignIn />}
        </div>
    )
}

function SignIn () {

    const signInAnonymously = () => { 
        console.log('Entered anonymously: ')
        firebase.auth().signInAnonymously()
    }

    const signInWithGoogle = () => { 
        console.log('Entered with google: ') 
    }

    return (
        <>
            <button onClick={signInAnonymously}>enter anonymously</button>
            <button onClick={signInWithGoogle}>sign with google</button>
        </>
    )
}

function SignOut () {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
}