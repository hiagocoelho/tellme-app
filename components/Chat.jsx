import React, { useState } from 'react'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyChTP3z-EsR49PLiM5V6U30tOdxGdx6xc4",
    authDomain: "tellme-89144.firebaseapp.com",
    projectId: "tellme-89144",
    storageBucket: "tellme-89144.appspot.com",
    messagingSenderId: "491322420817",
    appId: "1:491322420817:web:0bf975a401b6ee709e1270",
    measurementId: "G-SHNMPJQ5WR"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    const auth = firebase.auth()
    const firestore = firebase.firestore()
    const analytics = firebase.analytics()
 } else {
    firebase.app()
 }

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