//importing tools and libraries at the top
import React from 'react';

//importing auxiliary assets
import './app.css';

//importing all other components to be rendered by App
import SearchBar from '../SearchBar/SearchBar'; 
import SearchResults from '../SearchResults/SearchResults';

import authorAPI from '../../Util/authorAPI';

//Rewrote the App component to make it a class component
//This makes it easier to work with lifecycle methods and the app's state
class App extends React.Component {
  
  //Let's add a constructor method to create a state for this app
  constructor(props) {
    super(props);
    
    //The App's state shall hold the data retrieved as search  results
    this.state = {
      searchResults: []
    };

    this.search = this.search.bind(this);
  }

  search(term) {
    authorAPI.search(term).then(searchResults => {
      this.setState({searchResults: searchResults});
    })
  }

  render() {
    return (
      <div className='above-all'>
        <h1>AUTHOR SEARCH</h1>
        <div className='App'>

          <SearchBar onSearch={this.search}/>

          <div className='Results'>
            
            <SearchResults 
              searchResults={this.state.searchResults}
            />

          </div>

        </div>
      </div>
    )
  }
}

export default App;