import React, { Component } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import MovieRow from "./components/MovieRow";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.performSearch();
  }

  performSearch(searchTerm) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=c1adb2aaa273f96394c265323b2c8289&language=en-US&page=1&include_adult=false&query=${searchTerm}`;

    fetch(url)
      .then(res => res.json())
      .then(searchResults => {
        const results = searchResults.results;

        const movieRows = [];

        results.forEach(movie => {
          movie.poster_path = `https://image.tmdb.org/t/p/w185${
            movie.poster_path
          }`;
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });
        this.setState({ movieRows });
      })
      .catch(err => console.error(err));
  }

  searchChange(e) {
    const searchTerm = e.target.value;
    this.performSearch(searchTerm);
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Header />
        <Input searchChange={this.searchChange.bind(this)} />
        {this.state.movieRows}
      </div>
    );
  }
}

export default App;
