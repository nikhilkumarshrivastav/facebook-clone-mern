import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

const Feed = () => {
    return (
        <div className='feed' >
            <StoryReel />
            <MessageSender />

            <Post
            profilePic='https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'
            message='This is a message!'
            timestamp='1601493943737'
            imgName='imgName'
            username='Isen'
            />

            {/* {
                postsData.map(entry => (
                    <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
                ))
            } */}
        </div>
    )
}

export default Feed