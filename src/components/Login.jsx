import React from 'react'
import "../css/Login.css"

import { Button } from "@material-ui/core";
import { auth, provider } from '../firebase'

export function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.user))
                window.location.reload()
            }).catch(err => alert(err.message))
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}
