import React from "react";
import List from "./List";
import Ratingfilter from "./Ratingfilter";
import {data} from './data';
import Filmfilter from "./Filmfilter";
import "./App.css";



class App extends React.Component {
  state = {
    movies: data,
    minRatingFilter: "3",
    titleFilter: "",
    loading: true
    
  };
  componentDidMount=()=>{
    setTimeout(() => {this.setState({loading:false})}, 3000);
  }
  
  fnRating=(newRating)=>{
    this.setState({ minRatingFilter :newRating})};

  add = x => {
    this.setState({
      movies: this.state.movies.concat({ id: Math.random(), ...x })
    });
  };
  handleRating = () => {
    this.setState({ minRatingFilter: this.state.minRatingFilter });


  };
  Changetitle=(newtitleFilter)=>{ 
    this.setState({ titleFilter: newtitleFilter });
  }
   
  render() {
     
    return (
      <div className="App">
        <Filmfilter
          value={this.state.Filmfilter}
          Changetitle={this.Changetitle}
        />

        <Ratingfilter rate={this.state.minRatingFilter}  
        fnRating={this.fnRating}

        
        />
        <List
          Movie={this.state.movies.filter(
            (el, i) => el.isRating <= this.state.minRatingFilter && el.title.toLowerCase().includes(this.state.titleFilter.toLowerCase().trim())
          )}
          add={this.add}
          isLoading={this.state.loading}
        />
      </div>
    );
  }
}

export default  App ;


