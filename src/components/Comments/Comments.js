import React, {Component, Fragment} from 'react';
import {Button, ListGroupItem, ListGroup} from "reactstrap";
import './Comments.css';

class Comments extends Component {
    render() {
        return (
            <Fragment>
                <h5 className='comments-title'>
                    COMMENTS
                </h5>
                <ListGroup>
                { this.props.comments && this.props.comments.map(comment => (
                    <ListGroupItem key={comment.id}>
                        {comment.author} wrote: {comment.text}
                        <Button className='comment-delete-btn' onClick={()=>this.props.deleteComment(comment.id)}>Delete</Button>
                    </ListGroupItem>
                ))}
                </ListGroup>
            </Fragment>
        );
    }
}



export default Comments;