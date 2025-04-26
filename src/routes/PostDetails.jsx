import { useLoaderData, Link } from "react-router-dom";

import Modal from "../components/Modal.jsx";
import styles from "./PostDetails.module.css";

import React from 'react';

const PostDetails = () => {
    const post = useLoaderData();

    if (!post) {
        return (
            <Modal>
                <main className={styles.details}>
                    <h1>Could not find a post</h1>
                    <p>Unfortunately, the requested post could not be found.</p>
                    <p>
                        <Link to=".." className={styles.btn}>
                            Okay
                        </Link>
                    </p>
                </main>
            </Modal>
        )
    }

    return (
        <Modal>
            <main className={styles.details}>
                <p className={styles.author}>{post.author}</p>
                <p className={styles.text}>{post.body}</p>
            </main>
        </Modal>
    );
};

export default PostDetails;

export const loader = async({params}) => {
    const response = await fetch("http://localhost:8080/posts/" + params.postId );
    const resData = await response.json();
    return resData.post;
}