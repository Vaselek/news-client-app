import React from 'react';

const Story = ({story}) => {
    return (
        <div>
            <h1>{story.title}</h1>
            <p>{story.created_at}</p>
            <div>{story.description}</div>
        </div>
    );
};

export default Story;