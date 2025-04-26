import Post from "./Post.jsx";
import styles from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

const PostsList = () => {
    const posts = useLoaderData()

    return (
        <>
            {posts.length > 0 && (
                <ul className={styles.postList}>
                    {posts.map((post) => (
                        <Post key={post.id} id={post.id} author={post.author} body={post.body} />
                    ))}
                </ul>
            )}

            {posts.length === 0 && (
                <div className={styles.noPostAdvice}>
                    <h2>There are no post yet</h2>
                    <p>Start Adding Some post!</p>
                </div>
            )}
        </>
    );
};

export default PostsList;