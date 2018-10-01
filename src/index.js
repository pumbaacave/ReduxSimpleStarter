import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyB-fHFQ6wIFDhScRisLBAxj4CzouOTaUug'


// A component should produce some HTML 
class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selected_video: null
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ 
                videos: videos,
                selected_video: videos[0]
             });
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selected_video}/>
                <VideoList 
                onVideoSelect={selectedVideo =>this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>
            );
    } 
}

//  Take this components generated HTML and put it 
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));