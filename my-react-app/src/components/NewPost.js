import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({onCancel, onAddPost}) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    // the user interface is to be changed as we type in the form, both the body and author fields.
    function bodyChangeHandler (event) {
        setEnteredBody(event.target.value)
    };
    
    function authorChangeHandler (event) {
        setEnteredAuthor(event.target.value)                                                      
    };

    //handle the submit button and post list
    function submitHandler (event) {
        event.preventDefault() // prevents the browser from changing the default http request to the 
        const postData = { //this is what is added to the post array in the postlist file array.
            body: enteredBody,
            author: enteredAuthor
        }
        console.log(postData);
        onAddPost(postData)
        onCancel();
    }


    return (
        <form className={classes.form} onSubmit={submitHandler}> 
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler}></textarea>
            </p>
            <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required onChange={authorChangeHandler}></input>
            </p>
            <p className={classes.actions}>
                <button type='button' onClick={onCancel}>Cancel</button> {/*this will not submit the form instead it will close it. */}
                <button>Submit</button>
            </p>
        </form>
    )
}
export default NewPost;