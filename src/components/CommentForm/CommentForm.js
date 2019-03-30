import React, {Component, Fragment} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import './CommentForm.css';

class CommentForm extends Component {
    state = {
        author: '',
        text: '',
    }

    submitFormHandler = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <Fragment>
                <h5 className='comment-form-title'>Add New Comment</h5>
                <Form onSubmit={(e)=>this.submitFormHandler(e)}>
                    <FormGroup row>
                        <Label sm={2} for="author">Name</Label>
                        <Col sm={10}>
                            <Input
                                type="text" required
                                name="author" id="title"
                                placeholder="Enter your name please..."
                                value={this.state.author}
                                onChange={this.inputChangeHandler}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2} for="text">Comment</Label>
                        <Col sm={10}>
                            <Input
                                type="textarea" required
                                name="text" id="text"
                                placeholder="Enter your comment please..."
                                value={this.state.text}
                                onChange={this.inputChangeHandler}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={{offset:2, size: 10}}>
                            <Button type="submit" color="primary">Save</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

export default CommentForm;