import React, {useEffect, useState} from 'react';
import Post from "./Post.jsx";
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";
import styles from "./PostsList.module.css";

const PostsList = ({isPosting, onStopPosting}) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPost = async() => {
            setIsLoading(true);
            const response = await fetch("http://localhost:8080/posts");
            const resData = await response.json();
            setPosts(resData.posts);
            setIsLoading(false);
        }
        fetchPost();
    }, []);

    const addPostHandler = (postData) => {
        fetch("http://localhost:8080/posts/", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json",
            }
        })

        setPosts((prevPost) => [postData, ...prevPost])
    }

    let modalContent = null;
    if (isPosting) {
        modalContent =                 
        <Modal onClose={onStopPosting}>
            <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>;
    }

    return (
        <>
            {modalContent}
            {!isLoading && posts.length > 0 && (
                <ul className={styles.postList}>
                    {posts.map((post) => (<Post key={post.id} author={post.author} message={post.bodyText} />))}
                </ul>
            )}

            {!isLoading && posts.length === 0 && (
                <div className={styles.noPostAdvice}>
                    <h2>There are no post yet</h2>
                    <p>Start Adding Some post!</p>
                </div>
            )}
            {isLoading &&
                <div className={styles.noPostAdvice}>
                    <p>Loading posts...</p>
                </div>}
        </>
    );
};

export default PostsList;