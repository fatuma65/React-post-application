import classes from './Model.module.css';
// since react may not know where to put our wrapped content, we add props as an argument to it.
function Modal ({children, onClose}) { // we can use object destructuring instead to get the value instead of using props.
    return (
        <>
            <div className={classes.backdrop} onClick={onClose}></div> {/*To render th background */}
            <dialog open className={classes.modal}> {/*To hold the modal content */}
                {children} {/*this is a reserved prop name, it refers to content that is passed through the opening and closing tags */}
            </dialog>

        </>
    )
}
export default Modal;