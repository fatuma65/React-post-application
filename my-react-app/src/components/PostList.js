import { useState } from 'react';
import NewPost from './NewPost';
import Post from './post';
import classes from './PostList.module.css';
import Modal from './Model';

function PostList({isPosting, onStopPosting}) { //these prop values are also recieved in postlist file
    // we can store the modal content/JSX in a variable;

    const [posts, setPosts] = useState([]) // to manage a lists of posts

    function addPostHandler (postData) { // ths is triggered everytime the form is submitted
        //if the new state depends on the old state, then we should use an arrow function function like this
        setPosts((existingPosts) => [postData, ...existingPosts])
    }//the new post is added everytime we add we click submit button

    let modelContent;
    if (isPosting) {
        modelContent = (
            <Modal onClose={onStopPosting}> {/*to make our new post have an overly look, we wrap components with other components to add extra style to them.*/}
            <NewPost //this is the value that is passed through the children object in the modal file
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
            />
        </Modal>
        );
    };

    return (
        <>
        {modelContent}
        {/* we can use method too. */}
        {/* {modalIsVisible ? (<Modal onClose={hideModalHandler}> {/*to make our new post have an overly look, we wrap components with other components to add extra style to them.
            <NewPost //this is thr value that is passed through the children object in the modal file
                onBodyChange={bodyChangeHandler} 
                onAuthorChange={authorChangeHandler}
            />
        </Modal>) : null} */}
        {posts.length > 0 && (
            <ul className={classes.posts}>
                {posts.map((post) => (
                    <Post key={post.body} author={post.author} body={post.body} />
                    ))}                                                  {/*this will yield the jsx elements */}
            </ul>
        )}
        {posts.length === 0 && (
            <div style={{textAlign: 'center', color: 'white'}}>
                <h2>There are no posts yet!</h2>
                <p>Please add some posts.</p>
            </div>
        )}      

        </>
    );
}

export default PostList;