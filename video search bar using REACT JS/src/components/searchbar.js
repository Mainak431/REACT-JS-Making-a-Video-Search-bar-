import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term:'Input search data'};
    //state gives us a very good property. if the state changes we re render all
    //states and substates associated with it
  }
  // <!--event.target.value gives the term or search text as value -->
  render () {
    return (
    <div className = "search-bar">
    <input
      value = {this.state.term}
      onChange={  event =>  this.onInputChange(event.target.value)}
       />

       <p>
      Search Criteria : {this.state.term}
      </p>
    </div>
  );
  }
 //Event Handler
  onInputChange(term) {
    this.setState({term});
    this.props.onsearchtermchange(term);
  }
 }

export default SearchBar;
