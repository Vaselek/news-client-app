import axios from '../../axios-api';

export const FETCH_STORY_SUCCESS = 'FETCH_STORY_SUCCESS';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';

export const fetchStorySuccess = story => ({type: FETCH_STORY_SUCCESS, story});
export const fetchStoryCommentsSuccess = comments => ({type: FETCH_COMMENTS_SUCCESS, comments});
export const deleteCommentSuccess = (commentId) => ({type: DELETE_COMMENT_SUCCESS, commentId});

export const fetchStory = (storyId) => {
    return dispatch => {
        return axios.get(`./stories/${storyId}`).then(
            response => dispatch(fetchStorySuccess(response.data))
        )
    }
}

export const fetchStoryComments = (storyId) => {
    return dispatch => {
        return axios.get(`./comments?news_id=${storyId}`).then(
            response => dispatch(fetchStoryCommentsSuccess(response.data))
        )
    }
}

export const deleteComment = (commentId) => {
    return dispatch => {
        return axios.delete('./comments/' + commentId).then(
            () => dispatch(deleteCommentSuccess(commentId))
        )
    }
}

export const createComment = (commentData) => {
    return dispatch => {
        return axios.post('./comments', commentData).then(
            () => dispatch(fetchStoryComments(commentData.story_id))
        )
    }
}