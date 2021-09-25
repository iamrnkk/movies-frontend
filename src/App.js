import React from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";

class App extends React.Component {

  state= {
    movies:[],
    genre:[]
  };

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
                <Filter genreData= {this.state.genre}/>
                <div class="col-9 p-4">
                  <Search/>
                  <Table moviesData= {this.state.movies}/>
                </div>
          </div>
      </div>
    );
  }
}

export default App;
