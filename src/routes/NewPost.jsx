import React from 'react';
import styles from "./NewPost.module.css"
import Modal from "../components/Modal.jsx"
import {Link, Form, redirect} from "react-router-dom";

const NewPost = () => {

    return (
        <>
            <Modal>
                <Form method='post' className={styles.form}>
                    <p>
                        <label htmlFor="body">Text</label>
                        <textarea id="body" name="body" required rows={3}/>
                    </p>
                    <p>
                        <label htmlFor="name">Your Name</label>
                        <input id="name" name="author" type="text" required />
                    </p>
                    <p className={styles.actions}>
                        <Link to=".." type="button">Cancel</Link>
                        <button>Submit</button>
                    </p>
                </Form>
            </Modal>
        </>
    )
};

export default NewPost;

export const action = async ({request}) => {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData); //{body:'...', author:'...'}

    await fetch("http://localhost:8080/posts/", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
        }
    })
    return redirect('/')
}