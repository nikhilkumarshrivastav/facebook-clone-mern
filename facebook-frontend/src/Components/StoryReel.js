import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story
                image='https://cdn.shopify.com/s/files/1/0158/2436/products/boss2_large.png?v=1481573693'
                profileSrc='https://img1.looper.com/img/gallery/michael-scott-moments-that-made-us-cringe/intro-1562178435.jpg'
                title='Michael Scott'
            />
            <Story
                image='https://assets.yellowtrace.com.au/wp-content/uploads/2019/07/25141848/Abstract-Portrait-Paintings-by-Joseph-Lee-Yellowtrace-05.jpg'
                profileSrc='https://cdn.costumewall.com/wp-content/uploads/2018/09/pam-beesly.jpg'
                title='Pam Beesly'
            />
            <Story
                image='https://www.syracuse.com/resizer/uvzVZE9FmamnWfRU74MN2TmnCvc=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.syracuse.com/home/syr-media/width2048/img/entertainment_impact/photo/12739477-large.jpg'
                profileSrc='https://sites.psu.edu/littlepassion/files/2018/09/5778427-jimhalpert-1fn4a96.jpg'
                title='Jim Halpert'
            />
            <Story
                image='https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/08/03/top-florida-beaches/key-west-beach-florida.jpg.rend.hgtvcom.966.725.suffix/1491580836931.jpeg'
                profileSrc='https://www.indiewire.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-06-at-10.39.06-AM.png?w=780'
                title='Stanley Hudson'
            />
            <Story
                image='https://static.wikia.nocookie.net/loveinterest/images/5/5c/3458_6_full.jpg/revision/latest/scale-to-width-down/340?cb=20130526104055'
                profileSrc='https://i.pinimg.com/originals/8e/e4/26/8ee426c9225e90dd38b46e0cbb65d16d.png'
                title='Kelly Kapoor'
            />
            <Story
                image='https://i.kym-cdn.com/entries/icons/original/000/002/314/schrutefarms.jpg'
                profileSrc='https://theofficeanalytics.files.wordpress.com/2017/11/dwight.jpeg?w=1200'
                title='Dwight Schrute'
            />
            <Story
                image='https://media-cdn.tripadvisor.com/media/photo-s/0f/f7/7a/02/bunch-of-cats.jpg'
                profileSrc='https://openpsychometrics.org/tests/characters/test-resources/pics/TO/11.jpg'
                title='Angela Martin'
            />
        </div>
    )
}

export default StoryReel