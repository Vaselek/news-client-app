import axios from '../../axios-api';

export const FETCH_STORIES_SUCCESS = 'FETCH_STORIES_SUCCESS';
export const CREATE_STORY_SUCCESS = 'CREATE_STORY_SUCCESS';
export const DELETE_STORY_SUCCESS = 'DELETE_STORY_SUCCESS';


export const fetchStoriesSuccess = stories => ({type: FETCH_STORIES_SUCCESS, stories});
export const createStorySuccess = () => ({type: CREATE_STORY_SUCCESS});
export const deleteStorySuccess = (storyId) => ({type: DELETE_STORY_SUCCESS, storyId});

export const fetchStories = () => {
    return dispatch => {
        return axios.get('./stories').then(
            response => dispatch(fetchStoriesSuccess(response.data))
        )
    }
}

export const deleteStory = (storyId) => {
    return dispatch => {
        return axios.delete('./stories/' + storyId).then(
            () => dispatch(deleteStorySuccess(storyId))
        )
    }
}

export const createStory = (storyData) => {
    return dispatch => {
        return axios.post('./stories', storyData).then(
            () => dispatch(createStorySuccess())
        )
    }
}