import React, { useState } from 'react'

import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDgJ2owlGYZGH0STvjeBYmmaBWZ_lPk-9Q",
    authDomain: "tellme-app-e0def.firebaseapp.com",
    projectId: "tellme-app-e0def",
    storageBucket: "tellme-app-e0def.appspot.com",
    messagingSenderId: "23172765752",
    appId: "1:23172765752:web:5fe1d9c15759c55cd52ecd",
    measurementId: "G-5E25B0B3Y7"
  };

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default function Chat () {
    const [formValue, setFormValue] = useState('')

    
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
            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}