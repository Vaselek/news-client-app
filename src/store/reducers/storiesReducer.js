import {FETCH_STORIES_SUCCESS, DELETE_STORY_SUCCESS} from "../actions/storiesActions";

const initialState = {
    stories: []
};

const filterStories = (state, storyId) => {
    return state.stories.filter(story => story.id !== storyId);
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STORIES_SUCCESS:
            return {...state, stories: action.stories};
        case DELETE_STORY_SUCCESS:
            return {...state, stories: filterStories(state, action.storyId)};
        default:
            return state
    }
};

export default reducer;