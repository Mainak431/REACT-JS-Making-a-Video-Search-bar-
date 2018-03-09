import LODASH from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom'
import youtube_search from 'youtube-api-search'
import SearchBar from './components/searchbar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyA7e4Gt6Kk7hU-N47Q6eadP9t0zNpXeiLY'
//feed your own API_KEY here. i am using a youtube data api
//create a new component in react which produces some html like views page

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {videos: [],
    selectedVideo:null
  };
    //initially loading the page with the preloaded specific search data
    this.videoSearch('kolkata');
}
//when we call videodetail then it may happen that the video is still loading
//it does not wait for the function to get completed istead it calls and as videos are
//and not available and it will send an empty props
//we need to solve it (async operation)

videoSearch(term) {
  youtube_search ({key : API_KEY, term:term},(videos)=> {
      this.setState({videos: videos,
                  selectedVideo:videos[0]});
                  });
}
//term is the search text
  render() {
    //the below line throttles the rate at which the search crieteria updates
    //debounce function ensures the requirement gets updated after 300 ms
    const videoSearch = LODASH.debounce((term)=> {this.videoSearch(term) }, 300);
    return (
    <div>
      <SearchBar onsearchtermchange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}
      />
    </div>
   );
 }

}
//Take this component's generated html and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
//passing App instance not App class
