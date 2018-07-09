import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import Login from './components/login';

const API_KEY = 'AIzaSyBjQqTJ4iEpslZhx-wsP6qaD2y_k43tVa8';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: '5798801051001',
      isLoggedIn: false
    };

//    this.videoSearch('5798801051001');

  }

  videoSearch = (term) => {
    this.setState({ videoId: term });
  };

  loggedIn = (isLoggedIn) => {
    this.setState({ isLoggedIn: isLoggedIn });
  };

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <Login hideMe={this.state.isLoggedIn} onLoggedIn={this.loggedIn}/>
        <SearchBar onSearchTermChange={videoSearch} showMe={this.state.isLoggedIn}/>
        <VideoDetail videoId={this.state.videoId} showMe={this.state.isLoggedIn}/>
      </div>
    );
  }
}

ReactDom.render(<App/>, document.querySelector('.container'));