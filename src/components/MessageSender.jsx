import React, { useState } from 'react'
import "../css/MessageSender.css"

import { Avatar } from "@material-ui/core";
import { Videocam, PhotoLibrary, InsertEmoticon } from "@material-ui/icons";

import { useStoreState } from 'easy-peasy'

import db from "../firebase";
import firebase from 'firebase'

export function MessageSender() {

    let file = null
    let fileName = ""

    const fileUpload = (e) => {
        file = e.target.files[0]
        fileName = e.target.value.split("\\").pop()
        document.getElementById('uploaded').innerText = fileName
        if (document.getElementById('uploaded').innerText === "") {
            document.getElementById('uploaded').innerText = "Photo/Video"
        }
    }

    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (file) {
            console.log("file")
            var ref = firebase.storage().ref('postImages/' + file.name)
            console.log(ref)
            ref.put(file).then(() => {
                ref.getDownloadURL().then(url => {
                    db.collection('posts').add({
                        message: input,
                        username: user.displayName,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        profilePic: user.photoURL,
                        image: url
                    })
                    document.getElementById('uploaded').innerText = "Photo/Video"
                    file = null
                })

            })
        }
        else {
            db.collection('posts').add({
                message: input,
                username: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                profilePic: user.photoURL,
            })
        }

        setInput("")
    }

    let user = useStoreState(store => store.user)

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form onSubmit={handleSubmit}>
                    <input className="messageSender__input" value={input} onChange={
                        (e) => {
                            setInput(e.target.value)
                        }
                    } placeholder={`What's on your mind, ${user.firstName}`}></input>
                    <button type="submit">Post</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocam style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div>
                    <input type="file" name="file" id="file" class="inputfile" onChange={fileUpload} />
                    <label for="file" className="messageSender__option">
                        <PhotoLibrary style={{ color: "green" }} />
                        <h3 id="uploaded">Photo/Video</h3>
                    </label>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}