import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {
    createComment,
    deleteComment,
    fetchStory,
    fetchStoryComments
} from "../../store/actions/storiesWithCommentsActions";
import Story from "../../components/Story/Story";
import Comments from "../../components/Comments/Comments";
import CommentForm from "../../components/CommentForm/CommentForm";

class StoryWithComments extends Component {
    componentDidMount() {
        const storyId = this.props.match.params.id;
        this.props.fetchStory(storyId);
        this.props.fetchStoryComments(storyId);
    }
    createComment = commentData => {
        commentData.story_id = this.props.match.params.id;
        this.props.createComment(commentData)
    }

    render() {
        console.log(this.props);
        return (
            <Fragment>
                <Story story={this.props.story}/>
                <Comments deleteComment={this.props.deleteComment} comments={this.props.comments}/>
                <CommentForm onSubmit={this.createComment}/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    story: state.storiesWithComments.story,
    comments: state.storiesWithComments.comments
})

const mapDispatchToProps = dispatch => ({
    fetchStory: (storyId) => dispatch(fetchStory(storyId)),
    fetchStoryComments: (storyId) => dispatch(fetchStoryComments(storyId)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    createComment: (commentData) => dispatch(createComment(commentData)),
})


export default connect(mapStateToProps, mapDispatchToProps)(StoryWithComments);