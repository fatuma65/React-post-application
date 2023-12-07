// this is a markup that defines a single post.
import classes from './post.module.css';
// to make react choose any of the names when the page reloads
function Post (props) {
    return (
        <li className={classes.post}>
            <p className={classes.author}>{props.author}</p>  {/* the name of the author of the post */}
            <p className={classes.text}>{props.body}</p>  {/*the post of the author*/}
            
        </li>
    );
}

export default Post;