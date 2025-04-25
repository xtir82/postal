import React, {useState} from 'react';
import styles from "./NewPost.module.css"

const NewPost = ({onCancel, onAddPost}) => {
    const [bodyText, setBodyText] = useState('');
    const [author, setAuthor] = useState('');

    const BodyChangeHandler = (event) => {
        setBodyText(event.target.value);
    }

    const AuthorChangeHandler = (event) => {
        setAuthor(event.target.value);
    }

    const SubmitHandler = (event) => {
        event.preventDefault();
        const postData = {
            author: author,
            bodyText: bodyText,
        }

        onAddPost(postData);
        onCancel();
    }

    return (
        <>
            <form className={styles.form} onSubmit={SubmitHandler}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} onChange={BodyChangeHandler}/>
                </p>
                <p>
                    <label htmlFor="name">Your Name</label>
                    <input id="name" type="text" onChange={AuthorChangeHandler} required />
                </p>
                <p className={styles.actions}>
                    <button onClick={onCancel} type="button">Cancel</button>
                    <button onClick='#'>Submit</button>
                </p>
            </form>
        </>
    )
};

export default NewPost;