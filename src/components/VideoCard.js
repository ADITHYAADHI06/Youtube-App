import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../store/appSlice';


const VideoCard = ({ video }) => {

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleSidebar());
    }

    const { snippet, statistics, id } = video;
    const { title, thumbnails, channelTitle, publishedAt, channelId } = snippet;
    const { viewCount } = statistics;

    return (
        <Link to={`watch?v=${id}`} onClick={toggleMenuHandler} className='card col-span-12 sm:col-span-6 md:col-span-6 min-[1000px]:col-span-4 min-[1350px]:col-span-3 mb-8 md:mb-5 lg:mb-8 hover:shadow-xl rounded-md p-1'>
            <div className='h-72 lg:h-[240px] min-[1350px]:h-64 '>
                <img className='h-full w-full rounded-xl' src={thumbnails?.maxres?.url || thumbnails?.high?.url} alt="thumbnail" />
            </div>
            <div className='title pl-2 my-2'>
                <h1 className='text-xl font-semibold'>{title}</h1>
                <p className='text-gray-700 '>{channelTitle}</p>
                <p className='text-gray-700 '><span>{viewCount % 100}K Views</span> <span>*</span> <span>3 days ago</span></p>
            </div>
        </Link>
    )
}

export default VideoCard