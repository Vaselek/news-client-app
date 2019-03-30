import React, {Component, Fragment} from 'react';
import StoryForm from "../../components/StoryForm/StoryForm";
import {connect} from "react-redux";
import {createStory} from "../../store/actions/storiesActions";

class NewStory extends Component {
    createStory = storyData => {
        this.props.onStoryCreated(storyData).then(() =>{
            this.props.history.push('/');
        })
    }
    render() {
        return (
            <Fragment>
                <h2>New Story</h2>
                <StoryForm onSubmit={this.createStory} />
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onStoryCreated: storyData => dispatch(createStory(storyData))
})


export default connect(null, mapDispatchToProps)(NewStory);