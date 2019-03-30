import React, {Component, Fragment} from 'react';
import {Button, ListGroupItem, ListGroup} from "reactstrap";

class Comments extends Component {
    render() {
        return (
            <Fragment>
                <h2>
                    COMMENTS
                </h2>
                <ListGroup>
                { this.props.comments && this.props.comments.map(comment => (
                    <ListGroupItem key={comment.id}>
                        {comment.author} wrote: {comment.text}
                        <Button onClick={()=>this.props.deleteComment(comment.id)}>Delete</Button>
                    </ListGroupItem>
                ))}
                </ListGroup>
            </Fragment>
        );
    }
}



export default Comments;