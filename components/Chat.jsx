import React, { useState } from 'react'

export default function Chat () {
    const [formValue, setFormValue] = useState('')

    const sendMessage = async(e) => {
        e.preventDefault()
        console.log(formValue)
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