import {
    FETCH_STORY_SUCCESS,
    FETCH_COMMENTS_SUCCESS,
    DELETE_COMMENT_SUCCESS
} from "../actions/storiesWithCommentsActions";

const initialState = {
    story: [],
    comments: []
};

const filterComments = (state, commentId) => {
    return state.comments.filter(comment => comment.id !== commentId);
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STORY_SUCCESS:
            return {...state, story: action.story};
        case FETCH_COMMENTS_SUCCESS:
            return {...state, comments: action.comments};
        case DELETE_COMMENT_SUCCESS:
            return {...state, comments: filterComments(state, action.commentId)};
        default:
            return state
    }
};

export default reducer;