import React from 'react'
import Videolistitem from './video_list_item.js'

const VideoList = (props)=> {
  const videoItems = props.videos.map((video) => {
    return (<Videolistitem
        key={video.etag}
        video = {video}
        onVideoSelect = {props.onVideoSelect}
        />
    );
  });
  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
