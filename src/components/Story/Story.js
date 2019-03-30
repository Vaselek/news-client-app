import React from 'react';
import './Story.css';

const Story = ({story}) => {
    const date = new Date(story.created_at);
    return (
        <div>
            <h1>{story.title}</h1>
            <p><i>{date.toDateString()}</i></p>
            <div className='story-description'>{story.description}</div>
        </div>
    );
};

export default Story;