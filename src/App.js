import React from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";

class App extends React.Component {

  state= {
    movies:[],
    genre:[],
    selectedFilter: "All Genres",
    search: ""
  };

  setFilter= (filter)=>{
    this.setState({selectedFilter:filter});
  };

  toggleLike=(id)=>{
    const currMoviesArr= this.state.movies;
    const idx= currMoviesArr.findIndex((e)=>e._id === id);
    currMoviesArr[idx].liked=(currMoviesArr[idx].liked)? false:true;

    this.setState({movies: currMoviesArr});
  };

  deleteMovie= (id)=>{
    const newMovies= this.state.movies.filter((el)=>el._id!==id);

    this.setState({movies: newMovies});
  };
  
  updateSearch= (s)=>{
    this.setState({search: s});
  }
  componentDidMount(){
    const f= async ()=>{
      let responseGenre = await fetch("http://localhost:4000/genre");
      let responseMovies = await fetch("http://localhost:4000/movies");
      let moviesJson = await responseMovies.json();
      let genreJson = await responseGenre.json();

      this.setState({
        movies: moviesJson,
        genre: genreJson,
      });
    }

    f();
  }

  render (){
    return (
      <div>
          <Navbar />
          <div className="row">
                <Filter handleFilter= {this.setFilter}  selectedFilter={this.state.selectedFilter} genreData= {this.state.genre}/>
                <div className="col-9 p-4">
                  <Search updateSearch={this.updateSearch} total= {this.state.movies.length}/>
                  <Table search={this.state.search} deleteMovie= {this.deleteMovie} toggleLike={this.toggleLike} moviesData= {this.state.movies} selectedFilter={this.state.selectedFilter} />
                </div>
          </div>
      </div>
    );
  }
}

export default App;
