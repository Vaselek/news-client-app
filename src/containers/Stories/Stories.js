import React, {Component, Fragment} from 'react';
import {Button, Card, CardBody} from "reactstrap";
import {deleteStory, fetchStories} from "../../store/actions/storiesActions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import StoryThumbnail from "../../components/StoryThumbnail/StoryThumbnail";

class Stories extends Component {

    componentDidMount () {
        this.props.onFetchStories()
    }

    render() {
        return (
            <Fragment>
                <h2>
                    POSTS
                    <Link to="/stories/new">
                        <Button
                            color="primary"
                            className="float-right"
                        >
                            Add story
                        </Button>
                    </Link>
                </h2>

                { this.props.stories.map(story => (
                    <Card key={story.id} style={{marginBottom: '10px'}}>
                        <CardBody style={{display: 'flex'}}>
                            <StoryThumbnail image={story.image}/>
                            <div>
                                <Link to={'/stories/' + story.id}>
                                    {story.title}
                                </Link>
                                <p><i>{story.created_at}</i></p>
                                <Link to={'/stories/' + story.id}>Read Full Post ...</Link>
                                <Button style={{position: 'absolute', right: '40px', bottom: '40px'}} onClick={()=>this.props.deleteStory(story.id)}>Delete...</Button>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    stories: state.stories.stories
})

const mapDispatchToProps = dispatch => ({
    onFetchStories: () => dispatch(fetchStories()),
    deleteStory: (storyId) => dispatch(deleteStory(storyId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Stories);